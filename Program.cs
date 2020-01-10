using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Midas.Data;
using Midas.Services;

namespace Midas
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();

            if (DevelopmentEnvironment.testEnvironment == true)
            {
                // SEEDING DATA
                MidasSeeder.RunSeeding(host);

                // CHECK FOR UPDATES
                UpdateService.CheckForUpdates(host);

                // TEST DATA
                //TestDataSeeder.SeedTestData(host);

            }

            // EOD POPULATE
            EODPopulateService.RunEODPopulate(host);

            host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
