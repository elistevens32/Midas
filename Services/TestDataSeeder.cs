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

                // TEST AAPL EOD SEED
                //testData.SeedAaplEod();

            }
        }

        private void SeedAaplEod()
        {
            throw new NotImplementedException();
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
