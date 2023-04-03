using System.Text.Json.Serialization;
using Microsoft.Extensions.FileProviders;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// builder.Services.AddControllers().AddJsonOptions(x =>
//                 x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);
builder.Services.AddControllers();
// builder.Services.AddControllers().AddJsonOptions(x =>
//                 x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles); //This suppresses json cycle errors
builder.Services
  .AddCors(options => options
  .AddDefaultPolicy(policy => policy
  .AllowAnyOrigin()
  .AllowAnyHeader()
  .AllowAnyMethod()));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
  app.UseSwagger();
  app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

var fileProvider = new PhysicalFileProvider(
    Path.Combine(Directory.GetCurrentDirectory(), @"wwwroot\Images"));
var requestPath = "/Images";

app.UseStaticFiles(new StaticFileOptions()
{
     FileProvider = fileProvider,
    RequestPath = requestPath
});
app.UseDirectoryBrowser(new DirectoryBrowserOptions
{
  FileProvider = fileProvider,
  RequestPath = requestPath
});
app.UseAuthorization();
app.UseCors();

app.MapControllers();

app.Run();
