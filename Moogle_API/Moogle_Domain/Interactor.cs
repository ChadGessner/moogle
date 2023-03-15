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
            return _db.AddUser(user, theaters);
        }
    }
}