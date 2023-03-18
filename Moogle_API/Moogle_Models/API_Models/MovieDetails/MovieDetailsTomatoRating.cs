using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class MovieDetailsTomatoRating
  {
    public int tomatometer { get; set; }
    public int ratingCount { get; set; }
    public string consensus { get; set; }
    public MovieDetailsIconImage iconImage { get; set; }
    public LargeIconImage largeIconImage { get; set; }
  }
}
