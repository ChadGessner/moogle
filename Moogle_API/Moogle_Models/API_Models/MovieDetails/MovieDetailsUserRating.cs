using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class MovieDetailsUserRating
  {
    public int? dtlLikedScore { get; set; }
    public object? dtlWtsScore { get; set; }
    public object? ratingCount { get; set; }
    public MovieDetailsIconImage? iconImage { get; set; }
  }
}
