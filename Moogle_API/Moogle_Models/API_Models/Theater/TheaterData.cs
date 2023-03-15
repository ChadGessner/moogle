using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterRequest
{
  public class TheaterData
  {
    public string id {  get; set; }
    public string tid { get; set; }
    public string name { get; set; }
    public float latitude { get; set; }
    public float longitude { get; set; }
    public string hasShowTimes { get; set; }
    public bool hasReservedSeating { get; set; }
    public bool isTicketing { get; set; }
    public float distance { get; set; }
  }
}
