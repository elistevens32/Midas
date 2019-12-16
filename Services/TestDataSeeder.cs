using CsvHelper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
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

namespace Midas.Services
{
    public class TestDataSeeder
    {
        private readonly MidasContext _ctx;
        private readonly IWebHostEnvironment _hosting;
        private readonly IMidasRepository _repository;
        private readonly IDayRepository _dayRepository;
        private readonly ITickerRepository _tickerRepo;
        private readonly IEodRepository _eodRepo;
        private readonly ILogger<MidasRepository> _logger;

        public TestDataSeeder(MidasContext ctx, IWebHostEnvironment hosting, IMidasRepository repository, IDayRepository dayRepository, ITickerRepository tickerRepo, IEodRepository eodRepo, ILogger<MidasRepository> logger)
        {
            _ctx = ctx;
            _hosting = hosting;
            _repository = repository;
            _dayRepository = dayRepository;
            _tickerRepo = tickerRepo;
            _eodRepo = eodRepo;
            _logger = logger;
        }

        public static void SeedTestData(IHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var testData = scope.ServiceProvider.GetService<TestDataSeeder>();

                // AAPL TEST DATA
                testData.SeedAAPLTestData();

                // SEED COMPANIES
                testData.SeedCompanies();
            }
        }

        private void SeedCompanies()
        {
            _ctx.Database.EnsureCreated();

            var tickerList = _tickerRepo.GetTestTickers(500);

            if (!_ctx.Tickers.Any())
            {
                foreach (var ticker in tickerList)
                {
                    var requestString = $"{ApiTokens.iex_live_domain}{ApiTokens.iex_company_p1}{ticker.ticker}{ApiTokens.iex_company_p2}{ApiTokens.live_iex_public_token}";
                    Console.WriteLine("");
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

                            _repository.CreateCompany(company);
                        }
                        catch (Exception ex)
                        {
                            _logger.LogError($"Company Failed: {ex}");
                        }

                    }
                }
            }
        }

        public void SeedAAPLTestData()
        {
            _ctx.Database.EnsureCreated();

            var config = new CsvHelper.Configuration.Configuration
            {
                HasHeaderRecord = true,
                HeaderValidated = null,
                MissingFieldFound = null,
                IgnoreBlankLines = false
            };

            TextReader reader = new StreamReader("Data/Seed/TestData/AAPL_150_Days.csv");
            var csvReader = new CsvReader(reader, config);
            var records = csvReader.GetRecords<EOD>();

            var updatedList = new List<EOD>();

            if (_ctx.Tickers.Any())
            {
                // SET EOD DATE
                foreach (var EOD in records)
                {
                    var day = _dayRepository.CreateNewDay(EOD.Date);

                    var ticker = _tickerRepo.GetTickerBySymbol("AAPL");

                    _eodRepo.CreateEod(EOD, day, ticker, EOD.test_source);

                    updatedList.Add(EOD);
                }
            }
        }
    }
}
