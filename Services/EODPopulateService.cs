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
using System.Threading;
using System.Globalization;
using Nager.Date;

namespace Midas.Services
{
    public class EODPopulateService
    {
        // UNKNOWN SYMBOL CHECK
        public bool dayGood = true;
        public bool holiday = false;
        public double volumeThreshold = 400000;

        private readonly MidasContext _ctx;
        private readonly IWebHostEnvironment _hosting;
        private readonly UserManager<MidasUser> _userManager;
        private readonly IDayRepository _dayRepository;
        private readonly IOptionCycleDateRepository _optionCycleDateRepository;
        private readonly ITickerRepository _tickerRepo;
        private readonly IEodRepository _eodRepo;
        private readonly IMidasRepository _repository;
        private readonly ILogger<MidasSeeder> _logger;

        public EODPopulateService(MidasContext ctx,
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

        public static void RunEODPopulate(IHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var EODPopulate = scope.ServiceProvider.GetService<EODPopulateService>();

                // IEX EOD POPULATE
                EODPopulate.iexEODPopulate();

                // VOLUME VERIFICATION
                //EODPopulate.volumeVerification();

                // TICKER EOD VERIFICATION
                //EODPopulate.tickerEodVerification();

                // COUNT VOLUME VERIFICATION
                //EODPopulate.countVolumeVerified();

                // EOD VERIFICATION
                //EODPopulate.countEODVerified();

                // TODO - REMOVE DUPLICATE EODs

            }
        }

        private void tickerEodVerification()
        {
            var tickerList = _tickerRepo.GetVolumeVerifiedTickers(0);

            foreach (var ticker in tickerList)
            {
                var eods = _eodRepo.GetEODsByTickerId(ticker.id);
                var count = 200;
                if (eods != null && eods.Count > count)
                {
                    ticker.eodVerified = true;
                    _ctx.SaveChanges();

                    Console.WriteLine($"Updated: {ticker.ticker}");
                    Console.WriteLine(" ");
                }
            }
        }

        private void countVolumeVerified()
        {
            var tickerList = _tickerRepo.GetVolumeVerifiedTickers(0);

            Console.WriteLine($"Count: {tickerList.Count}");
        }

        private void countEODVerified()
        {
            var tickerList = _tickerRepo.GetAllEodTickers();

            Console.WriteLine($"EOD Count: {tickerList.Count}");
        }

        private void volumeVerification()
        {
            _ctx.Database.EnsureCreated();

            //_ctx.Database.ExecuteSqlCommand("TRUNCATE TABLE [EODs]");

            // DAY
            var day = _dayRepository.GetDayByDate(DateTime.Today.Date);

            // TICKER LIST
            var tickerList = _tickerRepo.GetAllStockTickers(0);

            foreach (var ticker in tickerList)
            {

                String domain = null;
                String token = null;

                if (DevelopmentEnvironment.testEnvironment == true)
                {
                    domain = ApiTokens.iex_sandbox_domain;
                    token = ApiTokens.test_iex_secret_token;
                }
                else
                {
                    domain = ApiTokens.iex_live_domain;
                    token = ApiTokens.live_iex_public_token;
                }

                var formattedDate = String.Format("{0:yyyyMMdd}", day.Date);
                var requestString = $"{domain}{ApiTokens.iex_historical_day_p1}{ticker.ticker}{ApiTokens.iex_historical_day_p2}{formattedDate}?chartByDay=true&token={token}";
                //Console.WriteLine("Request Check");

                // WEB CLIENT CALL
                iexVolumeWebClientCall(requestString, ticker, day);
            }
        }

        private void iexEODPopulate()
        {
            _ctx.Database.EnsureCreated();

            //_ctx.Database.ExecuteSqlCommand("TRUNCATE TABLE [EODs]");

            // TICKER LIST
            var tickerList = _tickerRepo.GetAllTickers(0);

            foreach (var ticker in tickerList)
            {
                String domain = null;
                String token = null;

                if (DevelopmentEnvironment.testEnvironment == true)
                {
                    #pragma warning disable CS0162 // Unreachable code detected
                    domain = ApiTokens.iex_sandbox_domain;
                    #pragma warning restore CS0162 // Unreachable code detected
                    token = ApiTokens.test_iex_secret_token;
                }
                else
                {
                    domain = ApiTokens.iex_live_domain;
                    token = ApiTokens.live_iex_public_token;
                }

                var requestString = $"{domain}{ApiTokens.iex_historical_range_p1}{ticker.ticker}{ApiTokens.iex_historical_range_p2}2y?token={token}";
                //Console.WriteLine("Request Check");

                // WEB CLIENT CALL
                iexWebClientCall(requestString, ticker);
            }
        }

