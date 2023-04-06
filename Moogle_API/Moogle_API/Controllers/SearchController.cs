using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moogle_Flixter_Domain;
using Moogle_Models.API_Models.Actor;
using Moogle_Models.API_Models.Search;

namespace Moogle_API.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class SearchController : ControllerBase
  {
    private FlixterClient _client;
    public SearchController()
    {
      _client = new FlixterClient();
    }
    [HttpGet("GetActorData/{actorId}")]
    public ActorRoot GetActorData(string actorId)
    {
      return _client.GetActorData(actorId);
    }
    [HttpGet("GetSearchQuery/{query}")]
    public SearchRoot GetSearchQuery(string query)
    {
      return _client.GetSearchQuery(query);
    }
  }
}
