using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moogle_Flixter_Domain;
using Moogle_Models.API_Models.Actor;
using Moogle_Models.API_Models.Search;
using Moogle_Flixter_Domain.Configs;


namespace Moogle_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {
        private readonly MoogleConfig _config;

    private FlixterClient _client;
    public SearchController()
    {
      _client = new FlixterClient(_config);
    }
    [HttpGet("GetActorData/{actorId}")]
    public ActorRoot GetActorData(string actorId)
    {
      return _client.GetActorData(actorId);
    }
    [HttpGet("GetSearchQuery/{query}/{userZip}")]
    public SearchRoot GetSearchQuery(string query, string userZip)
    {
      return _client.GetSearchQuery(query, userZip);
    }
  }
}
