namespace Moogle_Models.API_Models.Search
{
  public partial class SearchRoot
  {
    public class SearchUserRating
    {
      public int? dtlLikedScore { get; set; }
      public object dtlWtsScore { get; set; }
      public SearchIconImage iconImage { get; set; }
    }
  }
}
