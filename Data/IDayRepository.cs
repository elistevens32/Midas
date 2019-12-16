using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data
{
    public interface IDayRepository
    {
        Day GetDayByDate(DateTimeOffset date);
        Day GetDayById(int id);
        List<Day> GetAllDays();
        Day CreateNewDay(DateTimeOffset Date);
        OptionCycleDate CreateOptionCycleOpens(Day day, int monthsBack);
    }
}
