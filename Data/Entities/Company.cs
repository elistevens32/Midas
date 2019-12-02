using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Midas.Data.Entities
{
    public class Company
    {

        [Key]
        public int id { get; set; }
        public int tiingoTickerId { get; set; }
        public int iexTickerId { get; set; }

        [JsonProperty("symbol")]
        public string Symbol { get; set; }

        [JsonProperty("companyName")]
        public string CompanyName { get; set; }

        [JsonProperty("exchange")]
        public string Exchange { get; set; }

        [JsonProperty("industry")]
        public string Industry { get; set; }

        [JsonProperty("website")]
        public string Website { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }

        [JsonProperty("CEO")]
        public string Ceo { get; set; }

        [JsonProperty("securityName")]
        public string SecurityName { get; set; }

        [JsonProperty("issueType")]
        public string IssueType { get; set; }

        [JsonProperty("sector")]
        public string Sector { get; set; }

        [JsonProperty("primarySicCode")]
        public long PrimarySicCode { get; set; }

        [JsonProperty("employees")]
        public long Employees { get; set; }

        [JsonProperty("address")]
        public string Address { get; set; }

        [JsonProperty("address2")]
        public string Address2 { get; set; }

        [JsonProperty("state")]
        public string State { get; set; }

        [JsonProperty("city")]
        public string City { get; set; }

        [JsonProperty("zip")]
        public string Zip { get; set; }

        [JsonProperty("country")]
        public string Country { get; set; }

        [JsonProperty("phone")]
        public string Phone { get; set; }
    }
}
