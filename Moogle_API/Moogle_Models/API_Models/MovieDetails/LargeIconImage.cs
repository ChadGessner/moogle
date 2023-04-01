using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class LargeIconImage
  {
    public string? url { get; set; }
    public static LargeIconImage ValidateLargeIconImage(LargeIconImage? image)
    {
      if (image == null)
      {
        return new LargeIconImage()
        {
          url = "https://imgur.com/4kuJ6Va.jpg",
        };
      }
      image.url = image.url == null || image.url.Length == 0 ? "https://imgur.com/4kuJ6Va.jpg" : image.url;
      return image;
    }
  }
  
}
