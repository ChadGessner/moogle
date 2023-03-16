using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class Error
  {
    public string message { get; set; }
    public List<Location> locations { get; set; }
    public List<string> path { get; set; }
  }
}
