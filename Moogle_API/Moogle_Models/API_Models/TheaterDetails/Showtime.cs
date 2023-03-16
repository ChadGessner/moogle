using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
    public class Showtime
    {
        [JsonPropertyName("id")]
        public string id { get; set; }
        [JsonPropertyName("type")]
        public string type { get; set; }
        [JsonPropertyName("providerTime")]
        public string providerTime { get; set; }
        [JsonPropertyName("providerDate")]
        public string providerDate { get; set; }
        [JsonPropertyName("isActive")]
        public bool isActive { get; set; }
        [JsonPropertyName("sdate")]
        public string sdate { get; set; }
    }
}
