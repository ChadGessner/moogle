using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
    public class Movie
    {
        [JsonPropertyName("fandangoId")]
        public string fandangoId { get; set; }
        [JsonPropertyName("emsId")]
        public string emsId { get; set; }
        [JsonPropertyName("emsVersionId")]
        public string emsVersionId { get; set; }
        [JsonPropertyName("name")]
        public string name { get; set; }
        [JsonPropertyName("durationMinutes")]
        public int durationMinutes { get; set; }
        [JsonPropertyName("tomatoRating")]
        public TomatoRating tomatoRating { get; set; }
        [JsonPropertyName("userRating")]
        public UserRating userRating { get; set; }
        [JsonPropertyName("motionPictureRating")]
        public MotionPictureRating motionPictureRating { get; set; }
        [JsonPropertyName("releaseDate")]
        public string releaseDate { get; set; }
        [JsonPropertyName("posterImage")]
        public PosterImage posterImage { get; set; }
        [JsonPropertyName("movieVariants")]
        public List<MovieVariant> movieVariants { get; set; }
    }
}
