using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Moogle_Models.Db_Models;

namespace Moogle_Models.DTO
{
  public class FavoriteMovieDto
  {
    public class FavoriteMovieImageModelDto
    {
      public string? Url { get; set; }
      public int? Height { get; set; }
      public int? Width { get; set; }
    }

    public class FavoriteMovieCastModelDto
    {
      public string? Role { get; set; }
      public string? Name { get; set; }
      public string? CharacterName { get; set; }
    }

    public class FavoriteMovieModelDto
    {
      public string? EmsId { get; set; }
      public User? User { get; set; }
      public string? Name { get; set; }
      public string? PosterImageUrl { get; set; }
      public List<FavoriteMovieCastModelDto>? MovieCast { get; set; }
      public string? Synopsis { get; set; }
      public string? DirectedBy { get; set; }
      public string? ReleaseDate { get; set; }
      public int? TotalGross { get; set; } //shows up as an object?
      public string? TrailerUrl { get; set; }
      public List<FavoriteMovieImageModelDto>? Images { get; set; }
    }
  }
}