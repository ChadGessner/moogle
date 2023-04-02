using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class TheaterDetailRoot
  {
    [JsonPropertyName("theaterShowtimeGroupings")]
    public TheaterShowtimeGroupings theaterShowtimeGroupings { get; set; }

    public static TheaterDetailRoot ValidateTheaterDetailRoot(TheaterDetailRoot? root)
    {
      if(root != null && root.theaterShowtimeGroupings != null)
      {
        root.theaterShowtimeGroupings = TheaterShowtimeGroupings.ValidateTheaterShowTimeGroupings(root.theaterShowtimeGroupings);
        return root;
      }
      return null;
    }
  }
}
