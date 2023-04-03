using Moogle_Models.Db_Models;
using System.Reflection;
using System;

namespace Moogle_Models.API_Models.Actor
{
  public class ActorImage
  {
    public string? url { get; set; }
    public string? type { get; set; }
    public int? width { get; set; }
    public int? height { get; set; }
    public static ActorImage ValidateActorImage(ActorImage image)
    {
      if(image == null)
      {
        return new()
        {
          url = "https://localhost:7239/Images/image-not-found.gif",
          type = "<i class=\"bi bi-bandaid\"></i>",
          width = -1,
          height = -1
      };
      }
      image.url = image.url == null || image.url.Length == 0 ? "https://localhost:7239/Images/image-not-found.gif" : image.url;
      image.type = image.type ?? "<i class=\"bi bi-bandaid\"></i>";
      image.width = image.width ?? -1;
      image.height = image.height ?? -1;
      return image;
    }
  }
}
