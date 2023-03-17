using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moogle_Domain;
using Moogle_Flixter_Domain;
using Moogle_Models;
using Moogle_Models.API_Models.MovieDetails;
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Moogle_Models.API_Models.UpcomingMovies;

namespace Moogle_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MovieController : ControllerBase
  {
    private FlixterClient Client { get; set; }
    private ModelConverter ModelConverter { get; set; }
    private Interactor _db { get; set; }

    public MovieController()
    {
      Client = new FlixterClient();
      ModelConverter = new ModelConverter();
      _db = new Interactor();
    }

    [HttpGet("GetMovieDetails{emsVersionId}")]
    public MovieDetailsRoot MovieDetails(string emsVersionId)
    {
      return Client.MakeMovieDetailsRequest(emsVersionId);
    }

    [HttpGet("GetUpcomingMovieDetails")]
    public UpcomingMovies UpcomingMovieDetails()
    {
      return Client.MakeUpcomingMovieRequest();
    }
  }
}
