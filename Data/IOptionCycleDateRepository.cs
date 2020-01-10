using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data
{
    public interface IOptionCycleDateRepository
    {
        void CreateOptionCycleOpens(Day day, int monthsBack);
        OptionCycleMonth GetOptionCycleMonthByMonthAndYear(int month, int year);
        OptionCycleCloseMonth GetOptionCycleCloseMonthByMonthAndYear(int month, int year);
    }
}
