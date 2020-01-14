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
                .OrderBy(d => d.Date)
                .ToList();
        }

        public List<Day> GetAllDaysPastToday()
        {
            return _ctx.Days
                .OrderBy(d => d.Date)
                .Where(e => e.Date < DateTime.Today.Date)
                .ToList();
        }

        public List<Day> GetDaysByMonthAndYear(int month, int year)
        {
            return _ctx.Days
                .OrderBy(d => d.Date)
                .Where(d => (d.month == month) &&
                (d.year == year))
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

    }
}
