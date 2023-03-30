using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moogle_Domain;
using Moogle_Flixter_Domain;
using Moogle_Models;
using Moogle_Models.API_Models.MovieDetails;
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.Db_Models;


namespace Moogle_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class FavoriteMovieController : ControllerBase
  {
    private FlixterClient Client { get; set; }
    private ModelConverter ModelConverter { get; set; }
    private Interactor _db { get; set; }

    public FavoriteMovieController()
    {
      Client = new FlixterClient();
      ModelConverter = new ModelConverter();
      _db = new Interactor();
    }

    [HttpGet("AddFavoriteMovie")]
    public AngularFavoriteMovie AddFavoriteMovie(AngularFavoriteMovie favoriteMovie)
    {
      return _db.AddFavoriteMovie(favoriteMovie);
    }

    // [HttpGet("GetMovieDetailsByTitle/{emsVersionId}")]
    // public MovieDetailsRoot GetMovieDetailsByTitle(string emsVersionId)
    // {
    //   return Client.MakeMovieDetailsRequest(emsVersionId);
    // }
  }
}
