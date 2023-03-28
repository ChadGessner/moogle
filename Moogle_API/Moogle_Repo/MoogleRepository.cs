using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Moogle_Models.Db_Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Repo
{
  public class MoogleRepository
  {
    private IConfigurationRoot _configuration;
    private DbContextOptionsBuilder<ApplicationDbContext> _optionsBuilder;
    public MoogleRepository()
    {
      BuildOptions();
    }
    private void BuildOptions()
    {
      _configuration = ConfigurationBuilderSingleton.ConfigurationRoot;
      _optionsBuilder = new DbContextOptionsBuilder<ApplicationDbContext>();
      _optionsBuilder.UseSqlServer(_configuration.GetConnectionString("StringyConnections"));
    }

        public async Task<User> AddUser(User user, List<Theater> theaters)
        {
            using (var db = new ApplicationDbContext())
            {
                if(db.Users.Any(u=> u.UserName == user.UserName))
                {
                    return null;
                }
                TheaterZip zip = await db.TheaterZips.FirstOrDefaultAsync(x=>x.ZipCode ==  user.ZipCode);
                if(zip != null)
                {
                    db.Users.Add(user);
                    db.SaveChangesAsync().Wait();
                    return await db.Users.FirstOrDefaultAsync(u => u.UserName == user.UserName);
                    
                }
                
                db.Users.Add(user);
                db.SaveChangesAsync().Wait();
                user = GetUser(user.UserName, user.Password);
                foreach (var theater in theaters)
                {
                    if(theater != null)
                    {
                        
                        Theater theaterToAdd = await db.Theaters.FirstOrDefaultAsync(x => x.Id == theater.Id);
                        zip = new TheaterZip()
                        {
                            ZipCode = user.ZipCode,
                            Theater = theaterToAdd
                        };
                        if (theaterToAdd != null)
                        {
                            db.TheaterZips.Add(zip); 
                            db.SaveChangesAsync().Wait();

                            continue;
                        }
                        else
                        {
                            theaterToAdd = theater;
                            db.Theaters.Add(theater);
                            db.SaveChangesAsync().Wait();
                            zip.Theater = theaterToAdd;
                            db.TheaterZips.Add(zip);
                            db.SaveChangesAsync().Wait();
                        }
                    }
                }
                db.SaveChanges();
                return await db.Users.FirstOrDefaultAsync(u => u.UserName == user.UserName);
            }
        }
        public User GetUser(string username, string password)
        {
            using (var db = new ApplicationDbContext())
            {
                var user = db.Users.FirstOrDefault(u=> u.UserName == username && u.Password == password);
                return user;
            }
        }

        public User UpdateUser(User user)
        {
          using (var db = new ApplicationDbContext())
          {
            db.Users.Update(user);
            db.SaveChanges();
            return user;
          }
        }

    public async Task<List<Theater>> GetTheatersByUserZip(string zipCode)
        {
            using (var db = new ApplicationDbContext())
            {
                return await db.TheaterZips.Where(x=> x.ZipCode == zipCode).Select(x=> x.Theater).ToListAsync();
            }
        }
    }
}
