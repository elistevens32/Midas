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
using System.Text;
using System.Threading.Tasks;

namespace Midas
{
    public class MidasSeeder
    {
        private readonly MidasContext _ctx;
        private readonly IWebHostEnvironment _hosting;
        private readonly UserManager<MidasUser> _userManager;
        private readonly IMidasRepository _repository;

        public MidasSeeder(MidasContext ctx, IWebHostEnvironment hosting, UserManager<MidasUser> userManager, IMidasRepository repository)
        {
            _ctx = ctx;
            _hosting = hosting;
            _userManager = userManager;
            _repository = repository;
        }

        public static void RunSeeding(IHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var seeder = scope.ServiceProvider.GetService<MidasSeeder>();

                // TIINGO TICKER SEED
                //DownloadService.downloadSupportedTickerTiingo();
                //seeder.SeedTiingoTickers();

                // IEX TICKER SEED
                //seeder.SeedIexTickers().Wait();

                // YAHOO TICKER SEED
                //seeder.SeedYahooTickers();

                // SEED DAYS
                //seeder.SeedDays();

                // TIINGO - END OF DAY
                //seeder.SeedTiingoEndOfDays(5).Wait();

                // IEX - END OF DAY
                //seeder.SeedIexEndOfDays(5).Wait();

                // YAHOO - END OF DAY
                //seeder.YahooGetPreviousDayEOD().Wait();

                // SEED COMPANY INFO
                seeder.SeedCompanyInfo();

            }
        }

