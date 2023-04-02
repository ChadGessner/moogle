using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.TheaterDetails
{
  public class TheaterDetailData
  {
    [JsonPropertyName("data")]
    public TheaterDetailRoot data { get; set; }
    public static TheaterDetailData ValidateTheaterDetailData(TheaterDetailData? data)
    {
      if(data == null || data.data == null)
      {
        return null;
      }
      data.data = TheaterDetailRoot.ValidateTheaterDetailRoot(data.data);
      return data;
    }
  }
}
