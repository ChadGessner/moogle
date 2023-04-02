using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class BackgroundImage
  {
    public string? url { get; set; }
    public string? type { get; set; }
    public int? width { get; set; }
    public int? height { get; set; }
    public static BackgroundImage ValidateBackgroundImage(BackgroundImage image) 
    {
      if(image == null)
      {
        return new BackgroundImage()
        {
          url = "https://imgur.com/8XIgCBU.jpg",
          type = "image",
          width = -1,
          height = -1
        };
        
      }
      if (image.url == null || image.url.Length == 0)
      {
        image.url = "https://imgur.com/8XIgCBU.jpg";
      }
      return image;
    }
  }
}
