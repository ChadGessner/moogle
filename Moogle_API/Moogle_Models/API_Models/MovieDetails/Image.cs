using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class Image
  {
    public string? url { get; set; }
    public string? type { get; set; }
    public int? width { get; set; }
    public int? height { get; set; }

    public static Image ValidateImage(Image image)
    {
      if(image == null)
      {
        return new Image()
        {
          url = "https://imgur.com/br9Z4Vq.jpg",
          type = "image",
          width = -1,
          height = -1
        };
      }
      if(image.url == null || image.url.Length == 0)
      {
        image.url = "https://imgur.com/br9Z4Vq.jpg";
      }
      return image;
    }
    public static List<Image> ValidateImages(List<Image> images)
    {
      if(images == null || images.Count == 0)
      {
        return new List<Image>()
        {
          new Image()
        {
          url = "https://imgur.com/V4hWoRU.jpg",
          type = "image",
          width = -1,
          height = -1
        },
          new Image()
        {
          url = "https://imgur.com/SrVIhw3.jpg",
          type = "image",
          width = -1,
          height = -1
        },
          new Image()
        {
          url = "https://imgur.com/br9Z4Vq.jpg",
          type = "image",
          width = -1,
          height = -1
        }
      };
      }
      return images.Select(x=> ValidateImage(x)).ToList();  
    }
  }
}
