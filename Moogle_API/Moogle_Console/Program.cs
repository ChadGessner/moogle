
using Newtonsoft.Json;
using Moogle_Flixter_Domain;

var client = new FlixterClient();
//Console.WriteLine(JsonConvert.SerializeObject(client.MakeMovieReviewsRequest("cbad9abb-8440-31a6-8caf-61ae45c2263b")));

// Console.WriteLine(JsonConvert.SerializeObject(client.MakePopularMoviesRequest()));


Console.WriteLine(client.MakePopularMoviesRequest());

var test = (client.MakePopularMoviesRequest());
var test1 = (JsonConvert.SerializeObject(client.MakePopularMoviesRequest()));

foreach(var test2 in test1)
{
Console.WriteLine(test2);
}
// var test = (JsonConvert.SerializeObject(client.MakePopularMoviesRequest()));
// )
// var test = (JsonConvert.SerializeObject(client.MakePopularMoviesRequest()));

// Console.WriteLine(test);

