using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class TomatoRating
    {
        [JsonPropertyName("state")]
        public string state { get; set; }
        [JsonPropertyName("tomatometer")]
        public int tomatometer { get; set; }
        [JsonPropertyName("iconImage")]
        public IconImage iconImage { get; set; }
    }
}
