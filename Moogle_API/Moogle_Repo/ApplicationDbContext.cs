using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Moogle_Models.Db_Models;

namespace Moogle_Repo
{
  public class ApplicationDbContext : DbContext
  {
        private static IConfigurationRoot _configuration;

        public DbSet<User> Users { get; set; }
        public DbSet<Theater> Theaters { get; set; }
        public DbSet<TheaterZip> TheaterZips { get; set; }

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
    //protected override void OnModelCreating(ModelBuilder modelBuilder)
    //{
    //  modelBuilder.Entity<User>()
    //    .OwnsOne(z => z.Zip,
    //    zc =>
    //    {
    //      zc.Property()
    //    });




    //  modelBuilder.Entity<Zip>()
    //    .HasMany(z => z.Users)
    //    .WithOne(u => u.Zip)
    //    .HasPrincipalKey(u => u.ZipCode);
        
        
    //}
  }
}
