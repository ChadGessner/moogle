using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class UserRating
  {
    public int dtlLikedScore { get; set; }
    public object dtlWtsScore { get; set; }
    public object ratingCount { get; set; }
    public IconImage iconImage { get; set; }
  }
}
