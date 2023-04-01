using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.AngularModels
{

    public class AngularFavoriteMovieImage
    {
        public string? Url { get; set; }
        public int? Height { get; set; }
        public int? Width { get; set; }
    }

    public class AngularFavoriteMovieCast
    {
        public string? Role { get; set; }
        public string? Name { get; set; }
        public string? CharacterName { get; set; }
    }

    public class AngularFavoriteMovieRoot
    {
        public string? EmsId { get; set; }
        public string? EmsVersionId { get; set; }
        public string? Name { get; set; }
        public string? PosterImageUrl { get; set; }
        public List<AngularFavoriteMovieCast>? MovieCast { get; set; }
        public string? Synopsis { get; set; }
        public string? DirectedBy { get; set; }
        public string? ReleaseDate { get; set; }
        public int? TotalGross { get; set; } //shows up as an object?
        public string? TrailerUrl { get; set; }
        public List<AngularFavoriteMovieImage>? Images { get; set; }
    }


//   public class AngularFavoriteMovie
//   {
//     public string EmsId { get; set; }
//     public string EmsVersionId { get; set; }
//     public string UserId { get; set; }
//     public string Name { get; set; }
//     public string PosterImageUrl { get; set; }
//     public ICollection<AngularFavoriteMovieCast> MovieCast { get; set; }
//     public string Synopsis { get; set; }
//     public string DirectedBy { get; set; }
//     public string ReleaseDate { get; set; }
//     public string TotalGross { get; set; }
//     public string TrailerUrl { get; set; }
//     public List<AngularFavoriteMovieImage> Image { get; set; }
//   }
//   public class AngularFavoriteMovieCast
//   {
//     public string Role { get; set; }
//     public string Name { get; set; }
//     public string CharacterName { get; set; }
//   }
//   public class AngularFavoriteMovieImage
//   {
//     public string Url { get; set; }
//   }
}