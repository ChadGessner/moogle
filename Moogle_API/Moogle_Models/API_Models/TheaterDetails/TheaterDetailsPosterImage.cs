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
      public static TheaterDetailsPosterImage ValidateTheaterDetailsPosterImage(TheaterDetailsPosterImage poster)
      {
        return poster == null || poster.url == null || poster.url.Length == 0 ?
        new TheaterDetailsPosterImage()
        {
          url = "https://media.tenor.com/6uME6Zii8mIAAAAC/samuel-l-jackson-cat.gif"
        } : poster;
      }
    }

}
