namespace Moogle_Models.API_Models.Actor
{
  public class ActorPerson
  {
    public int id { get; set; }
    public string name { get; set; }
    public string birthDate { get; set; }
    public string biography { get; set; }
    public HeadShotImage headShotImage { get; set; }
    public string birthPlace { get; set; }
    public string gender { get; set; }
    public List<ActorImage> images { get; set; }
    public List<ActorFilmography> filmography { get; set; }
  }
}
