namespace Moogle_Models.API_Models.Actor
{
  public class ActorPerson
  {
    public int? id { get; set; }
    public string? name { get; set; }
    public string? birthDate { get; set; }
    public string? biography { get; set; }
    public HeadShotImage? headShotImage { get; set; }
    public string? birthPlace { get; set; }
    public string? gender { get; set; }
    public List<ActorImage>? images { get; set; }
    public List<ActorFilmography>? filmography { get; set; }
    public static ActorPerson ValidateActorPerson(ActorPerson person)
    {
      if (person == null || person.id == null || person.name == null)
      {
        return null;
      }
      person.birthDate = person.birthDate == null || person.birthDate.Length == 0 ? "<i class=\"bi bi-bandaid\"></i>" : person.birthDate;
      person.biography = person.biography == null || person.biography.Length == 0 ? "<i class=\"bi bi-bandaid\"></i>" : person.biography;
      person.birthPlace = person.birthPlace == null || person.birthPlace.Length == 0 ? "<i class=\"bi bi-bandaid\"></i>" : person.birthPlace;
      person.gender = person.gender == null || person.gender.Length == 0 ? "<i class=\"bi bi-bandaid\"></i>" : person.gender;
      person.headShotImage = HeadShotImage
        .ValidateHeadshotImage(person.headShotImage) ?? null;

      person.images = person.images
        .Select(i=>ActorImage.ValidateActorImage(i))
        .ToList() ?? null;

      person.filmography = person.filmography
        .Select(f => ActorFilmography.ValidateActorFilmography(f))
        .ToList() ?? null;

      return person;
    }
  }
}
