using System;
using Midas.Data.Extensions;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Midas.Data.Entities
{
    public class OptionCycleDate
    {
        [Key]
        public int id { get; set; }

        [ForeignKey("day")]
        public int DayId { get; set; }

        //OPEN
        [ForeignKey("optioncyclemonth")]
        public int OptionCycleMonthId { get; set; }
        public DateTimeOffset OpenDate { get; set; }
        public int OpenMonth { get; set; }
        public int OpenYear { get; set; }

        //CLOSE
        [ForeignKey("optioncycleclosemonth")]
        public int OptionCycleCloseMonthId { get; set; }
        public DateTimeOffset CloseDate { get; set; }
        public int CloseMonth { get; set; }
        public int CloseYear { get; set; }

    }
}