        private void iexWebClientCall(String requestString, Ticker ticker)
        {
            string timestamp = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss.fff",
                                            CultureInfo.InvariantCulture);

            try
            {
                using (WebClient webClient = new WebClient())
                {
                    webClient.BaseAddress = ApiTokens.iex_sandbox_domain;
                    var json = webClient.DownloadString(requestString);

                    if (json != "Unknown symbol")
                    {
                        var eodList = JsonConvert.DeserializeObject<List<EOD>>(json);

                        if (eodList.Count == 0)
                        {
                            Console.WriteLine($"EMPTY: {ticker.ticker}");
                            Console.WriteLine(" ");
                        }
                        else
                        {
                            var volumeList = new List<long>();
                            var incrementor = 0;

                            var EODsList = new List<EOD>();

                            foreach (var item in eodList)
                            {

                                // VOLUME CHECK
                                volumeList.Add(item.Volume);

                                if (incrementor >= 50)
                                {
                                    if (volumeList.Average() > volumeThreshold)
                                    {
                                        ticker.volumeVerified = true;
                                        _ctx.SaveChanges();
                                    }
                                }
                                else 
                                {
                                    incrementor++;
                                }

                                var day = _dayRepository.GetDayByDate(item.Date);

                                var eodCheck = _eodRepo.GetEODByTickerIdAndDayId(ticker.id, day.id);

                                if (eodCheck == null)
                                {
                                    item.TickerId = ticker.id;
                                    item.DayId = day.id;
                                    item.IexBool = true;

                                    EODsList.Add(item);

                                    Console.WriteLine($"Success: {timestamp} | {ticker.ticker} | {day.Date}");
                                    Console.WriteLine(" ");
                                    
                                }
                            }
                            _ctx.EODs.AddRange(EODsList);
                            _ctx.SaveChanges();
                        }
                    }
                    else
                    {
                        Console.WriteLine($"UNKNOWN: {ticker.ticker}");
                        Console.WriteLine(" ");
                    }

                    //Thread.Sleep(500);
                }
            }
            catch
            {
                Console.WriteLine($"EXCEPTION: {ticker.ticker}");
                Console.WriteLine(" ");
            }
        }


        private void iexVolumeWebClientCall(String requestString, Ticker ticker, Day day)
        {
            string timestamp = DateTime.UtcNow.ToString("yyyy-MM-dd HH:mm:ss.fff",
                                            CultureInfo.InvariantCulture);

            string dayTime = day.Date.ToString("yyyy-MM-dd",
                CultureInfo.InvariantCulture);

            try
            {
                using (WebClient webClient = new WebClient())
                {
                    webClient.BaseAddress = ApiTokens.iex_sandbox_domain;
                    var json = webClient.DownloadString(requestString);

                    if (json != "Unknown symbol")
                    {
                        var eodList = JsonConvert.DeserializeObject<List<EOD>>(json);

                        if (eodList.Count == 0)
                        {
                            Console.WriteLine($"EMPTY: {ticker.ticker} | {dayTime}");
                            Console.WriteLine($"Day of Week: {day.Date.DayOfWeek}");
                            Console.WriteLine(" ");
                        }
                        else
                        {

                            foreach (var item in eodList)
                            {

                                if (item.Volume > volumeThreshold)
                                {
                                    ticker.volumeVerified = true;

                                    Console.WriteLine($"Success: {timestamp} | {ticker.ticker} | {dayTime}");
                                    Console.WriteLine(" ");
                                    _ctx.SaveChanges();
                                }
                                else
                                {
                                    Console.WriteLine($"Thin Volume: {ticker.ticker}");
                                    Console.WriteLine(" ");
                                }
                            }

                        }
                    }
                    else
                    {
                        Console.WriteLine($"UNKNOWN: {ticker.ticker}");
                        Console.WriteLine(" ");
                    }

                    Thread.Sleep(500);
                }
            }
            catch
            {
                Console.WriteLine($"EXCEPTION: {ticker.ticker}");
                Console.WriteLine(" ");
            }
        }

    }
}
