using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.UpcomingMovies
{
  public class UpcomingPosterImage
  {
    public string url { get; set; }
    public object? type { get; set; }
    public object? width { get; set; }
    public object? height { get; set; }
    public object? tomatoRating { get; set; }
  }
}
