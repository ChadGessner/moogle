namespace Moogle_Models.API_Models.Actor
{
  public class ActorUserRating
  {
    public int dtlLikedScore { get; set; }
    public object dtlWtsScore { get; set; }
    public int dtlWtsCount { get; set; }
    public int dtlScoreCount { get; set; }
    public ActorIconImage iconImage { get; set; }
  }
}
