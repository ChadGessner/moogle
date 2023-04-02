using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class Amenity
  {
    [JsonPropertyName("name")]
    public string name { get; set; }
    [JsonPropertyName("id")]
    public string id { get; set; }
    [JsonPropertyName("shortDescription")]
    public string shortDescription { get; set; }
    public static Amenity ValidateAmenity(Amenity? a)
    {
      a.name = a.name ?? string.Empty;
      a.id = a.id ?? string.Empty;
      a.shortDescription = a.shortDescription ?? string.Empty;
      return a;
    }
  }
}
