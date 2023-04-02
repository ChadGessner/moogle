using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class TheaterDetailsTomatoRating
  {
    [JsonPropertyName("state")]
    public string? state { get; set; }
    [JsonPropertyName("tomatometer")]
    public int? tomatometer { get; set; }
    [JsonPropertyName("iconImage")]
    public TheaterDetailsIconImage iconImage { get; set; }
    public static TheaterDetailsTomatoRating ValidateTheaterDetailsTomatoRating(TheaterDetailsTomatoRating? rating)
    {
      if(rating == null)
      {
        return new()
        {
          state = "N/A",
          tomatometer = -1,
          iconImage = new TheaterDetailsIconImage()
          {
            url = "<i class=\"bi bi-bandaid\"></i>"
          }
        };
      }
      rating.state = rating.state == null || rating.state.Length == 0 ? "N/A" : rating.state;
      rating.tomatometer = rating.tomatometer == null ? -1 : rating.tomatometer;
      rating.iconImage = TheaterDetailsIconImage.ValidateTheaterDetailsIconImage(rating.iconImage);
      return rating;
    }
  }
}
