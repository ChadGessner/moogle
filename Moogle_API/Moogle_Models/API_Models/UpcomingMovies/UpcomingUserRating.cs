using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.UpcomingMovies
{
  public class UpcomingUserRating
  {
    public object? dtlLikedScore { get; set; }
    public object? ratingCount { get; set; }
    public int dtlWtsCount { get; set; }
    public object? dtlWtsScore { get; set; }
    public object? dtlScoreCount { get; set; }
    public UpcomingIconImage iconImage { get; set; }
  }
}
