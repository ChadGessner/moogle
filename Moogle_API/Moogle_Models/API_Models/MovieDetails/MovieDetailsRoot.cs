using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class MovieDetailsRoot
  {
    public List<Error> errors { get; set; }
    public Data data { get; set; }
  }
}
