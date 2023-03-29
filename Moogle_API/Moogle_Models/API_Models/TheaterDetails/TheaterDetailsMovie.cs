using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
    public class TheaterDetailsMovie
    {
        [JsonPropertyName("fandangoId")]
        public string? fandangoId { get; set; }
        [JsonPropertyName("emsId")]
        public string? emsId { get; set; }
        [JsonPropertyName("emsVersionId")]
        public string? emsVersionId { get; set; }
        [JsonPropertyName("name")]
        public string? name { get; set; }
        [JsonPropertyName("durationMinutes")]
        public int? durationMinutes { get; set; }
        [JsonPropertyName("tomatoRating")]
        public TheaterDetailsTomatoRating tomatoRating { get; set; }
        [JsonPropertyName("userRating")]
        public TheaterDetailsUserRating? userRating { get; set; }
        [JsonPropertyName("motionPictureRating")]
        public TheaterDetailsMotionPictureRating? motionPictureRating { get; set; }
        [JsonPropertyName("releaseDate")]
        public string? releaseDate { get; set; }
        [JsonPropertyName("posterImage")]
        public TheaterDetailsPosterImage? posterImage { get; set; }
        [JsonPropertyName("movieVariants")]
        public List<MovieVariant>? movieVariants { get; set; }
    }
}
