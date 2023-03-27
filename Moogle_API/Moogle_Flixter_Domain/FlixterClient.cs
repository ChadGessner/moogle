
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Newtonsoft.Json;
using Flurl.Http;
using Moogle_Models.API_Models.TheaterDetails;
using Moogle_Models.API_Models.MovieDetails;
using Moogle_Models.API_Models.Reviews;
using Moogle_Models.API_Models.News;
using Moogle_Models.API_Models.UpcomingMovies;
using Moogle_Models.API_Models.Actor;
using Moogle_Models.API_Models.Search;
using Moogle_Models.API_Models.PopularMovies;

namespace Moogle_Flixter_Domain
{
  public class FlixterClient
  {
    public HttpClient Client { get; set; }

    public string BaseUri { get; set; } = "https://flixster.p.rapidapi.com/";
    public string TestUri { get; set; } = @"C:\Users\Chad\Desktop\GC_Angular\moogle-app\Moogle_API\Moogle_Flixter_Domain\ModelsTest.json";
    public string Headers { get; set; }
    public FlixterClient()
    {
      Client = new HttpClient();

    }
    public async Task<TheaterRequest> MakeTheaterRequest(string zipCode)
    {
      string apiUri = BaseUri + $"theaters/list?zipCode={zipCode}&radius=50";

      var header = apiUri
        .WithHeader("X-RapidAPI-Key", "a5eb94d850msh3000c463db4a25dp1f3109jsn756a961153bc")
        //.WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
        .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<TheaterRequest>();


      return await apiTask.WaitAsync(new TimeSpan(0, 0, 10));

    }
    public TheaterDetailData MakeTheaterDetailRequest(string theaterId)
    {
      string apiUri = BaseUri + $"theaters/detail?id={theaterId}";
      var header = apiUri
        .WithHeader("X-RapidAPI-Key", "a5eb94d850msh3000c463db4a25dp1f3109jsn756a961153bc")
          //.WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
          .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<TheaterDetailData>();
      apiTask.Wait();
      TheaterDetailData result = apiTask.Result;
      Console.WriteLine(result.ToString());
      return result;
    }
    public MovieDetailsRoot MakeMovieDetailsRequest(string emsVersionId)
    {
      //"https://flixster.p.rapidapi.com/movies/=c64b44ca-b562-3a45-bb6a-1f5e81f92968"
      string apiUri = BaseUri + $"movies/detail?emsVersionId={emsVersionId}";
      var header = apiUri
        .WithHeader("X-RapidAPI-Key", "a5eb94d850msh3000c463db4a25dp1f3109jsn756a961153bc")
          //.WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
          .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<MovieDetailsRoot>();
      apiTask.Wait();
      MovieDetailsRoot result = apiTask.Result;
      //Console.WriteLine(result.ToString());
      return result;
    }
    //ReviewsRoot
    public ReviewsRoot MakeMovieReviewsRequest(string emsId)
    {
      //"https://flixster.p.rapidapi.com/reviews/list?emsId=cbad9abb-8440-31a6-8caf-61ae45c2263b&limit=20&offset=0&withComments=true"
      string apiUri = BaseUri + $"reviews/list?emsId={emsId}&limit=20&offset=0&withComments=true";
      var header = apiUri
        .WithHeader("X-RapidAPI-Key", "a5eb94d850msh3000c463db4a25dp1f3109jsn756a961153bc")
          //.WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
          .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<ReviewsRoot>();
      apiTask.Wait();
      ReviewsRoot result = apiTask.Result;
      //Console.WriteLine(result.ToString());
      return result;
    }
    public UpcomingMovies MakeUpcomingMovieRequest()
    {
      string apiUri = BaseUri + $"movies/get-upcoming?countryId=usa&limit=100";
      var header = apiUri
        .WithHeader("X-RapidAPI-Key", "a5eb94d850msh3000c463db4a25dp1f3109jsn756a961153bc")
        //.WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
        .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<UpcomingMovies>();
      apiTask.Wait();
      UpcomingMovies result = apiTask.Result;
      Console.WriteLine(result.ToString());
      return result;
    }
    public NewsRoot MakeMovieNewsRequest()
    {
      //"https://flixster.p.rapidapi.com/news/list"
      string apiUri = BaseUri + "news/list";
      var header = apiUri
          .WithHeader("X-RapidAPI-Key", "f126303238mshb0ca04fe3d5056ep12846bjsncbdcff9eea5d")
        .WithHeader("X-RapidAPI-Key", "a5eb94d850msh3000c463db4a25dp1f3109jsn756a961153bc")
        //.WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
          //.WithHeader("X-RapidAPI-Key", "52b17fc647msh1f76838d7d2fa42p1bdf0cjsnd8db47c39b4b")
          .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<NewsRoot>();
      apiTask.Wait();
      NewsRoot result = apiTask.Result;
      Console.WriteLine(result.ToString());
      return result;
    }
    public ActorRoot GetActorData(string actorId)
    {
      string apiUri = BaseUri + $"actors/detail?id={actorId}";
      var header = apiUri
        .WithHeader("X-RapidAPI-Key", "a5eb94d850msh3000c463db4a25dp1f3109jsn756a961153bc")
          //.WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
          .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<ActorRoot>();
      apiTask.Wait();

      ActorRoot result = apiTask.Result;
      return result;
    }
    public SearchRoot GetSearchQuery(string query, string userZip)
    {
      string apiUri = BaseUri + $"search?query={query}&zipCode={userZip}&radius=50";
      var header = apiUri
        .WithHeader("X-RapidAPI-Key", "a5eb94d850msh3000c463db4a25dp1f3109jsn756a961153bc")
         // .WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
          .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<SearchRoot>();
      apiTask.Wait();

      SearchRoot result = apiTask.Result;
      return result;
    }

    public PopularMoviesRoot MakePopularMoviesRequest()
    {
      //"https://flixster.p.rapidapi.com/news/list"
      string apiUri = BaseUri + "movies/get-popularity";
      var header = apiUri
          .WithHeader("X-RapidAPI-Key", "f126303238mshb0ca04fe3d5056ep12846bjsncbdcff9eea5d")
          .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<PopularMoviesRoot>();
      apiTask.Wait();
      PopularMoviesRoot result = apiTask.Result;
      //Console.WriteLine(result.ToString());
      return result;
    }
  }
}
