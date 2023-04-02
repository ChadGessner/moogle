using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class TheaterDetailsIconImage
  {
    [JsonPropertyName("url")]
    public string? url { get; set; }
    public static TheaterDetailsIconImage ValidateTheaterDetailsIconImage(TheaterDetailsIconImage? image)
    {
      return image == null || image.url == null || image.url.Length == 0 ?
      new()
      {
        url = "<i class=\"bi bi-bandaid\"></i>"
      } : image;
    }
  }
}
