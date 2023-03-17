using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.UpcomingMovies
{
  public class Upcoming
  {
    public string emsId { get; set; }
    public string emsVersionId { get; set; }
    public string name { get; set; }
    public string releaseDate { get; set; }
    public UpcomingPosterImage posterImage { get; set; }
    public UpcomingUserRating userRating { get; set; }
  }
}
