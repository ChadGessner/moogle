using static System.Net.WebRequestMethods;

namespace Moogle_Models.API_Models.Actor
{
  public class ActorTomatoRating
  {
    public int? tomatometer { get; set; }
    public ActorIconImage? iconImage { get; set; }
    public static ActorTomatoRating ValidateActorTomatoRating(ActorTomatoRating? rating)
    {
      if (rating == null)
      {
        return new()
        {
          tomatometer = -1,
          iconImage = new ActorIconImage()
          {
            url = "https://images.fandango.com/cms/assets/73d962c0-9be3-11eb-8d70-c5bf5e872b28--certifiedfresh-textless.png"
          },
        };
      }
      rating.tomatometer = rating.tomatometer ?? -1;
      rating.iconImage = rating.iconImage ?? new ActorIconImage()
      {
        url = "https://images.fandango.com/cms/assets/73d962c0-9be3-11eb-8d70-c5bf5e872b28--certifiedfresh-textless.png"

      };
      return rating;
    }
  }
}
