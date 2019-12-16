using System;
using Midas.Data.Extensions;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Midas.Data.Entities
{
    public class OptionCycleDate
    {
        [Key]
        public int id { get; set; }

        public int DayId { get; set; }
        public Day Day { get; set; }

        public DateTimeOffset Date { get; set; }

        public DateTimeOffset CloseDate { get; set; }
        public DateTimeOffset Open1Month { get; set; }
        public DateTimeOffset Open2Month { get; set; }
        public DateTimeOffset Open3Month { get; set; }
        public DateTimeOffset Open4Month { get; set; }
        public DateTimeOffset Open5Month { get; set; }
        public DateTimeOffset Open6Month { get; set; }
        public DateTimeOffset Open7Month { get; set; }
        public DateTimeOffset Open8Month { get; set; }
        public DateTimeOffset Open9Month { get; set; }
        public DateTimeOffset Open10Month { get; set; }
        public DateTimeOffset Open11Month { get; set; }
        public DateTimeOffset Open12Month { get; set; }

    }
}
