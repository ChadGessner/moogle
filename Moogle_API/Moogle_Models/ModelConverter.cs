using System.Data.Common;
using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.API_Models.TheaterRequest;
using Moogle_Models.Db_Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models
{
  public class ModelConverter
  {
        public static IEnumerable<Theater> GetTheaterFromAPI(RootTheaterData root)
        {
            return root.theaters.Select(x => new Theater()
            {
                Id = x.id,
                Tid = x.tid,
                Name = x.name,
                Latitude = x.latitude,
                Longitude = x.longitude,
                HasShowTimes = x.hasShowTimes,
                HasReservedSeating = x.hasReservedSeating,
                IsTicketing = x.isTicketing,
                Distance = x.distance
            });
        } 
        public static User GetUserFromAngular(AngularUser user)
        {
            return new User()
            {
                FirstName = user.firstName,
                LastName = user.lastName,
                UserName = user.userName,
                Email = user.email,
                Password = user.password,
                Phone = user.phone,
                Address = user.address,
                City = user.city,
                State = user.state,
                ZipCode = user.zipCode,
            };
        }
        public static FavoriteMovie GetFavoriteMovieFromAPI(AngularFavoriteMovieRoot favoriteMovie)
        {
                    return new FavoriteMovie(){
                    EmsId = favoriteMovie.EmsId,
                    EmsVersionId = favoriteMovie.EmsVersionId,
                    Name = favoriteMovie.Name,
                    PosterImageUrl = favoriteMovie.PosterImageUrl,
                    MovieCast = favoriteMovie.MovieCast.Select(x => FavoriteMovieCastConverter(x)).ToList(),
                    Synopsis = favoriteMovie.Synopsis,
                    DirectedBy = favoriteMovie.DirectedBy,
                    ReleaseDate = favoriteMovie.ReleaseDate,
                    TotalGross = favoriteMovie.TotalGross,
                    TrailerUrl = favoriteMovie.TrailerUrl,
                    Images = favoriteMovie.Images.Select(x => FavoriteMovieImageConverter(x)).ToList()
                };
        } 

        
        public static FavoriteMovieCast FavoriteMovieCastConverter(AngularFavoriteMovieCast cast)
        {
                return new FavoriteMovieCast(){
                    CharacterName = cast.CharacterName,
                    Role = cast.Role,
                    Name = cast.Name
                };
        }
        public static FavoriteMovieImage FavoriteMovieImageConverter(AngularFavoriteMovieImage images)
        {
                return new FavoriteMovieImage(){
                    Url = images.Url,
                    Height = images.Height,
                    Width = images.Width
                };
        }
  }
}



    // public int Id {get; set; }
    // public string? EmsId { get; set; }
    // public int UserId { get; set; }
    // public virtual User User { get; set; }
    // public string? Name { get; set; }
    // public string? PosterImageUrl { get; set; }
    // public virtual List<FavoriteMovieCast> MovieCast { get; set; }
    // public string? Synopsis { get; set; }
    // public string? DirectedBy { get; set; }
    // public string? ReleaseDate { get; set; }
    // public string? TotalGross { get; set; }
    // public string? TrailerUrl { get; set; }
    // public virtual List<FavoriteMovieImage> Image { get; set; }



//public AngularUser GetAngularUserFromDbUser(User user)
//{
//  retunr new AngularUser()
//  {
//    this.
//  }
//}
/*      public string Id { get; set; }
        public string Tid { get; set; }
        public string Name { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public string HasShowTimes { get; set; }
        public bool HasReservedSeating { get; set; }
        public bool IsTicketing { get; set; }
        public float Distance { get; set; }
*/
