using Moogle_Models.API_Models.MovieDetails;
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
    public string? formatId { get; set; }
    [JsonPropertyName("mid")]
    public string? mid { get; set; }
    [JsonPropertyName("movieVariantId")]
    public string? movieVariantId { get; set; }
    [JsonPropertyName("formatName")]
    public string? formatName { get; set; }
    [JsonPropertyName("amenityGroups")]
    public List<AmenityGroup> amenityGroups { get; set; }
    public static MovieVariant ValidateMovieVariant(MovieVariant v)
    {
      if(v == null)
      {
        return null;
      }
      v.formatId = v.formatId ?? "";
      v.mid = v.mid ?? "";
      v.movieVariantId = v.movieVariantId ?? "";
      v.formatName  = v.formatName ?? "";
      v.amenityGroups
        .Select(a=> AmenityGroup.ValidateAmenityGroup(a)).ToList();
      return v;
    }
    
  }
}
