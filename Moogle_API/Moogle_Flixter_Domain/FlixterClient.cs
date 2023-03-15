
using Moogle_Models.API_Models.Theater.TheaterRequest;
using Newtonsoft.Json;
using Flurl.Http;
using System.Security.Cryptography.X509Certificates;
using Moogle_Models.API_Models.TheaterRequest;

namespace Moogle_Flixter_Domain
{
  public class FlixterClient
  {
    public HttpClient Client { get; set; }
    
    public string BaseUri { get; set; } = "https://flixster.p.rapidapi.com/theaters/list?";
    public string TestUri { get; set; } = @"C:\Users\Chad\Desktop\GC_Angular\moogle-app\Moogle_API\Moogle_Flixter_Domain\ModelsTest.json";
    public string Headers { get; set; }
    public FlixterClient()
    {
        Client = new HttpClient();
      
    }
    public TheaterRequest MakeTheaterRequest(string zipCode)
    {
      string apiUri = BaseUri + $"zipCode={zipCode}&radius=50";
      var header = apiUri
        .WithHeader("X-RapidAPI-Key", "8a1920a098mshfc90a10a8464b5ap1cf15ejsndf3b1770a944" )
        .WithHeader("X-RapidAPI-Host", "flixster.p.rapidapi.com");

      var apiTask = header.GetJsonAsync<TheaterRequest>();
      apiTask.Wait();
      TheaterRequest result = apiTask.Result;
      return result;
      //string json = File.ReadAllText(apiUri);
      //RootTheaterData serial;
      //using( var stream = new StreamReader(json))
      //{

      //  serial = JsonConvert.DeserializeObject<RootTheaterData>(stream.ReadToEndAsync().Result);
      //  stream.Close();
      //}
      //Console.WriteLine(serial);
      //return serial;
    }
  }
}
