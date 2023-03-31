using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.Db_Models;
using Moogle_Repo;

namespace Moogle_Domain
{
  public class Interactor
  {
    private readonly MoogleRepository _repo;
    public Interactor()
    {
      _repo = new MoogleRepository();
    }
    public User RegisterUser(User user, List<Theater> theaters)
    {
      Console.WriteLine(user.FirstName + " " + user.LastName);
      return _repo.AddUser(user, theaters).Result;
    }
    public User GetUser(string username, string password)
    {
      return _repo.GetUser(username, password);
    }

    // public User UpdateUser(User user)
    // {
    //   return _repo.UpdateUser(user);
    // }
    public List<Theater> AddUserZip(User user, string zipCode)
    {
      bool answer = _repo.AddUserZip(user, zipCode);
      Console.WriteLine(answer);
      if(answer)
      {
        return _repo.GetTheatersByUserZip(zipCode).Result;
      }
      return new List<Theater>();
    }
    public List<Theater> AddTheatersByZip(string zipCode, List<Theater> theaters)
    {
      return _repo.AddTheatersByZip(zipCode, theaters).Result;
    }
    public List<Theater> GetTheatersByUserZip(string zipCode)
    {
      return _repo.GetTheatersByUserZip(zipCode).Result;
    }
    public User UpdateUser(User user)
    {

      return _repo.UpdateUser(user).Result;
    }
    public List<string> GetUserZips(User user)
    {
      return _repo.GetUserZips(user);
    }
    public FavoriteMovie AddFavoriteMovie(FavoriteMovie favoriteMovie, int userId)
    {
      return _repo.AddFavoriteMovie(favoriteMovie, userId).Result;
    }
  }
}
