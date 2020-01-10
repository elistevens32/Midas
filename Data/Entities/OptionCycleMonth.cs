using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Midas.Data.Entities
{
    public class OptionCycleMonth
    {
        [Key]
        public int id { get; set; }

        public int Month { get; set; }
        public int Year { get; set; }
        public DateTimeOffset Date { get; set; }
    }
}
