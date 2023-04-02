using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.WebRequestMethods;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class Trailer
  {
    public string url { get; set; }
    public string freewheelId { get; set; }
    public string duration { get; set; }
    public static Trailer ValidateTrailer(Trailer trailer)
    {
      if(trailer == null)
      {
        return new Trailer()
        {
          url = "http://link.theplatform.com/s/NGweTC/media/ye0BXEIgehbO",
          freewheelId = "foo",
          duration = "foo"
        };
      }
      if(trailer.url == null || trailer.url.Length == 0)
      {
        trailer.url = "http://link.theplatform.com/s/NGweTC/media/ye0BXEIgehbO";
      }
      return trailer;
    }
  }
}
