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
          url = "https://images.fandango.com/cms/assets/73d962c0-9be3-11eb-8d70-c5bf5e872b28--certifiedfresh-textless.png",
        };
      }
      image.url = image.url == null || image.url.Length == 0 ? "https://images.fandango.com/cms/assets/73d962c0-9be3-11eb-8d70-c5bf5e872b28--certifiedfresh-textless.png" : image.url;
      return image;
    }
  }
}
