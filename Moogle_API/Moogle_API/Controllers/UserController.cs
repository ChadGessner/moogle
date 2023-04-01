using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moogle_Domain;
using Moogle_Flixter_Domain;
using Moogle_Models;
using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Newtonsoft.Json;
using Moogle_Models.API_Models.TheaterDetails;
using Moogle_Models.Db_Models;
using Newtonsoft.Json.Linq;
using System.Text.Json.Nodes;

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

    [HttpGet("GetUserZips/{userName}/{password}")]
    public List<string> GetUserZips(string userName, string password)
    {
      
      
      User userZipGetter = _db.GetUser(userName, password);
      if(userZipGetter != null)
      {
        List<string> zips = _db.GetUserZips(userZipGetter);
        Console.WriteLine(  zips);
        return zips;
      }
      return null;
    }

    [HttpPost("AddUserZip/{zipCode}")]
    public List<Theater> AddUserZip([FromBody]JsonObject user, string zipCode)
    {
      AngularUser userUser = JsonConvert
        .DeserializeObject<AngularUser>(user["user"].ToString());
      Console.WriteLine(userUser.zipCode);
      Console.WriteLine(zipCode);
      User userZipAdder = _db.GetUser(userUser.userName, userUser.password);
      if ( userZipAdder != null)
      {
        List<Theater> theaters = _db.AddUserZip(userZipAdder, zipCode);
        if(theaters == null || theaters.Count() == 0)
        {
          theaters = ModelConverter
            .GetTheaterFromAPI(Client
            .MakeTheaterRequest(zipCode).Result.data)
            .ToList();
          return _db.AddTheatersByZip(zipCode, theaters);
        }
      }
      return _db.GetTheatersByUserZip(zipCode);
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
    [HttpPatch("UpdateUser")]
    public User UpdateUser([FromBody]JsonObject user)
    {
      User userUser = JsonConvert.DeserializeObject<User>(user["user"].ToString());
      return _db.UpdateUser(userUser);
    }

    [HttpGet("GetTheaters/{zipCode}")]
    public List<Theater> GetUserTheaters(string zipCode)
    {
      //User user = _db.GetUser(username, password);
      return _db.GetTheatersByUserZip(zipCode);
    }
    [HttpGet("GetTheaterDetails/{theaterId}")]
    public TheaterDetailData GetTheaterDetails(string theaterId)
    {
      return Client.MakeTheaterDetailRequest(theaterId);
    }

  }
}
