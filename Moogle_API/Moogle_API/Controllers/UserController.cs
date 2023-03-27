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
    [HttpPost("UpdateUser")]
    public User UpdateUser([FromBody] JsonObject user)
    {
      //Console.WriteLine(user.ToString());
      //Console.WriteLine(  user);
      //Console.WriteLine(user.ToString());
      Console.WriteLine(user["city"]);
      AngularUser userUser = JsonConvert.DeserializeObject<AngularUser>(user["user"].ToString());
      Console.WriteLine(  userUser.city);
      return _db.UpdateUser(ModelConverter.GetUserFromAngular(userUser));
    }

  }
}
