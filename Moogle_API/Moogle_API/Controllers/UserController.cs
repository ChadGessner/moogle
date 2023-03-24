using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moogle_Domain;
using Moogle_Flixter_Domain;
using Moogle_Models;
using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.API_Models.Theater.TheaterRequest;

using Moogle_Models.API_Models.TheaterDetails;
using Moogle_Models.Db_Models;

namespace Moogle_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserController : ControllerBase
  {
    private FlixterClient Client { get; set; }
    private ModelConverter ModelConverter { get; set; }
    private Interactor _db { get; set; }
    public UserController()
    {
      Client = new FlixterClient();
      ModelConverter = new ModelConverter();
      _db = new Interactor();
    }
    [HttpGet("GetUser/{username}/{password}")]
    public User GetUser(string username, string password)
    {
      return _db.GetUser(username, password);
    }
    [HttpPost("RegisterUser")]
    public User RegisterUser(AngularUser user)
    {
      List<Theater> theaters = ModelConverter
          .GetTheaterFromAPI(Client
          .MakeTheaterRequest(user.zipCode).Result.data)
          .ToList();

      User newUser = ModelConverter.GetUserFromAngular(user);
      return _db.RegisterUser(newUser, theaters);
    }
    [HttpGet("GetTheaters/{username}/{password}")]
    public List<Theater> GetUserTheaters(string username, string password)
    {
      User user = _db.GetUser(username, password);
      return _db.GetTheatersByUserZip(user);
    }
    [HttpGet("GetTheaterDetails/{theaterId}")]
    public TheaterDetailData GetTheaterDetails(string theaterId)
    {
      return Client.MakeTheaterDetailRequest(theaterId);
    }


  }
}