        private void SeedCompanyInfo()
        {
            _ctx.Database.EnsureCreated();

            var tickerList = _repository.GetAllTickers(100);
            var companyList = new List<Company>();

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

                    companyList.Add(company);
                }

            }

            _ctx.Companys.AddRange(companyList);
            _ctx.SaveChanges();
        }


        // YAHOO - START

        private void YahooGetPreviousDayEOD()
        {

            _ctx.Database.EnsureCreated();

            // TICKER LIST
            var tickerList = _repository.GetTickersIex(10);

            foreach (var ticker in tickerList)
            {
                var requestString = $"{ApiTokens.yahoo_query_v7}{ticker.ticker}?range=1d&interval=1d&indicators=quote&includeTimestamps=true";

                try
                {
                    using (WebClient webClient = new WebClient())
                    {

                        var json = webClient.DownloadString(requestString);
                        var yahooJson = JsonConvert.DeserializeObject<IexTicker>(json);

                        var indicators = yahooJson.Chart.Result[0].Indicators.Quote[0];
                        var indicatorsAdj = yahooJson.Chart.Result[0].Indicators.Adjclose[0];

                        var YahooEOD = new EOD();
                        YahooEOD.Open = indicators.Open[0];
                        YahooEOD.High = indicators.High[0];
                        YahooEOD.Low = indicators.Low[0];
                        YahooEOD.Close = indicators.Close[0];
                        YahooEOD.AdjClose = indicatorsAdj.AdjcloseAdjclose[0];
                        YahooEOD.Volume = indicators.Volume[0];
                        YahooEOD.YahooBool = true;

                        // DAY
                        var Day = _repository.GetDayByDate(DateTime.Today);
                        YahooEOD.dayId = Day.id;
                        YahooEOD.tickerId = ticker.id;

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

        private void SeedIexEndOfDays(int daysBack)
        {
            _ctx.Database.EnsureCreated();

            // DAYS LIST
            var yesterday = DateTime.Today.AddDays(-1);
            var daysList = _repository.DaysBack(yesterday.AddDays(-daysBack));

            // TICKER LIST
            var tickerList = _repository.GetTickersTiingo(10);

            foreach (var ticker in tickerList)
            {

                foreach (var day in daysList)
                {
                    var EodItem = _repository.GetTiingoEODByTickerId(ticker.id, day.id);

                    if (EodItem.AdjOpen != 0)
                    {
                        var formattedDate = String.Format("{0:yyyyMMdd}", day.Date);

                        var requestString = $"{ApiTokens.iex_sandbox_domain}{ApiTokens.iex_historical_day_p1}{ticker.ticker}{ApiTokens.iex_historical_day_p2}{formattedDate}?chartByDay=true&token={ApiTokens.test_iex_public_token}";

                        try
                        {
                            using (WebClient webClient = new WebClient())
                            {
                                webClient.BaseAddress = ApiTokens.tiingo_production;
                                var json = webClient.DownloadString(requestString);
                                var eodList = JsonConvert.DeserializeObject<List<EOD>>(json);

                                if (eodList.Count == 0)
                                {
                                    var emptyEod = new EOD();
                                    emptyEod.IexBool = true;
                                    emptyEod.tickerId = ticker.id;
                                    emptyEod.dayId = day.id;
                                    emptyEod.Open = 0.00;
                                    emptyEod.High = 0.00;
                                    emptyEod.Low = 0.00;
                                    emptyEod.Close = 0.00;
                                    emptyEod.Volume = 0;

                                    _ctx.EODs.Add(emptyEod);
                                    _ctx.SaveChanges();
                                }
                                else
                                {
                                    foreach (var item in eodList)
                                    {
                                        item.tickerId = ticker.id;
                                        item.dayId = day.id;
                                        item.IexBool = true;

                                        _ctx.EODs.Add(item);
                                        _ctx.SaveChanges();
                                    }
                                }

                            }
                        }
                        catch (WebException ex)
                        {
                            throw ex;
                        }
                    }

                }

            }
        }
        // IEX - END

        // TIINGO - START
        private void SeedTiingoEndOfDays(int daysBack)
        {
            _ctx.Database.EnsureCreated();

            // DAYS LIST
            var yesterday = DateTime.Today.AddDays(-1);
            var daysList = _repository.DaysBack(yesterday.AddDays(-daysBack));

            // TICKER LIST
            var tickerList = _repository.GetTickersTiingo(10);

            foreach (var ticker in tickerList)
            {

                foreach (var day in daysList)
                {
                    var EodItem = _repository.GetTiingoEODByTickerId(ticker.id, day.id);

                    if (EodItem == null)
                    {
                        var formattedDate = String.Format("{0:yyyy-MM-dd}", day.Date);

                        var requestString = $"{ApiTokens.tiingo_production}{ApiTokens.daily_endofday}{ticker.ticker}/prices?startDate={formattedDate}&endDate={formattedDate}&token={ApiTokens.tiingo_token}";

                        var downloadString = $"{ApiTokens.daily_endofday}{ticker.ticker}/prices?startDate={formattedDate}&endDate={formattedDate}&token={ApiTokens.tiingo_token}";

                        try
                        {
                            using (WebClient webClient = new WebClient())
                            {
                                webClient.BaseAddress = ApiTokens.tiingo_production;
                                var json = webClient.DownloadString(downloadString);
                                var eodList = JsonConvert.DeserializeObject<List<EOD>>(json);

                                if (eodList.Count == 0)
                                {
                                    var emptyEod = new EOD();
                                    emptyEod.TiingoBool = true;
                                    emptyEod.tickerId = ticker.id;
                                    emptyEod.dayId = day.id;
                                    emptyEod.Open = 0.00;
                                    emptyEod.High = 0.00;
                                    emptyEod.Low = 0.00;
                                    emptyEod.Close = 0.00;
                                    emptyEod.Volume = 0;

                                    _ctx.EODs.Add(emptyEod);
                                    _ctx.SaveChanges();
                                }
                                else
                                {
                                    foreach (var item in eodList)
                                    {
                                        item.tickerId = ticker.id;
                                        item.dayId = day.id;
                                        item.TiingoBool = true;

                                        _ctx.EODs.Add(item);
                                        _ctx.SaveChanges();
                                    }
                                }

                            }
                        }
                        catch (WebException ex)
                        {
                            throw ex;
                        }
                    }

                }

            }
        }

        public void SeedTiingoTickers()
        {
            DateTime creation = File.GetCreationTime("Data/Seed/tiingo_tickers/extract/supported_tickers.csv");
            var tiingoRepositoryList = _repository.GetTickersTiingo(0);

            if (creation.Date != DateTime.Today || !tiingoRepositoryList.Any())
            {
                _ctx.Database.EnsureCreated();

                var filePath = Path.Combine(_hosting.ContentRootPath, "Data/Seed/tiingo_tickers/extract/supported_tickers.csv");

                var csv = File.ReadAllText(filePath);

                var config = new CsvHelper.Configuration.Configuration
                {
                    HasHeaderRecord = true,
                    HeaderValidated = null,
                    MissingFieldFound = null,
                    IgnoreBlankLines = false
                };

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

        public void SeedDays()
        {
            _ctx.Database.EnsureCreated();

            if (!_ctx.Days.Any())
            {
                var days = Day.DaysBack(730);

                _ctx.Days.AddRange(days);
                _ctx.SaveChanges();
            }
        }

        //public async Task SeedAsync()
        //{
        //    _ctx.Database.EnsureCreated();

        //    // Seed the Main User
        //    MidasUser user = await _userManager.FindByEmailAsync("elistevens32@gmail.com");
        //    if (user == null)
        //    {
        //        user = new MidasUser()
        //        {
        //            LastName = "Stevens",
        //            FirstName = "Eli",
        //            Email = "elistevens32@gmail.com",
        //            UserName = "elistevens32@gmail.com"
        //        };

        //        var result = await _userManager.CreateAsync(user, "P@ssw0rd!");
        //        if (result != IdentityResult.Success)
        //        {
        //            throw new InvalidOperationException("Could not create user in Seeding");
        //        }
        //    }

        //}
    }
}
