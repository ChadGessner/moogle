using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class Cast
  {
    public object? id { get; set; }
    public string? role { get; set; }
    public string? name { get; set; }
    public string? characterName { get; set; }
    public object? headShotImage { get; set; }

    public static Cast ValidateCast(Cast cast)
    {
      if (cast == null)
      {
        return new Cast()
        {
          id = "-1",
          role = "<i class=\"bi bi-bandaid\"></i>",
          name = "<i class=\"bi bi-bandaid\"></i>",
          characterName = "<i class=\"bi bi-bandaid\"></i>",
          headShotImage = "https://imgur.com/lWB1YiW.jpg"
        };
      }
      cast.id = cast.id == null || cast.id.ToString().Length == 0 ? "N/A" : cast.id;
      cast.role = cast.role == null || cast.role.Length == 0 ? "<i class=\"bi bi-bandaid\"></i>" : cast.role;
      cast.name = cast.name == null || cast.name.Length == 0 ? "<i class=\"bi bi-bandaid\"></i>" : cast.name;
      cast.characterName = cast.characterName == null || cast.characterName.Length == 0 ? "<i class=\"bi bi-bandaid\"></i>" : cast.characterName;
      cast.headShotImage = cast.headShotImage == null || cast.headShotImage.ToString().Length == 0 ? "https://imgur.com/lWB1YiW.jpg" : cast.headShotImage;
      return cast;
    }
    public static List<Cast> ValidateCastList(List<Cast> cast)
    {
      if(cast == null || cast.Count == 0)
      {
        return new List<Cast>()
        {
          new Cast()
        {
          id = "-1",
          role = "<i class=\"bi bi-bandaid\"></i>",
          name = "<i class=\"bi bi-bandaid\"></i>",
          characterName = "<i class=\"bi bi-bandaid\"></i>",
          headShotImage = "https://localhost:7239/Images/image-not-found.gif"
        },
       new  Cast()
        {
          id = "-1",
          role = "<i class=\"bi bi-bandaid\"></i>",
          name = "<i class=\"bi bi-bandaid\"></i>",
          characterName = "<i class=\"bi bi-bandaid\"></i>",
          headShotImage = "https://localhost:7239/Images/image-not-found.gif"
        },
        new Cast()
        {
          id = "-1",
          role = "<i class=\"bi bi-bandaid\"></i>",
          name = "<i class=\"bi bi-bandaid\"></i>",
          characterName = "<i class=\"bi bi-bandaid\"></i>",
          headShotImage = "https://localhost:7239/Images/image-not-found.gif"
        }
      };
      }
      return cast.Select(x=>ValidateCast(x)).ToList();
    }
  }
}
