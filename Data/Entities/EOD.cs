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

    public class EOD
    {

        public const string tiingo_source = "tiingo";
        public const string iex_source = "iex";
        public const string yahoo_source = "yahoo";
        public const string test_source = "test";

        // GENERAL
        [Key]
        public int id { get; set; }

        public int DayId { get; set; }
        public Day Day { get; set; }

        public int TickerId { get; set; }
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

        [JsonProperty("uClose")]
        public double AdjClose { get; set; }

        [JsonProperty("uHigh")]
        public double AdjHigh { get; set; }

        [JsonProperty("uLow")]
        public double AdjLow { get; set; }

        [JsonProperty("uOpen")]
        public double AdjOpen { get; set; }

        [JsonProperty("uVolume")]
        public long AdjVolume { get; set; }

        [JsonProperty("change")]
        public double Change { get; set; }

        [JsonProperty("changePercent")]
        public double ChangePercent { get; set; }

        [JsonProperty("divCash")]
        public double DivCash { get; set; }

        [JsonProperty("splitFactor")]
        public double SplitFactor { get; set; }

    }
}
