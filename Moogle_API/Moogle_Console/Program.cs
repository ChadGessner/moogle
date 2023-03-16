
using Newtonsoft.Json;
using Moogle_Flixter_Domain;

var client = new FlixterClient();
Console.WriteLine(JsonConvert.SerializeObject(client.MakeTheaterDetailRequest("ej9fyrfGMTxDuqX")));

