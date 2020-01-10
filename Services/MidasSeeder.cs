using CsvHelper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Midas.Data;
using Midas.Data.Entities;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using Midas.Data.Extensions;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;

namespace Midas.Services
{
    public class MidasSeeder
    {
        private readonly MidasContext _ctx;
        private readonly IWebHostEnvironment _hosting;
        private readonly UserManager<MidasUser> _userManager;
        private readonly IDayRepository _dayRepository;
        private readonly IOptionCycleDateRepository _optionCycleDateRepository;
        private readonly ITickerRepository _tickerRepo;
        private readonly IEodRepository _eodRepo;
        private readonly IMidasRepository _repository;
        private readonly ILogger<MidasSeeder> _logger;

        public MidasSeeder(MidasContext ctx,
            IWebHostEnvironment hosting,
            UserManager<MidasUser> userManager,
            IDayRepository dayRepository,
            IOptionCycleDateRepository optionCycleDateRepository,
            ITickerRepository tickerRepo,
            IEodRepository EodRepo,
            IMidasRepository repository,
            ILogger<MidasSeeder> logger)
        {
            _ctx = ctx;
            _hosting = hosting;
            _userManager = userManager;
            _dayRepository = dayRepository;
            _optionCycleDateRepository = optionCycleDateRepository;
            _tickerRepo = tickerRepo;
            _eodRepo = EodRepo;
            _repository = repository;
            _logger = logger;
        }

        public static void RunSeeding(IHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var seeder = scope.ServiceProvider.GetService<MidasSeeder>();

                // TIINGO TICKER SEED
                DownloadService.downloadSupportedTickerTiingo();
                seeder.SeedTiingoTickers();

                // SEED DAYS
                seeder.SeedDays();

                // SEED COMPANIES
                seeder.SeedCompanies();

                // SEED OPTIONS CYCLES OPEN MONTHS
                seeder.SeedOptionCycleMonths();

                // SEED OPTIONS CYCLES CLOSE MONTHS
                seeder.SeedOptionCycleCloseMonths();

                // SEED OPTIONS CYCLES
                seeder.SeedOptionCycles();

                // IEX TICKER SEED
                //seeder.SeedIexTickers().Wait();

                // TIINGO - END OF DAY
                //seeder.SeedTiingoEndOfDays(5).Wait();

                // IEX - END OF DAY
                //seeder.SeedIexEndOfDays(5).Wait();

                // YAHOO - END OF DAY
                //seeder.YahooGetPreviousDayEOD().Wait();

            }
        }

        private void SeedCompanies()
        {

            _ctx.Database.EnsureCreated();

            var tickerList = _tickerRepo.GetTestTickers(500);
            var firstCompanyId = tickerList[0].CompanyId;

            if (tickerList.Any() && firstCompanyId == 0)
            {
                foreach (var ticker in tickerList)
                {
                    var requestString = $"{ApiTokens.iex_live_domain}{ApiTokens.iex_company_p1}{ticker.ticker}{ApiTokens.iex_company_p2}{ApiTokens.live_iex_public_token}";

                    var settings = new JsonSerializerSettings
                    {
                        NullValueHandling = NullValueHandling.Ignore,
                        MissingMemberHandling = MissingMemberHandling.Ignore
                    };

                    using (WebClient webClient = new WebClient())
                    {
                        try
                        {
                            var json = webClient.DownloadString(requestString);

                            if (json == "Unknown symbol")
                            {
                                break;
                            }
                            var company = JsonConvert.DeserializeObject<Company>(json, settings);

                            if (ticker.TiingoBool == true)
                            {
                                company.tiingoTickerId = ticker.id;
                            }
                            else if (ticker.IexBool == true)
                            {
                                company.iexTickerId = ticker.id;
                            }
                            else if (ticker.YahooBool == true)
                            {
                                company.yahooTickerId = ticker.id;
                            }

                            ticker.Company = company;
                            _ctx.SaveChanges();
                        }
                        catch (Exception ex)
                        {
                            _logger.LogError($"Company Failed: {ex}");
                        }

                    }
                }
            }
        }

        private void SeedOptionCycleMonths()
        {

            _ctx.Database.EnsureCreated();

            //_ctx.Database.ExecuteSqlCommand("TRUNCATE TABLE [OptionCycleMonths]");

            var monthsBack = 0;
            if (DevelopmentEnvironment.getEnvironment()) { monthsBack = DevelopmentEnvironment.devMonthsBack; } else { monthsBack = DevelopmentEnvironment.prodMonthsBack; }

            if (!_ctx.OptionCycleMonths.Any())
            {
                var nextMonth = DateTime.Today.AddMonths(12);

                for (int i = monthsBack; i > 0; i--)
                {
                    var monthDate = nextMonth.AddMonths(-i);

                    var monthDaysList = _dayRepository.GetDaysByMonthAndYear(monthDate.Month, monthDate.Year);

                    foreach (var monthDay in monthDaysList)
                    {

                        if (monthDay.Date.IsThirdMondayOfMonth() == true)
                        {
                            var optionCycleMonth = new OptionCycleMonth();
                            optionCycleMonth.Date = monthDay.Date;
                            optionCycleMonth.Year = monthDay.year;
                            optionCycleMonth.Month = monthDay.month;

                            _ctx.OptionCycleMonths.Add(optionCycleMonth);
                            _ctx.SaveChanges();

                            break;
                        }
                    }
                }
            }



        }

