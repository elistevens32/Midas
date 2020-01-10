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

        public class DayFinder
        {

            //For example to find the day for 2nd Friday, February, 2016
            //=>call FindDay(2016, 2, DayOfWeek.Friday, 2)
            public static int FindDay(int year, int month, DayOfWeek Day, int occurance)
            {

                if (occurance <= 0 || occurance > 5)
                    throw new Exception("Occurance is invalid");

                DateTime firstDayOfMonth = new DateTime(year, month, 1);
                //Substract first day of the month with the required day of the week 
                var daysneeded = (int)Day - (int)firstDayOfMonth.DayOfWeek;
                //if it is less than zero we need to get the next week day (add 7 days)
                if (daysneeded < 0) daysneeded = daysneeded + 7;
                //DayOfWeek is zero index based; multiply by the Occurance to get the day
                var resultedDay = (daysneeded + 1) + (7 * (occurance - 1));

                if (resultedDay > (firstDayOfMonth.AddMonths(1) - firstDayOfMonth).Days)
                    throw new Exception(String.Format("No {0} occurance(s) of {1} in the required month", occurance, Day.ToString()));

                return resultedDay;
            }
        }


    }
}
