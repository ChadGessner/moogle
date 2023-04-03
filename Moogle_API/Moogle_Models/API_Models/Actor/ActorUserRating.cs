namespace Moogle_Models.API_Models.Actor
{
  public class ActorUserRating
  {
    public int? dtlLikedScore { get; set; }
    public object? dtlWtsScore { get; set; }
    public int? dtlWtsCount { get; set; }
    public int? dtlScoreCount { get; set; }
    public ActorIconImage? iconImage { get; set; }

    public static ActorUserRating ValidateActorUserRating(ActorUserRating? rating)
    {
      if(rating == null)
      {
        return new()
        {
          dtlLikedScore = -1,
          dtlWtsScore = -1,
          dtlWtsCount = -1,
          dtlScoreCount = -1,
          iconImage = ActorIconImage.ValidateActorIconImage(null)
        };
      }
      rating.dtlLikedScore = rating.dtlLikedScore ?? -1;
      rating.dtlWtsScore = rating.dtlWtsScore ?? -1;
      rating.dtlScoreCount = rating.dtlScoreCount ?? -1;
      rating.iconImage = ActorIconImage.ValidateActorIconImage(rating.iconImage);
      return rating;
    }
  }
}
