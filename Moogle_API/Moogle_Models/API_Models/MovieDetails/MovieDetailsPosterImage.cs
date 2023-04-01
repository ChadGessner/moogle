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
          url = "https://i.imgur.com/X1cwA6j.jpg",
          type = null,
          width = null,
          height = null
        };
      }
      image.url = image.url == null || image.url.Length == 0 ? "https://i.imgur.com/X1cwA6j.jpg" : image.url;
      return image;
    }
  }
}
