using Midas.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data.DTO
{
    public class Dashboard
    {
        public IEnumerable<EOD> EODList { get; set; }
        public IEnumerable<Ticker> TickerList { get; set; }
        public IEnumerable<Company> CompanyList { get; set; }
        public IEnumerable<Day> Day { get; set; }
    }
}
