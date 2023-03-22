namespace Moogle_Models.API_Models.Search
{
  public partial class SearchRoot
  {
    public class SearchPerson
    {
      public int id { get; set; }
      public string name { get; set; }
      public SearchHeadShotImage headShotImage { get; set; }
    }
  }
}
