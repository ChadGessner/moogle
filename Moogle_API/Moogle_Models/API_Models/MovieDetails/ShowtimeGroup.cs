using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class ShowtimeGroupings
  {
    public string fandangoId { get; set; }
    public string movieId { get; set; }
    public List<object> displayDates { get; set; }
    public string displayDate { get; set; }
    public string mppBaseUrl { get; set; }
    public List<object> theaters { get; set; }
  }
}
