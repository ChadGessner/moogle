using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.Reviews
{
  public class Item
  {
    public object userFullName { get; set; }
    public object userImage { get; set; }
    public object iconImage { get; set; }
    public double rating { get; set; }
    public object isInterested { get; set; }
    public string comment { get; set; }
  }
}
