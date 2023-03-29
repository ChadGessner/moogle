using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
    public class TheaterShowtimeGroupings
    {
        [JsonPropertyName("theaterId")]
        public string? theaterId { get; set; }
        [JsonPropertyName("displayDates")]
        public List<string>? displayDates { get; set; }
        [JsonPropertyName("displayDate")]
        public string? displayDate { get; set; }
        [JsonPropertyName("mppBaseUrl")]
        public string? mppBaseUrl { get; set; }
        [JsonPropertyName("movies")]
        public List<TheaterDetailsMovie>? movies { get; set; }
    }
}
