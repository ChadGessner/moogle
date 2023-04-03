using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class LargeIconImage
  {
    public string? url { get; set; }
    public static LargeIconImage ValidateLargeIconImage(LargeIconImage? image)
    {
      if (image == null)
      {
        return new LargeIconImage()
        {
          url = "https://images.fandango.com/cms/assets/823eb040-9be3-11eb-b5d9-dd031ef2e6cb--certifiedfresh.png",
        };
      }
      image.url = image.url == null || image.url.Length == 0 ? "https://images.fandango.com/cms/assets/823eb040-9be3-11eb-b5d9-dd031ef2e6cb--certifiedfresh.png" : image.url;
      return image;
    }
  }
  
}
