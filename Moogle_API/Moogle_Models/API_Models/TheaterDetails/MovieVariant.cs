using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
    public class MovieVariant
    {
        [JsonPropertyName("formatId")]
        public string formatId { get; set; }
        [JsonPropertyName("mid")]
        public string mid { get; set; }
        [JsonPropertyName("movieVariantId")]
        public string movieVariantId { get; set; }
        [JsonPropertyName("formatName")]
        public string formatName { get; set; }
        [JsonPropertyName("amenityGroups")]
        public List<AmenityGroup> amenityGroups { get; set; }
    }
}
