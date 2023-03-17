using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
    public class MotionPictureRating
    {
        [JsonPropertyName("area")]
        public object? area { get; set; } 
        [JsonPropertyName("code")]
        public string code { get; set; }
        [JsonPropertyName("description")]
        public string description { get; set; }
    }
}
