using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Moogle_Flixter_Domain;
using Moogle_Domain;
using Moogle_Models;
using Moogle_Models.API_Models.News;
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Moogle_Models.API_Models.PopularMovies;

namespace Moogle_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PopularMoviesController : ControllerBase
  {
    private FlixterClient Client { get; set; }
    private ModelConverter ModelConverter { get; set; }
    private Interactor _db { get; set; }
    public PopularMoviesController()
    {
      Client = new FlixterClient();
      ModelConverter = new ModelConverter();
      _db = new Interactor();
    }

    [HttpGet("GetPopularMoviesList")]
    public List<PopularMoviesPopularity> GetPopularMoviesList()
    {
      return Client.MakePopularMoviesRequest();
    }
  }
}