using Microsoft.Extensions.Logging;
using Midas.Data;
using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas
{
    public class MidasRepository : IMidasRepository
    {
        private readonly MidasContext _ctx;
        private readonly ILogger<MidasRepository> _logger;

        public MidasRepository(MidasContext ctx, ILogger<MidasRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public void AddEntity(object model)
        {
            _ctx.Add(model);
        }


        // DAY - START
        public List<Day> DaysBack(DateTime DateBack)
        {
            return _ctx.Days
                    .Where(d => d.Date > DateBack.Date)
                    .ToList();
        }

        public Day GetDayByDate(DateTime date)
        {
            var dateCheck = date.Date;

            return _ctx.Days
                           .Where(d => d.Date == dateCheck)
                           .FirstOrDefault();
        }
        // DAY - END

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

        public EOD GetTiingoEODByTickerId(int tickerId, int dayId)
        {
            return _ctx.EODs
                           .Where(e => (e.tickerId == tickerId) &&
                           (e.dayId == dayId))
                           .FirstOrDefault();
        }





        //public IEnumerable<Order> GetAllOrdersByUser(string username, bool includeItems)
        //{
        //    if (includeItems)
        //    {

        //        return _ctx.Orders
        //                   .Where(o => o.User.UserName == username)
        //                   .Include(o => o.Items)
        //                   .ThenInclude(i => i.Product)
        //                   .ToList();

        //    }
        //    else
        //    {
        //        return _ctx.Orders
        //                   .Where(o => o.User.UserName == username)
        //                   .ToList();
        //    }
        //}

        //public Order GetOrderById(string username, int id)
        //{
        //    return _ctx.Orders
        //               .Include(o => o.Items)
        //               .ThenInclude(i => i.Product)
        //               .Where(o => o.Id == id && o.User.UserName == username)
        //               .FirstOrDefault();
        //}

        public bool SaveAll()
        {
            return _ctx.SaveChanges() > 0;
        }
    }
}
