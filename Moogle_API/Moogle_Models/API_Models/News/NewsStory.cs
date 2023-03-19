using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.News
{
  public class NewsStory
  {
    public string id { get; set; }
    public string title { get; set; }
    public MainImage mainImage { get; set; }
    public string status { get; set; }
    public string link { get; set; }
  }
}
