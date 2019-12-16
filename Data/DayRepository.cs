using Microsoft.Extensions.Logging;
using Midas.Data.Entities;
using Midas.Data.Extensions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data
{
    public class DayRepository : IDayRepository
    {
        private readonly MidasContext _ctx;
        private readonly ILogger<DayRepository> _logger;

        public DayRepository(MidasContext ctx, ILogger<DayRepository> logger)
        {
            _ctx = ctx;
            _logger = logger;
        }

        public Day GetDayByDate(DateTimeOffset date)
        {
            var dateCheck = date.Date;

            return _ctx.Days
                    .Where(d => d.Date == dateCheck)
                    .FirstOrDefault();
        }
        public Day GetDayById(int id)
        {
            return _ctx.Days
                    .Where(e => e.id == id)
                    .FirstOrDefault();
        }

        public List<Day> GetAllDays()
        {
            return _ctx.Days
                    .ToList();
        }

        public Day CreateNewDay(DateTimeOffset Date)
        {
            var dayCheck = _ctx.Days
                    .Where(e => e.Date == Date)
                    .FirstOrDefault();

            if (dayCheck == null)
            {
                var day = new Day();

                day.Date = Date;
                day.day = Date.Day;
                day.month = Date.Month;
                day.year = Date.Year;

                _ctx.Add(day);
                _ctx.SaveChanges();

                return day;
            }
            else 
            {
                return dayCheck;
            }

        }

        public OptionCycleDate CreateOptionCycleOpens(Day day, int monthsBack)
        {
            var ocCheck = _ctx.OptionCycleDates
                    .Where(o => o.DayId == day.id)
                    .FirstOrDefault();

            if (ocCheck == null && day.Date.IsThirdMondayOfMonth())
            {

                var optionCycle = new OptionCycleDate();

                for (int i = monthsBack; i > 0; i--)
                {

                    optionCycle.DayId = day.id;
                    optionCycle.Date = day.Date;

                    if (i == 12)
                    {
                        optionCycle.Open12Month = day.Date;
                    }
                    else if (i == 11)
                    {
                        optionCycle.Open11Month = day.Date;
                    }
                    else if (i == 10)
                    {
                        optionCycle.Open10Month = day.Date;
                    }
                    else if (i == 9)
                    {
                        optionCycle.Open9Month = day.Date;
                    }
                    else if (i == 8)
                    {
                        optionCycle.Open8Month = day.Date;
                    }
                    else if (i == 7)
                    {
                        optionCycle.Open7Month = day.Date;
                    }
                    else if (i == 6)
                    {
                        optionCycle.Open6Month = day.Date;
                    }
                    else if (i == 5)
                    {
                        optionCycle.Open5Month = day.Date;
                    }
                    else if (i == 4)
                    {
                        optionCycle.Open4Month = day.Date;
                    }
                    else if (i == 3)
                    {
                        optionCycle.Open3Month = day.Date;
                    }
                    else if (i == 2)
                    {
                        optionCycle.Open2Month = day.Date;
                    }
                    else if (i == 1)
                    {
                        optionCycle.Open1Month = day.Date;
                    }

                    _ctx.Add(optionCycle);
                    _ctx.SaveChanges();

                    day.Date.AddMonths(-i);

                }
                return optionCycle;
            }
            else 
            {
                return ocCheck;
            }
        }
    }
}
