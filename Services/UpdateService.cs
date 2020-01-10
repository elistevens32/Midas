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
    public class UpdateService
    {
        private readonly MidasContext _ctx;
        private readonly IWebHostEnvironment _hosting;
        private readonly IMidasRepository _repository;
        private readonly IDayRepository _dayRepository;
        private readonly ITickerRepository _tickerRepo;
        private readonly IEodRepository _eodRepo;
        private readonly ILogger<MidasRepository> _logger;

        public UpdateService(MidasContext ctx, IWebHostEnvironment hosting, IMidasRepository repository, IDayRepository dayRepository, ITickerRepository tickerRepo, IEodRepository eodRepo, ILogger<MidasRepository> logger)
        {
            _ctx = ctx;
            _hosting = hosting;
            _repository = repository;
            _dayRepository = dayRepository;
            _tickerRepo = tickerRepo;
            _eodRepo = eodRepo;
            _logger = logger;
        }


        public static void CheckForUpdates(IHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                var UpdateService = scope.ServiceProvider.GetService<UpdateService>();

                // CHECK TODAY
                UpdateService.checkToday();

                //TODO - Check for Updates to the OptionCycleMonth (Does a new month need to be added)

            }
        }

        private void checkToday()
        {
            var today = _dayRepository.GetDayByDate(DateTime.Today);

            if (today == null) 
            {
                var day = DateTime.Today;
                _dayRepository.CreateNewDay(day);
            }
        }
    }
}
