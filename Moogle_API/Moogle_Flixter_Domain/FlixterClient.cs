
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Newtonsoft.Json;
using Flurl.Http;
using System.Security.Cryptography.X509Certificates;
using Moogle_Models.API_Models.TheaterRequest;
using Moogle_Models.API_Models.TheaterDetails;
using Moogle_Models.API_Models.MovieDetails;
using Moogle_Models.API_Models.Reviews;

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
            public TheaterRequest MakeTheaterRequest(string zipCode)
            {
              string apiUri = BaseUri + $"theaters/list?zipCode={zipCode}&radius=50";

              var header = apiUri
                .WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944" )
                .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

              var apiTask = header.GetJsonAsync<TheaterRequest>();
              apiTask.Wait();
              TheaterRequest result = apiTask.Result;
              return result;
      
            }
            public TheaterDetailData MakeTheaterDetailRequest(string theaterId)
            {
                string apiUri = BaseUri + $"theaters/detail?id={theaterId}";
                var header = apiUri
                    .WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
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
                .WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
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
                .WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944")
                .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

            var apiTask = header.GetJsonAsync<ReviewsRoot>();
            apiTask.Wait();
            ReviewsRoot result = apiTask.Result;
            //Console.WriteLine(result.ToString());
            return result;
        }
    }
}
