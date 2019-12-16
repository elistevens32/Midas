using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data.Extensions
{
    public static class DateTimeExtensions
    {
        public static DateTimeOffset StartOfWeek(this DateTimeOffset dt, DayOfWeek startOfWeek)
        {
            int diff = (7 + (dt.DayOfWeek - startOfWeek)) % 7;
            return dt.AddDays(-1 * diff).Date;
        }

        public static bool IsThirdMondayOfMonth(this DateTimeOffset dt)
        {
            if (dt.DayOfWeek == DayOfWeek.Monday && dt.Day > 14 && dt.Day <= 21)
            {
                return true;
            }
            return false;
        }


    }
}
