using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
    public class TheaterDetailsUserRating
    {
        [JsonPropertyName("state")]
        public string state { get; set; }
        [JsonPropertyName("dtlLikedScore")]
        public int? dtlLikedScore { get; set; }
        [JsonPropertyName("iconImage")]
        public TheaterDetailsIconImage iconImage { get; set; }
    }
}
