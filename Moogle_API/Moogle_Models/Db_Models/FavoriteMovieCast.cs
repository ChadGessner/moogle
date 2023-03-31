using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.Db_Models
{
  public class FavoriteMovieCast
  {
    public int Id {get; set;}
    public string? Name { get; set; }
    public string? CharacterName { get; set; }
    public string? Role { get; set; }
    // public virtual FavoriteMovie FavoriteMovie {get; set;}

  }
}