        private void SeedOptionCycleCloseMonths()
        {

            _ctx.Database.EnsureCreated();

            //_ctx.Database.ExecuteSqlCommand("TRUNCATE TABLE [OptionCycleCloseMonths]");

            var monthsBack = 0;
            if (DevelopmentEnvironment.getEnvironment()) { monthsBack = DevelopmentEnvironment.devMonthsBack; } else { monthsBack = DevelopmentEnvironment.prodMonthsBack; }

            if (!_ctx.OptionCycleCloseMonths.Any())
            {
                var nextMonth = DateTime.Today.AddMonths(12);

                for (int i = monthsBack; i > 0; i--)
                {
                    var monthDate = nextMonth.AddMonths(-i);

                    var thirdFridayNumber = DateTimeExtensions.DayFinder.FindDay(monthDate.Year, monthDate.Month, DayOfWeek.Friday, 3);

                    var date = new DateTime(monthDate.Year, monthDate.Month, thirdFridayNumber);
                    var thirdFridayDay = _dayRepository.GetDayByDate(date);

                    if (thirdFridayDay != null)
                    {
                        var optionCycleCloseMonth = new OptionCycleCloseMonth();
                        optionCycleCloseMonth.CloseDate = thirdFridayDay.Date;
                        optionCycleCloseMonth.Year = thirdFridayDay.year;
                        optionCycleCloseMonth.Month = thirdFridayDay.month;

                        _ctx.OptionCycleCloseMonths.Add(optionCycleCloseMonth);
                        _ctx.SaveChanges();
                    }
                }
            }


        }

        private void SeedOptionCycles()
        {
            _ctx.Database.EnsureCreated();

            //_ctx.Database.ExecuteSqlCommand("TRUNCATE TABLE [OptionCycleDates]");

            var monthsBack = 12;

            var daysList = _dayRepository.GetAllDays();

            foreach (var day in daysList)
            {
                _optionCycleDateRepository.CreateOptionCycleOpens(day, monthsBack);
            }
        }

        private void SeedDays()
        {
            _ctx.Database.EnsureCreated();

            //_ctx.Database.ExecuteSqlCommand("TRUNCATE TABLE [Days]");

            var daysBack = 0;

            if (DevelopmentEnvironment.getEnvironment()) { daysBack = 380; } else { daysBack = 750; }

            var daysBackList = Day.DaysBack(daysBack);
            var daysForwardList = Day.DaysForward(daysBack);

            //BACK
            foreach (var day in daysBackList)
            {
                _dayRepository.CreateNewDay(day.Date);
            }

            //FORWARD
            foreach (var day in daysForwardList)
            {
                _dayRepository.CreateNewDay(day.Date);
            }
        }

        // YAHOO - START

        private void YahooGetPreviousDayEOD()
        {

            _ctx.Database.EnsureCreated();

            // TICKER LIST
            var tickerList = _tickerRepo.GetTickersIex(10);

            foreach (var ticker in tickerList)
            {
                var requestString = $"{ApiTokens.yahoo_query_v7}{ticker.ticker}?range=1d&interval=1d&indicators=quote&includeTimestamps=true";

                try
                {
                    using (WebClient webClient = new WebClient())
                    {

                        var json = webClient.DownloadString(requestString);
                        //var yahooJson = JsonConvert.DeserializeObject<IexTicker>(json);

                        //var indicators = yahooJson.Chart.Result[0].Indicators.Quote[0];
                        //var indicatorsAdj = yahooJson.Chart.Result[0].Indicators.Adjclose[0];

                        var YahooEOD = new EOD();
                        //YahooEOD.Open = indicators.Open[0];
                        //YahooEOD.High = indicators.High[0];
                        //YahooEOD.Low = indicators.Low[0];
                        //YahooEOD.Close = indicators.Close[0];
                        //YahooEOD.AdjClose = indicatorsAdj.AdjcloseAdjclose[0];
                        //YahooEOD.Volume = indicators.Volume[0];
                        YahooEOD.YahooBool = true;

                        // DAY
                        var Day = _dayRepository.GetDayByDate(DateTime.Today);
                        YahooEOD.DayId = Day.id;
                        YahooEOD.TickerId = ticker.id;

                        _ctx.EODs.Add(YahooEOD);
                        _ctx.SaveChanges();
                    }
                }
                catch (WebException ex)
                {
                    throw ex;
                }
            }

        }
        // YAHOO - END

