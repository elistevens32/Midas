using Microsoft.EntityFrameworkCore;
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
    public class OptionCycleDateRepository : IOptionCycleDateRepository
    {
        private readonly MidasContext _ctx;
        private readonly ILogger<DayRepository> _logger;
        private readonly IDayRepository _dayRepository;

        public OptionCycleDateRepository(MidasContext ctx, ILogger<DayRepository> logger, IDayRepository dayRepository)
        {
            _ctx = ctx;
            _logger = logger;
            _dayRepository = dayRepository;
        }

        public void CreateOptionCycleOpens(Day day, int monthsBack)
        {
            var ocCheck = _ctx.OptionCycleDates
                    .Where(o => o.DayId == day.id)
                    .FirstOrDefault();

            if (ocCheck == null)
            {

                var openDate = GetOptionCycleMonthByMonthAndYear(day.month, day.year);
                var closeDate = GetOptionCycleCloseMonthByMonthAndYear(day.month, day.year);

                var optionCycle = new OptionCycleDate();
                optionCycle.DayId = day.id;

                if (openDate != null && closeDate != null)
                {
                    //OPEN
                    optionCycle.OptionCycleMonthId = openDate.id;
                    optionCycle.OpenDate = openDate.Date;
                    optionCycle.OpenMonth = openDate.Month;
                    optionCycle.OpenYear = openDate.Year;

                    //CLOSE
                    optionCycle.OptionCycleCloseMonthId = closeDate.id;
                    optionCycle.CloseDate = closeDate.CloseDate;
                    optionCycle.CloseMonth = closeDate.Month;
                    optionCycle.CloseYear = closeDate.Year;

                    _ctx.OptionCycleDates.Add(optionCycle);
                    _ctx.SaveChanges();
                }
            }
        }

        public OptionCycleMonth GetOptionCycleMonthByMonthAndYear(int month, int year)
        {
            return _ctx.OptionCycleMonths
               .Where(o => (o.Month == month) &&
               (o.Year == year))
               .FirstOrDefault();
        }

        public OptionCycleCloseMonth GetOptionCycleCloseMonthByMonthAndYear(int month, int year)
        {
            return _ctx.OptionCycleCloseMonths
               .Where(o => (o.Month == month) &&
               (o.Year == year))
               .FirstOrDefault();
        }
    }
}
