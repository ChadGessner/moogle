using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class Data
  {
    public MovieDetailsMovie movie { get; set; }
    public static Data ValidateMovieDetailsData(Data data)
    {
      if(data.movie == null)
      {
        return null;
      }
      data.movie = MovieDetailsMovie.ValidateMovieDetailsMovie(data.movie);
      return data;
    }
  }
}
