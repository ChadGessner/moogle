using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class TheaterShowtimeGroupings
  {
    [JsonPropertyName("theaterId")]
    public string? theaterId { get; set; }
    [JsonPropertyName("displayDates")]
    public List<string>? displayDates { get; set; }
    [JsonPropertyName("displayDate")]
    public string? displayDate { get; set; }
    [JsonPropertyName("mppBaseUrl")]
    public string? mppBaseUrl { get; set; }
    [JsonPropertyName("movies")]
    public List<TheaterDetailsMovie>? movies { get; set; }
    public static TheaterShowtimeGroupings ValidateTheaterShowTimeGroupings(TheaterShowtimeGroupings? grouping)
    {
      if(grouping != null && grouping.theaterId !=null && grouping.movies != null && grouping.movies.Count > 0 )
      {
        grouping.displayDate = ValidateStringData(grouping.displayDate);
        grouping.displayDates = grouping.displayDates
          .Select(x=>ValidateStringData(x))
          .ToList();
        grouping.displayDate = ValidateStringData(grouping.displayDate);
        grouping.movies = grouping.movies
          .Select(x=>TheaterDetailsMovie
          .ValidateTheaterDetailsMovie(x))
          .ToList();
        return grouping;
      }
      return null;
    }
    public static string ValidateStringData(string? data)
    {
      return data == null ? "" : data;
    }

  }
}
