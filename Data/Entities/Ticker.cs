using CsvHelper.Configuration.Attributes;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data.Entities
{
    public class Ticker
    {

        // GENERAL
        [Key]
        public int id { get; set; }
        public int CompanyId { get; set; }

        [Name("Symbol")]
        public string ticker { get; set; }
        public string Name { get; set; }
        public string Exchange { get; set; }
        public string MarketCap { get; set; }
        public string IPOyear { get; set; }
        public string Sector { get; set; }
        public string industry { get; set; }

        [Name("Summary Quote")]
        public string SummaryQuote { get; set; }

        // BOOLEANS
        public bool volumeVerified { get; set; }
        public bool eodVerified { get; set; }
        public bool include { get; set; }
        public bool newTicker { get; set; }

    // METHODS
    public static List<string> ConvertListToSymbolString(IEnumerable<Ticker> listSymbols)
        {
            var stringList = new List<string>();

            foreach (var symbol in listSymbols)
            {
                //stringList.Add(Ticker.symbolString);
            }
            return stringList;
        }
    }
}
