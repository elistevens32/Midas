﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data.Entities
{
    public class Day
    {
        [Key]
        public int id { get; set; }

        public DateTimeOffset Date { get; set; }

        public int day { get; set; }
        public int month { get; set; }
        public int year { get; set; }

        public int deleted { get; set; }


        public static List<Day> DaysBack(int daysBack)
        {
            daysBack--;
            var thru = DateTime.Today.AddDays(-daysBack);

            List<Day> days = new List<Day>();

            for (var day = DateTime.Today; day.Date >= thru.Date; thru = thru.AddDays(1))
            {
                var dayObj = new Day();

                dayObj.Date = thru;
                dayObj.day = thru.Day;
                dayObj.month = thru.Month;
                dayObj.year = thru.Year;

                days.Add(dayObj);

            }

            return days;

        }

        public static List<Day> DaysForward(int daysForward)
        {
            daysForward++;
            var thru = DateTime.Today.AddDays(daysForward);

            List<Day> days = new List<Day>();

            for (var day = DateTime.Today; day.Date <= thru.Date; thru = thru.AddDays(-1))
            {
                var dayObj = new Day();

                dayObj.Date = thru;
                dayObj.day = thru.Day;
                dayObj.month = thru.Month;
                dayObj.year = thru.Year;

                days.Add(dayObj);

            }

            return days;

        }
    }
}
