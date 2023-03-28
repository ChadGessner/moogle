using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.Db_Models;
using Moogle_Repo;

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
    public List<Theater> GetTheatersByUserZip(string zipCode)
    {
      return _db.GetTheatersByUserZip(zipCode).Result;
    }
    public User UpdateUser(User user)
    {

      return _db.UpdateUser(user).Result;
    }
  }
}
