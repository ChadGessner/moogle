using Microsoft.AspNetCore.Mvc;
using Moogle_Domain;
using Moogle_Flixter_Domain;
using Moogle_Models;
using Moogle_Models.API_Models.News;
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Moogle_Flixter_Domain.Configs;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Moogle_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class NewsController : ControllerBase
  {
    private readonly MoogleConfig _config;

    private FlixterClient Client { get; set; }
    private ModelConverter ModelConverter { get; set; }
    private Interactor _db { get; set; }
    public NewsController()
    {
      Client = new FlixterClient(_config);
      ModelConverter = new ModelConverter();
      _db = new Interactor();
    }

    [HttpGet("GetNewsStoryList")]
    public NewsRoot GetNewsStoryList()
    {
      return Client.MakeMovieNewsRequest();
    }
  }
}