        // IEX - START
        private void SeedIexTickers()
        {
            _ctx.Database.EnsureCreated();

            var requestString = $"{ApiTokens.iex_live_domain}{ApiTokens.iex_ticker_list}{ApiTokens.live_iex_public_token}";

            try
            {
                using (WebClient webClient = new WebClient())
                {
                    webClient.BaseAddress = ApiTokens.tiingo_production;
                    var json = webClient.DownloadString(requestString);
                    var tickerList = JsonConvert.DeserializeObject<List<Ticker>>(json);

                    foreach (var ticker in tickerList)
                    {
                        ticker.IexBool = true;
                        Console.WriteLine(" ");
                        _ctx.Tickers.Add(ticker);
                        _ctx.SaveChanges();
                    }
                }
            }
            catch (WebException ex)
            {
                throw ex;
            }

        }

        

        // TIINGO - START
        private void SeedTiingoEndOfDays(int daysBack)
        {
            _ctx.Database.EnsureCreated();

            // DAYS LIST
            var daysList = Day.DaysBack(180);

            // TICKER LIST
            var tickerList = _tickerRepo.GetTickersTiingo(10);

            foreach (var ticker in tickerList)
            {

                foreach (var day in daysList)
                {
                    //var EodItem = _eodRepo.GetTiingoEODByTickerId(ticker.id, day.id);

                    //if (EodItem == null)
                    //{
                    //    var formattedDate = String.Format("{0:yyyy-MM-dd}", day.Date);

                    //    var requestString = $"{ApiTokens.tiingo_production}{ApiTokens.daily_endofday}{ticker.ticker}/prices?startDate={formattedDate}&endDate={formattedDate}&token={ApiTokens.tiingo_token}";

                    //    var downloadString = $"{ApiTokens.daily_endofday}{ticker.ticker}/prices?startDate={formattedDate}&endDate={formattedDate}&token={ApiTokens.tiingo_token}";

                    //    try
                    //    {
                    //        using (WebClient webClient = new WebClient())
                    //        {
                    //            webClient.BaseAddress = ApiTokens.tiingo_production;
                    //            var json = webClient.DownloadString(downloadString);
                    //            var eodList = JsonConvert.DeserializeObject<List<EOD>>(json);

                    //            if (eodList.Count == 0)
                    //            {
                    //                var emptyEod = new EOD();
                    //                emptyEod.TiingoBool = true;
                    //                emptyEod.TickerId = ticker.id;
                    //                emptyEod.DayId = day.id;
                    //                emptyEod.Open = 0.00;
                    //                emptyEod.High = 0.00;
                    //                emptyEod.Low = 0.00;
                    //                emptyEod.Close = 0.00;
                    //                emptyEod.Volume = 0;

                    //                _ctx.EODs.Add(emptyEod);
                    //                _ctx.SaveChanges();
                    //            }
                    //            else
                    //            {
                    //                foreach (var item in eodList)
                    //                {
                    //                    item.TickerId = ticker.id;
                    //                    item.DayId = day.id;
                    //                    item.TiingoBool = true;

                    //                    _ctx.EODs.Add(item);
                    //                    _ctx.SaveChanges();
                    //                }
                    //            }

                    //        }
                    //    }
                    //    catch (WebException ex)
                    //    {
                    //        throw ex;
                    //    }
                    //}

                }

            }
        }

        public void SeedTiingoTickers()
        {
            if (!_ctx.Tickers.Any())
            {
                _ctx.Database.EnsureCreated();

                var config = new CsvHelper.Configuration.Configuration
                {
                    HasHeaderRecord = true,
                    HeaderValidated = null,
                    MissingFieldFound = null,
                    IgnoreBlankLines = false
                };

                // CHECK FILE DATE CREATED
                DateTime creation = File.GetCreationTime("Data/Seed/tiingo_tickers/extract/supported_tickers.csv");

                TextReader reader = new StreamReader("Data/Seed/tiingo_tickers/extract/supported_tickers.csv");
                var csvReader = new CsvReader(reader, config);
                var records = csvReader.GetRecords<Ticker>();

                var updatedList = new List<Ticker>();

                // SET TIINGO TO TRUE
                foreach (var ticker in records)
                {
                    ticker.TiingoBool = true;
                    updatedList.Add(ticker);
                }

                _ctx.Tickers.AddRange(updatedList);
                _ctx.SaveChanges();

            }

        }
        // TIINGO - END

    }
}
