using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.Db_Models
{
  public class FavoriteMovie
  {
    [Key]
    public int Id {get; set; }
    public string? EmsId { get; set; }
    public string? EmsVersionId { get; set; }
    public virtual User User { get; set; }
    public string? Name { get; set; }
    public string? PosterImageUrl { get; set; }
    public virtual List<FavoriteMovieCast> MovieCast { get; set; }
    public string? Synopsis { get; set; }
    public string? DirectedBy { get; set; }
    public string? ReleaseDate { get; set; }
    public int? TotalGross { get; set; }
    public string? TrailerUrl { get; set; }
    public virtual List<FavoriteMovieImage> Images { get; set; }
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