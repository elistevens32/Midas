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
        public bool unknownSymbol = false;
        public bool thinVolume = false;
        public bool dayGood = true;
        public int emptyCounter = 0;
        public double volumeThreshold = 395000;

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

            }
        }

        private void iexEODPopulate()
        {
            _ctx.Database.EnsureCreated();

            //_ctx.Database.ExecuteSqlCommand("TRUNCATE TABLE [EODs]");

            // DAYS LIST
            var daysList = _dayRepository.GetAllDays();

            // TICKER LIST
            var tickerList = _tickerRepo.GetAllStockTickers(0);

            foreach (var ticker in tickerList)
            {
                foreach (var day in daysList)
                {
                    // HOLIDAY CHECK
                    DateTime utc = day.Date.UtcDateTime;
                    if (DateSystem.IsPublicHoliday(utc, CountryCode.US))
                    {
                        dayGood = false;
                    }
                    else
                    {
                        dayGood = true;
                    }

                    // DAY CHECK / HOLIDAY CHECK
                    if ((day.Date.DayOfWeek == DayOfWeek.Saturday || day.Date.DayOfWeek == DayOfWeek.Sunday))
                    {
                        dayGood = false;
                    }
                    else
                    {
                        dayGood = true;
                    }

                    // CRITERIA CHECK
                    if (
                        (unknownSymbol == false &&
                        thinVolume == false &&
                        emptyCounter <= 5)
                        )
                    {
                        var EodItem = _eodRepo.GetEODByTickerIdAndDayId(ticker.id, day.id);

                        if (EodItem == null && dayGood == true)
                        {
                            var formattedDate = String.Format("{0:yyyyMMdd}", day.Date);

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

                            var requestString = $"{domain}{ApiTokens.iex_historical_day_p1}{ticker.ticker}{ApiTokens.iex_historical_day_p2}{formattedDate}?chartByDay=true&token={token}";
                            //Console.WriteLine("Request Check");

                            // WEB CLIENT CALL
                            iexWebClientCall(requestString, ticker, day);

                        }
                    }
                    else
                    {
                        emptyCounter = 0;
                        thinVolume = false;
                        unknownSymbol = false;
                        break;
                    }
                }
            }
        }

        private void iexWebClientCall(String requestString, Ticker ticker, Day day)
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
                            emptyCounter++;
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
                                    item.TickerId = ticker.id;
                                    item.DayId = day.id;
                                    item.IexBool = true;

                                    _ctx.EODs.Add(item);

                                    emptyCounter = 0;
                                    Console.WriteLine($"Success: {timestamp} | {ticker.ticker} | {dayTime}");
                                    Console.WriteLine(" ");
                                    _ctx.SaveChanges();
                                }
                                else
                                {
                                    thinVolume = true;
                                    Console.WriteLine($"Thin Volume: {ticker.ticker}");
                                    Console.WriteLine(" ");
                                }
                            }

                        }
                    }
                    else
                    {
                        unknownSymbol = true;
                        emptyCounter = 0;
                        Console.WriteLine($"UNKNOWN: {ticker.ticker}");
                        Console.WriteLine(" ");
                    }

                    Thread.Sleep(500);
                }
            }
            catch
            {
                unknownSymbol = true;
                emptyCounter = 0;
                Console.WriteLine($"EXCEPTION: {ticker.ticker}");
                Console.WriteLine(" ");
            }
        }

    }
}
