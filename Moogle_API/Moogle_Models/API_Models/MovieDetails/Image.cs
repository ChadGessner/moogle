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
          url = "https://localhost:7239/Images/image-not-found.gif",
          type = "image",
          width = -1,
          height = -1
        };
      }
      if(image.url == null || image.url.Length == 0)
      {
        image.url = "https://localhost:7239/Images/image-not-found.gif";
      }
      return image;
    }
    public static List<Image> ValidateImages(List<Image> images)
    {
      List<Image> placeholders = new List<Image>()
        {
          new Image()
        {
          url = "https://localhost:7239/Images/image-not-found.gif",
          type = "image",
          width = -1,
          height = -1
        },
          new Image()
        {
          url = "https://localhost:7239/Images/image-not-found.gif",
          type = "image",
          width = -1,
          height = -1
        },
          new Image()
        {
          url = "https://localhost:7239/Images/image-not-found.gif",
          type = "image",
          width = -1,
          height = -1
        }
      };
      if (images == null || images.Count == 0)
      {
        return placeholders;
      }
      images = images.Select(x=> ValidateImage(x)).ToList();
      return images.Count < 3 ? images
        .Concat(placeholders.Take(Math.Abs(images.Count - 3)))
        .ToList() : images;
    }
  }
}
