using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class Cast
  {
    public object id { get; set; }
    public string role { get; set; }
    public string name { get; set; }
    public string characterName { get; set; }
    public object headShotImage { get; set; }
  }
}
