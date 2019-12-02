using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data.Entities
{
    public class EOD
    {
        // GENERAL
        [Key]
        public int id { get; set; }
        public int dayId { get; set; }
        public int tickerId { get; set; }
        public Day Day { get; set; }
        public Ticker Ticker { get; set; }
        public bool TiingoBool { get; set; }
        public bool IexBool { get; set; }
        public bool YahooBool { get; set; }


        // TIINGO
        [JsonProperty("date")]
        public DateTimeOffset Date { get; set; }

        [JsonProperty("close")]
        public double Close { get; set; }

        [JsonProperty("high")]
        public double High { get; set; }

        [JsonProperty("low")]
        public double Low { get; set; }

        [JsonProperty("open")]
        public double Open { get; set; }

        [JsonProperty("volume")]
        public long Volume { get; set; }

        [JsonProperty("adjClose")]
        public double AdjClose { get; set; }

        [JsonProperty("adjHigh")]
        public double AdjHigh { get; set; }

        [JsonProperty("adjLow")]
        public double AdjLow { get; set; }

        [JsonProperty("adjOpen")]
        public double AdjOpen { get; set; }

        [JsonProperty("adjVolume")]
        public long AdjVolume { get; set; }

        [JsonProperty("divCash")]
        public double DivCash { get; set; }

        [JsonProperty("splitFactor")]
        public double SplitFactor { get; set; }


        // IEX

        // YAHOO

    }
}
