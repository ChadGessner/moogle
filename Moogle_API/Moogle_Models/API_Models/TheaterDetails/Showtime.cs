using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class Showtime
  {
    [JsonPropertyName("id")]
    public string id { get; set; }
    [JsonPropertyName("type")]
    public string type { get; set; }
    [JsonPropertyName("providerTime")]
    public string providerTime { get; set; }
    [JsonPropertyName("providerDate")]
    public string providerDate { get; set; }
    [JsonPropertyName("isActive")]
    public bool isActive { get; set; }
    [JsonPropertyName("sdate")]
    public string sdate { get; set; }
    public static Showtime ValidateShowtime(Showtime? s)
    {
      if(s == null || s.sdate == null)
      {
        return null;
      }
      s.id = s.id ?? "";
      s.type = s.type ?? "";
      s.providerTime = s.providerTime ?? "";
      s.providerDate = s.providerDate ?? "";
      s.isActive = s.isActive == null ? false : s.isActive;
      return s;
    }
  }
}
