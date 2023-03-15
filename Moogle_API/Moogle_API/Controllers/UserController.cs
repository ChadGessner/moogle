using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moogle_Domain;
using Moogle_Flixter_Domain;
using Moogle_Models;
using Moogle_Models.API_Models;
using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Moogle_Models.Db_Models;

namespace Moogle_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class TheaterController : ControllerBase
  {
        private FlixterClient Client { get; set; }
        private ModelConverter ModelConverter { get; set; }
        private Interactor _db { get; set; }
        public TheaterController()
        {
            Client = new FlixterClient();
            ModelConverter = new ModelConverter();
            _db = new Interactor();
        }
        [HttpGet("GetTheater{zip}")]
        public TheaterRequest GetTheater(string zip)
        {
          return Client.MakeTheaterRequest("49519");
        }
        [HttpPost("RegisterUser")]
        public User RegisterUser(AngularUser user)
        {
            List<Theater> theaters = ModelConverter
                .GetTheaterFromAPI(Client
                .MakeTheaterRequest(user.zipCode).data)
                .ToList();

            User newUser = ModelConverter.GetUserFromAngular(user);
            return _db.RegisterUser(newUser, theaters);
        }
  }
}
