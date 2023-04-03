using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class MovieDetailsPosterImage
  {
    public string? url { get; set; }
    public object? type { get; set; }
    public object? width { get; set; }
    public object? height { get; set; }

    public static MovieDetailsPosterImage ValidateMovieDetailsPosterImage(MovieDetailsPosterImage? image)
    {
      if(image == null)
      {
        return new MovieDetailsPosterImage()
        {
          url = "https://localhost:7239/Images/image-not-found.gif",
          type = null,
          width = null,
          height = null
        };
      }
      image.url = image.url == null || image.url.Length == 0 ? "https://localhost:7239/Images/image-not-found.gif" : image.url;
      return image;
    }
  }
}
