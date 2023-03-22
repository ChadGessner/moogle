namespace Moogle_Models.API_Models.Search
{
  public partial class SearchRoot
  {
    public class SearchMovie
    {
      public string emsId { get; set; }
      public string emsVersionId { get; set; }
      public string name { get; set; }
      public SearchPosterImage posterImage { get; set; }
      public object tomatoRating { get; set; }
      public SearchUserRating userRating { get; set; }
    }
  }
}
