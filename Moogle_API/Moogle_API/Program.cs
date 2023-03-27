using Moogle_Flixter_Domain.Configs;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var moogleConfig = new MoogleConfig();
builder.Configuration.Bind("MoogleApiConfigs", moogleConfig);

builder.Services.AddSingleton<MoogleConfig>(moogleConfig);

builder.Services.AddControllers();
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

app.UseAuthorization();
app.UseCors();

app.MapControllers();

app.Run();
