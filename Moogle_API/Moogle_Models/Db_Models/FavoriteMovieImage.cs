using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.Db_Models
{
  public class FavoriteMovieImage
  {
    public int Id {get; set;}
    public string? Url { get; set; }
    public int? Height { get; set; }
    public int? Width { get; set; }
    public virtual FavoriteMovie FavoriteMovie {get; set;}
  }
}



// export interface IFavoriteMovieDetails {
//     emsId: string,
//     emsVersionId: string,
//     userId: string,
//     name: string,
//     posterImageUrl: string,
//     movieCast: IMovieCast[],
//     synopsis: string,
//     directedBy: string,
//     releaseDate: string,
//     totalGross: string,
//     trailerUrl: string,
//     images: string[],
// }

// export interface IMovieCast {
//     role: string,
//     name: string,
//     characterName: string,
//     [propName: string]: any;
// }