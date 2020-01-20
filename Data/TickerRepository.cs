using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Midas.Data.DTO;
using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data
{
    public class TickerRepository : ITickerRepository
    {
        private readonly MidasContext _ctx;
        private readonly ILogger<TickerRepository> _logger;

        public TickerRepository(MidasContext ctx, ILogger<TickerRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        // TICKER - START
        public List<Ticker> GetAllTickers(int tickerCount)
        {
            if (tickerCount == 0)
            {
                return _ctx.Tickers
                    .Where(t => t.ticker != null)
                    .Include(t => t.Company)
                    .ToList();
            }
            else
            {
                return _ctx.Tickers
                    .Where(t => t.ticker != null)
                    .Include(t => t.Company)
                    .Take(tickerCount)
                    .ToList();
            }
        }

        public List<Ticker> GetTickersAndQSByDate(int tickerCount, DateTime date)
        {
            var query = (from ticker in _ctx.Tickers
                         join qs in _ctx.QualityScores on ticker.id equals qs.TickerId
                         join d in _ctx.Days on qs.DayId equals d.id
                         //where ticker.volumeVerified == true
                         select ticker)
                         .Include(t => t.Company)
                         .Take(tickerCount)
                         .ToList();
            return query;

        }

        public List<Ticker> GetVolumeVerifiedTickers(int number)
        {
            if (number == 0)
            {
                return _ctx.Tickers
                    .OrderBy(t => t.id)
                    .Include(t => t.Company)
                    .Where(t => t.volumeVerified == true)
                    .ToList();
            }
            else
            {
                return _ctx.Tickers
                   .OrderBy(t => t.id)
                   .Include(t => t.Company)
                   .Where(t => t.volumeVerified == true)
                   .Take(number)
                   .ToList();
            }
        }

        public List<Ticker> GetTestTickers(int number)
        {
            return _ctx.Tickers
               .OrderBy(t => t.id)
               .Where(t => t.Exchange == "NASDAQ")
               .Take(number)
               .ToList();
        }

        public List<Ticker> GetTickersByExchange(String exchange)
        {
            return _ctx.Tickers
               .OrderBy(t => t.id)
               .Where(t => t.Exchange == exchange)
               .Take(10)
               .ToList();
        }

        public List<Ticker> GetAllEodTickers()
        {
            return _ctx.Tickers
               .OrderBy(t => t.id)
               .Where(t => t.eodVerified == true)
               .ToList();
        }

        public List<Ticker> GetAllStockTickers(int number)
        {

            if (number == 0)
            {
                return _ctx.Tickers
                    .OrderBy(t => t.id)
                    .ToList();
            }
            else
            {
                return _ctx.Tickers
                    .OrderBy(t => t.id)
                    .Take(number)
                    .ToList();
            }


        }

        public Ticker GetTickerById(int id)
        {
            return _ctx.Tickers
                .Where(t => t.id == id)
                .Include(t => t.Company)
                .FirstOrDefault();
        }

        public Ticker GetTickerBySymbol(String symbol)
        {
            return _ctx.Tickers
                .Where(t => t.ticker == symbol)
                .FirstOrDefault();
        }

    }
}
