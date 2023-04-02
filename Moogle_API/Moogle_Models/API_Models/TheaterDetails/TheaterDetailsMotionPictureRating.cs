using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class TheaterDetailsMotionPictureRating
  {
    [JsonPropertyName("area")]
    public object? area { get; set; } 
    [JsonPropertyName("code")]
    public string code { get; set; }
    [JsonPropertyName("description")]
    public string description { get; set; }
    public static TheaterDetailsMotionPictureRating ValidateTheaterDetailsMotionPictureRating(TheaterDetailsMotionPictureRating? r)
    {
      r = r ?? new();
      r.area = r.area ?? null;
      r.code = r.code ?? null;
      r.description = r.description ?? "<i class=\"bi bi-bandaid\"></i>";
      return r;
    }
  }
}
