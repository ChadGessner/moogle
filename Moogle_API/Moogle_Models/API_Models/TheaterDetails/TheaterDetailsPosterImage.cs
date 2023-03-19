using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
    public class TheaterDetailsPosterImage
    {
        [JsonPropertyName("url")]
        public string url { get; set; }
    }
}
