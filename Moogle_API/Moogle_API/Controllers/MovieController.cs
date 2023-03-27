using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moogle_Domain;
using Moogle_Flixter_Domain;
using Moogle_Models;
using Moogle_Models.API_Models.MovieDetails;
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Moogle_Models.API_Models.UpcomingMovies;
using Moogle_Flixter_Domain.Configs;

namespace Moogle_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MovieController : ControllerBase
  {
    private readonly MoogleConfig _config;
    private FlixterClient Client { get; set; }
    private ModelConverter ModelConverter { get; set; }
    private Interactor _db { get; set; }

    public MovieController()
    {
      Client = new FlixterClient(_config);
      ModelConverter = new ModelConverter();
      _db = new Interactor();
    }

    [HttpGet("GetUpcomingMovieDetails")]
    public UpcomingMovies UpcomingMovieDetails()
    {
      return Client.MakeUpcomingMovieRequest();
    }
    [HttpGet("GetMovieDetailsByTitle/{emsVersionId}")]
    public MovieDetailsRoot GetMovieDetailsByTitle(string emsVersionId)
    {
      return Client.MakeMovieDetailsRequest(emsVersionId);
    }
  }
}
