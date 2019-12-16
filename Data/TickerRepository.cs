using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
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
                    .ToList();
            }
            else
            {
                return _ctx.Tickers
                    .Where(t => t.ticker != null)
                    .Take(tickerCount)
                    .ToList();
            }
        }

        public List<Ticker> GetTestTickers(int number)
        {
            return _ctx.Tickers
               .OrderBy(t => t.id)
               .Include(t => t.Company)
               .Where(t => t.exchange == "NASDAQ")
               .Take(number)
               .ToList();
        }

        public Ticker GetTickerBySymbol(String symbol)
        {
            return _ctx.Tickers
                           .Where(t => t.ticker == symbol)
                           .FirstOrDefault();
        }

        public List<Ticker> GetTickersIex(int number)
        {
            if (number == 0)
            {
                return _ctx.Tickers
                           .Where(t => t.IexBool == true)
                           .ToList();
            }
            else
            {
                return _ctx.Tickers
                           .Where(t => t.IexBool == true)
                           .Take(number)
                           .ToList();
            }
        }
        public List<Ticker> GetTickersTiingo(int number)
        {
            if (number == 0)
            {
                return _ctx.Tickers
                           .Where(t => t.TiingoBool == true)
                           .ToList();
            }
            else
            {
                return _ctx.Tickers
                           .Where(t => t.TiingoBool == true)
                           .Take(number)
                           .ToList();
            }
        }

    }
}
