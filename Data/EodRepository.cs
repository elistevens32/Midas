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
    public class EodRepository : IEodRepository
    {
        private readonly MidasContext _ctx;
        private readonly ILogger<EodRepository> _logger;

        public EodRepository(MidasContext ctx, ILogger<EodRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public EOD GetTiingoEODByTickerId(int tickerId, int dayId)
        {
            return _ctx.EODs
               .Where(e => (e.TickerId == tickerId) &&
               (e.DayId == dayId))
               .FirstOrDefault();
        }

        public List<EOD> GetEODByTickerIDAndDateRange(int tickerId, List<Day> dayList)
        {
            var startDate = dayList.First();
            var endDate = dayList.Last();

            return _ctx.EODs
               .OrderBy(e => e.Date)
               .Where(e => (e.TickerId == tickerId) &&
               (e.Date >= startDate.Date && e.Date < endDate.Date))
               .ToList();
        }

        public List<EOD> GetAllTestEOD()
        {
            
            return _ctx.EODs
               .OrderBy(e => e.Date)
               .Include(eod => eod.Day)
               .Include(eod => eod.Ticker)
               .Where(e => (e.TiingoBool == false) &&
               (e.IexBool == false) &&
               (e.YahooBool == false))
               .ToList();

        }

        public EOD CreateEod(EOD EodObj, Day day, Ticker ticker, string source)
        {
            var eodCheck = _ctx.EODs
                    .Where(e => (e.DayId == day.id) &&
                    (e.TickerId == ticker.id))
                    .FirstOrDefault();

            if (eodCheck == null)
            {
                var Eod = new EOD();

                Eod.DayId = day.id;
                Eod.TickerId = ticker.id;

                if (source == EOD.tiingo_source)
                {
                    Eod.TiingoBool = true;
                }
                else if (source == EOD.iex_source)
                {
                    Eod.IexBool = true;
                }
                else if (source == EOD.yahoo_source)
                {
                    Eod.YahooBool = true;
                }
                else if (source == EOD.test_source)
                {
                    Eod.TiingoBool = false;
                    Eod.IexBool = false;
                    Eod.YahooBool = false;
                }

                Eod.Date = day.Date;

                Eod.Open = EodObj.Open;
                Eod.High = EodObj.High;
                Eod.Low = EodObj.Low;
                Eod.Close = EodObj.Close;
                Eod.Volume = EodObj.Volume;

                Eod.AdjOpen = EodObj.AdjOpen;
                Eod.AdjHigh = EodObj.AdjHigh;
                Eod.AdjLow = EodObj.AdjLow;
                Eod.AdjClose = EodObj.AdjClose;
                Eod.AdjVolume = EodObj.AdjVolume;

                Eod.DivCash = EodObj.DivCash;
                Eod.SplitFactor = EodObj.SplitFactor;

                _ctx.Add(Eod);
                _ctx.SaveChanges();

                return Eod;
            }
            else
            {
                return eodCheck;
            }
        }
    }
}
