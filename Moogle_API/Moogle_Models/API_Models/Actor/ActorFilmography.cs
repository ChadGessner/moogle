namespace Moogle_Models.API_Models.Actor
{
  public class ActorFilmography
  {
    public string? emsId { get; set; }
    public string? emsVersionId { get; set; }
    public string? name { get; set; }
    public ActorPosterImage? posterImage { get; set; }
    public string? releaseDate { get; set; }
    public ActorTomatoRating? tomatoRating { get; set; }
    public ActorUserRating? userRating { get; set; }

    public static ActorFilmography ValidateActorFilmography(ActorFilmography film)
    {
      if(film == null || film.emsVersionId == null || film.name == null || film.name.Length == 0)
      {
        return null;
      }
      film.emsId = film.emsId ?? "-1";
      film.posterImage = ActorPosterImage.ValidateActorPosterImage(film.posterImage);
      film.releaseDate = film.releaseDate ?? "-1";
      film.tomatoRating = ActorTomatoRating.ValidateActorTomatoRating(film.tomatoRating);
      film.userRating = ActorUserRating.ValidateActorUserRating(film.userRating);
      return film;
    }
    
  }
}
