﻿using CsvHelper;
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
                //DownloadService.downloadSupportedTickerTiingo();
                //seeder.SeedTiingoTickers();

                // SEED TICKERS
                seeder.seedTickers("NASDAQ", "Data/Seed/tickers/nasdaq_tickers.csv");
                seeder.seedTickers("NYSE", "Data/Seed/tickers/nyse_tickers.csv");

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

                // SEED RANDOM QUALITY SCORES
                seeder.SeedRandomQualityScores();

            }
        }

        private void SeedRandomQualityScores()
        {
            //_ctx.Database.ExecuteSqlCommand("TRUNCATE TABLE [QualityScores]");

            _ctx.Database.EnsureCreated();

            var tickerList = _tickerRepo.GetAllTickers(DevelopmentEnvironment.tickersCount);
            var qualityScoreList = _repository.GetAllQualityScores(DevelopmentEnvironment.tickersCount);
            var day = _dayRepository.GetDayByDate(DateTime.Today.Date);

            if (tickerList.Any() && qualityScoreList.Count != DevelopmentEnvironment.tickersCount)
            {
                foreach (var ticker in tickerList)
                {
                    var qsObj = QualityScore.GetRandomQualityScoreValue(.5, 3, day, ticker);

                    _ctx.QualityScores.Add(qsObj);
                    _ctx.SaveChanges();

                }
            }
        }

        private void seedTickers(String exchange, String path)
        {
            var exchangeTickerList = _tickerRepo.GetTickersByExchange(exchange);

            if (exchangeTickerList.Count == 0)
            {
                _ctx.Database.EnsureCreated();

                var config = new CsvHelper.Configuration.Configuration
                {
                    HasHeaderRecord = true,
                    HeaderValidated = null,
                    MissingFieldFound = null,
                    IgnoreBlankLines = false
                };

                TextReader reader = new StreamReader(path);
                var csvReader = new CsvReader(reader, config);
                var records = csvReader.GetRecords<Ticker>();

                var tickerList = new List<Ticker>();

                // SET TIINGO TO TRUE
                foreach (var ticker in records)
                {
                    ticker.Exchange = exchange;
                    tickerList.Add(ticker);
                }
                _ctx.Tickers.AddRange(tickerList);
                _ctx.SaveChanges();
            }
        }

        private void SeedCompanies()
        {

            _ctx.Database.EnsureCreated();

            var tickerList = _tickerRepo.GetAllTickers(DevelopmentEnvironment.tickersCount);
            var companysList = _repository.GetCompaniesThatAreGood();

            if (tickerList.Any() && companysList.Count < DevelopmentEnvironment.tickersCount)
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

                            var jsonCompany = JsonConvert.DeserializeObject<Company>(json, settings);
                            var company = _repository.GetCompanyBySymbol(ticker.ticker);
                            company.CompanyName = jsonCompany.CompanyName;
                            company.Exchange = jsonCompany.Exchange;
                            company.Industry = jsonCompany.Industry;
                            company.Website = jsonCompany.Website;
                            company.Description = jsonCompany.Description;
                            company.Ceo = jsonCompany.Ceo;
                            company.SecurityName = jsonCompany.SecurityName;
                            company.IssueType = jsonCompany.IssueType;
                            company.Sector = jsonCompany.Sector;
                            company.PrimarySicCode = jsonCompany.PrimarySicCode;
                            company.Employees = jsonCompany.Employees;
                            company.Address = jsonCompany.Address;
                            company.Address2 = jsonCompany.Address2;
                            company.State = jsonCompany.State;
                            company.City = jsonCompany.Zip;
                            company.Country = jsonCompany.Country;
                            company.Phone = jsonCompany.Phone;

                            //company = jsonCompany;

                            company.iexTickerId = ticker.id;
                            ticker.CompanyId = company.id;

                            _ctx.Companys.Update(company);
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

            var daysBack = 800;

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
            var tickerList = _tickerRepo.GetAllStockTickers(0);

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
                        //ticker.IexBool = true;
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
                    //ticker.TiingoBool = true;
                    updatedList.Add(ticker);
                }

                _ctx.Tickers.AddRange(updatedList);
                _ctx.SaveChanges();

            }

        }
        // TIINGO - END

    }
}
