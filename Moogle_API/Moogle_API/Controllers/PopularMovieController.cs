using System;
using Newtonsoft.Json;
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
using Newtonsoft.Json.Linq;
using System.Text.Json.Nodes;
using System.Text.Json;

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
    public PopularMoviesRoot GetPopularMoviesList()
    {
      return Client.MakePopularMoviesRequest();
    }

    [HttpGet("GetPopularMoviesListTest")]
    public List<PopularMoviesRoot> GetPopularMoviesListTest()
    {
        List<PopularMoviesRoot> testList1 = new();
      var test = Client.MakePopularMoviesRequest();
      var json = Newtonsoft.Json.JsonConvert.SerializeObject(test);
      var response = JsonConvert.DeserializeObject<dynamic>(json);
      
      foreach(var r in response)
      {
        if(r[0].data.popularity.name)
        {
          PopularMoviesRoot testObject = new();
          testList1.Add(r);

        }
        JArray test1 = r[0].data.popularity;
        var list = test1.ToList();
      }

      return testList1;
    }
  }
}

    // [HttpPost("UpdateUser")]
    // public User UpdateUser([FromBody] JsonObject user)
    // {
    //   //Console.WriteLine(user.ToString());
    //   //Console.WriteLine(  user);
    //   //Console.WriteLine(user.ToString());
    //   Console.WriteLine(user["city"]);
    //   AngularUser userUser = JsonConvert.DeserializeObject<AngularUser>(user["user"].ToString());
    //   Console.WriteLine(  userUser.city);
    //   return _db.UpdateUser(ModelConverter.GetUserFromAngular(userUser));
    // }
