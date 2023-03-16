using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class Ovd
  {
    public string videoId { get; set; }
    public string url { get; set; }
    public string lastSeen { get; set; }
    public Host host { get; set; }
  }
}
