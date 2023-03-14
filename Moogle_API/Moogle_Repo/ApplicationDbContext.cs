using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Moogle_Repo
{
  public class ApplicationDbContext : DbContext
  {
    private static IConfigurationRoot _configuration;


    public ApplicationDbContext()
    {

    }
    public ApplicationDbContext(DbContextOptions options) : base(options)
    {

    }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      if (!optionsBuilder.IsConfigured)
      {
        var builder = new ConfigurationBuilder()
            .SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

        _configuration = builder.Build();
        string cnstr = _configuration.GetConnectionString("StringyConnections");
        optionsBuilder.UseSqlServer(cnstr);
      }
    }
  }
}
