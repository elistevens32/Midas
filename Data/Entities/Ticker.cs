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

        [ForeignKey("CompanyId")]
        public Company Company { get; set; }
        public DateTime Date { get; set; }

        [JsonProperty("symbol")]
        public string ticker { get; set; }
        public bool TiingoBool { get; set; }
        public bool IexBool { get; set; }
        public bool YahooBool { get; set; }

        // TIINGO
        public string exchange { get; set; }
        public string assetType { get; set; }
        public string priceCurrency { get; set; }
        public string startDate { get; set; }
        public string endDate { get; set; }

        // IEX
        [JsonProperty("isEnabled")]
        public bool isEnabled { get; set; }

        // YAHOO
        public double Isin { get; set; }
        public string type { get; set; }
        public string industry { get; set; }


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
