using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class AmenityGroup
  {
    [JsonPropertyName("amenities")]
    public List<Amenity?>? amenities { get; set; }
    [JsonPropertyName("showtimes")]
    public List<Showtime> showtimes { get; set; }
    public static AmenityGroup ValidateAmenityGroup(AmenityGroup? g)
    {
      if(g == null)
      {
        return g ?? null;
      }
      g.amenities = g.amenities.Select(a=> Amenity.ValidateAmenity(a)).ToList() ?? null;
      g.showtimes = g.showtimes.Select(s=> Showtime.ValidateShowtime(s)).ToList() ?? null;
      return g;
    }
  }
}
