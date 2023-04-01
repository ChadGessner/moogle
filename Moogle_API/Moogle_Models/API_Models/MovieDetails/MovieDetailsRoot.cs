using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class MovieDetailsRoot
  {
    public List<Error> errors { get; set; }
    public Data data { get; set; }

    public static MovieDetailsRoot ValidateMovieDetailRoot(MovieDetailsRoot details)
    {
      if(details.data == null)
      {
        return null;
      }
      details.data = Data.ValidateMovieDetailsData(details.data);
      return details;
    }
  }
}
