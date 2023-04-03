namespace Moogle_Models.API_Models.Actor
{
  public class ActorIconImage
  {
    public string? url { get; set; }
    public static ActorIconImage ValidateActorIconImage(ActorIconImage? image)
    {
      if(image == null || image.url == null || image.url.Length == 0)
      {
        return new ActorIconImage()
        {
          url = "https://images.fandango.com/cms/assets/b2570160-9be3-11eb-954b-43250906bea9--red-popcorn.png"
        };
      }
      return image;
    }
  }
}
