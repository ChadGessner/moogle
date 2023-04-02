using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moogle_Domain;
using Moogle_Flixter_Domain;
using Moogle_Models;
using Moogle_Models.API_Models.MovieDetails;
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.Db_Models;
using System.Text.Json.Nodes;
using Newtonsoft.Json;
using Moogle_Models.DTO;
using static Moogle_Models.DTO.FavoriteMovieDto;

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

    // [HttpGet("AddFavoriteMovie")]
    // public FavoriteMovie AddFavoriteMovie(FavoriteMovie favoriteMovie)
    // {
    //   return _db.AddFavoriteMovie(favoriteMovie);
    // }

    // [HttpGet("GetMovieDetailsByTitle/{emsVersionId}")]
    // public MovieDetailsRoot GetMovieDetailsByTitle(string emsVersionId)
    // {
    //   return Client.MakeMovieDetailsRequest(emsVersionId);
    // }
    [HttpPost("AddFavoriteMovie/{userId}")]
    public FavoriteMovieModelDto AddFavoriteMovie([FromBody]JsonObject favoriteMovie, int userId)
    {
      
      favoriteMovie["stuff"]["totalGross"] = favoriteMovie["stuff"]["totalGross"].ToString().StartsWith('<') ? null : favoriteMovie["stuff"]["totalGross"];
      
      AngularFavoriteMovieRoot deserializedMovie = JsonConvert
        .DeserializeObject<AngularFavoriteMovieRoot>(favoriteMovie["stuff"].ToString());

      FavoriteMovie favoriteMovieConverted = ModelConverter.GetFavoriteMovieFromAPI(deserializedMovie);

      return _db.AddFavoriteMovie(favoriteMovieConverted, userId);
    }

    // [HttpPost("RemoveFavoriteMovie/{userId}")]
    // public FavoriteMovieModelDto RemoveFavoriteMovie([FromBody]JsonObject favoriteMovie, int userId)
    // {
    //   AngularFavoriteMovieRoot deserializedMovie = JsonConvert
    //     .DeserializeObject<AngularFavoriteMovieRoot>(favoriteMovie["stuff"].ToString());

    //   FavoriteMovie favoriteMovieConverted = ModelConverter.GetFavoriteMovieFromAPI(deserializedMovie);

    //   return _db.RemoveFavoriteMovie(favoriteMovieConverted, userId);
    // }
    [HttpPost("RemoveFavoriteMovie/{userId}/{emsVersionId}")]
    public List<FavoriteMovieModelDto> RemoveFavoriteMovie(int userId, string emsVersionId)
    {
      return _db.RemoveFavoriteMovie(userId, emsVersionId);
    }

    [HttpGet("GetAllFavoriteMovies/{userId}")]
    public List<FavoriteMovieModelDto> GetFavoriteMovies(int userId)
    {
      return _db.GetAllFavoriteMovies(userId);
    }

    [HttpGet("GetFavoriteMovieCast/{favoriteMovieId}")]
    public List<FavoriteMovieCastModelDto> GetFavoriteMovieCast(int favoriteMovieId)
    {
      return _db.GetFavoriteMovieCast(favoriteMovieId);
    }

    [HttpGet("GetFavoriteMovieImages/{favoriteMovieId}")]
    public List<FavoriteMovieImageModelDto> GetFavoriteMovieImages(int favoriteMovieId)
    {
      return _db.GetFavoriteMovieImages(favoriteMovieId);
    }
    [HttpGet("CheckIfFavorited/{userId}/{favoritedMovieEmsVersionId}")]
    public bool CheckIfFavorited(int userId, string favoritedMovieEmsVersionId)
    {
      return _db.CheckIfFavorited(userId, favoritedMovieEmsVersionId);
    }



  }
}


// {
//   "emsId": "string",
//   "name": "string",
//   "posterImageUrl": "string",
//   "movieCast": [
//     {
//       "role": "string",
//       "name": "string",
//       "characterName": "string"
//     }
//   ],
//   "synopsis": "string",
//   "directedBy": "string",
//   "releaseDate": "string",
//   "totalGross": 0,
//   "images": [
//     {
//       "url": "string",
//       "height": 0,
//       "width": 0
//     }
//   ]
// }

// {
//   "id": 0,
//   "emsId": "string",
//   "userId": 0,
//   "user": {
//     "id": 0,
//     "firstName": "string",
//     "lastName": "string",
//     "userName": "string",
//     "email": "string",
//     "password": "string",
//     "phone": "string",
//     "address": "string",
//     "city": "string",
//     "state": "string",
//     "zipCode": "string",
//     "favoriteMovies": [
//       "string"
//     ]
//   },
//   "name": "string",
//   "posterImageUrl": "string",
//   "movieCast": [
//     {
//       "id": 0,
//       "name": "string",
//       "characterName": "string",
//       "role": "string",
//       "favoriteMovie": "string"
//     }
//   ],
//   "synopsis": "string",
//   "directedBy": "string",
//   "releaseDate": "string",
//   "totalGross": "string",
//   "trailerUrl": "string",
//   "image": [
//     {
//       "id": 0,
//       "url": "string",
//       "height": "string",
//       "width": "string",
//       "favoriteMovie": "string"
//     }
//   ]
// }
