using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class MovieDetailsIconImage
  {
    public string? url { get; set; }

    public static MovieDetailsIconImage ValidateMovieDetailsIconImage(MovieDetailsIconImage? image)
    {
      if(image == null)
      {
        return new MovieDetailsIconImage()
        {
          url = "https://imgur.com/4kuJ6Va.jpg",
        };
      }
      image.url = image.url == null || image.url.Length == 0 ? "https://imgur.com/4kuJ6Va.jpg" : image.url;
      return image;
    }
  }
}
