namespace Moogle_Models.API_Models.Search
{
  public partial class SearchRoot
  {
    public class Search
    {
      public List<SearchMovie> movies { get; set; }
      public List<SearchPerson> people { get; set; }
      public List<object> theaters { get; set; }
    }
  }
}
