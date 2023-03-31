using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.Db_Models;
using Moogle_Repo;
using Moogle_Models.DTO;
using static Moogle_Models.DTO.FavoriteMovieDto;

namespace Moogle_Domain
{
  public class Interactor
  {
    private readonly MoogleRepository _db;
    public Interactor()
    {
      _db = new MoogleRepository();
    }
    public User RegisterUser(User user, List<Theater> theaters)
    {
      Console.WriteLine(user.FirstName + " " + user.LastName);
      return _db.AddUser(user, theaters).Result;
    }
    public User GetUser(string username, string password)
    {
      return _db.GetUser(username, password);
    }

    // public User UpdateUser(User user)
    // {
    //   return _db.UpdateUser(user);
    // }
    public List<Theater> AddUserZip(User user, string zipCode)
    {
      bool answer = _db.AddUserZip(user, zipCode);
      Console.WriteLine(answer);
      if(answer)
      {
        return _db.GetTheatersByUserZip(zipCode).Result;
      }
      return new List<Theater>();
    }
    public List<Theater> AddTheatersByZip(string zipCode, List<Theater> theaters)
    {
      return _db.AddTheatersByZip(zipCode, theaters).Result;
    }
    public List<Theater> GetTheatersByUserZip(string zipCode)
    {
      return _db.GetTheatersByUserZip(zipCode).Result;
    }
    public User UpdateUser(User user)
    {

      return _db.UpdateUser(user).Result;
    }
    public List<string> GetUserZips(User user)
    {
      return _db.GetUserZips(user);
    }
    public List<FavoriteMovieModelDto> GetAllFavoriteMovies(int userId)
    {
      return _db.GetAllFavoriteMovies(userId);
    }
    public FavoriteMovieModelDto AddFavoriteMovie(FavoriteMovie favoriteMovie, int userId)
    {
      return _db.AddFavoriteMovie(favoriteMovie, userId).Result;
    }

    public FavoriteMovieModelDto RemoveFavoriteMovie(FavoriteMovie favoriteMovie, int userId)
    {
      return _db.RemoveFavoriteMovie(favoriteMovie, userId).Result;
    }
    
    public List<FavoriteMovieCastModelDto> GetFavoriteMovieCast(int favoriteMovieId)
    {
      return _db.GetFavoriteMovieCast(favoriteMovieId);
    }
        public List<FavoriteMovieImageModelDto> GetFavoriteMovieImages(int favoriteMovieId)
    {
      return _db.GetFavoriteMovieImages(favoriteMovieId);
    }
  }
}
