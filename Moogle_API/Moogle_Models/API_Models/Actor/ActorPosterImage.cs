namespace Moogle_Models.API_Models.Actor
{
  public class ActorPosterImage
  {
    public string? url { get; set; }
    public string? type { get; set; }
    public int? width { get; set; }
    public int? height { get; set; }

    public static ActorPosterImage ValidateActorPosterImage(ActorPosterImage? image)
    {
      if(image == null || image.url == null || image.url.Length == 0)
      {
        return new()
        {
          url = "https://localhost:7239/Images/image-not-found.gif",
          type = "image",
          width = -1,
          height = -1
        };
      }
      image.type = image.type ?? "image";
      image.width = image.width ?? -1;
      image.height = image.height ?? -1;
      return image;
    }
  }
}
