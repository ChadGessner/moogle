namespace Moogle_Models.API_Models.Actor
{
  public class ActorFilmography
  {
    public string emsId { get; set; }
    public string emsVersionId { get; set; }
    public string name { get; set; }
    public ActorPosterImage posterImage { get; set; }
    public string releaseDate { get; set; }
    public ActorTomatoRating tomatoRating { get; set; }
    public ActorUserRating userRating { get; set; }
  }
}
