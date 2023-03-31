using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Moogle_Models.API_Models.AngularModels;
using Moogle_Models.Db_Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;
namespace Moogle_Repo
{
  public class MoogleRepository
  {
    private ApplicationDbContext _db = new ApplicationDbContext();
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
        if (_db.Users.Any(u => u.UserName == user.UserName))
        {
          return null;
        }
        TheaterZip zip = await _db.TheaterZips.FirstOrDefaultAsync(x => x.ZipCode == user.ZipCode);
        if (zip != null)
        {
          _db.Users.Add(user);
          _db.SaveChangesAsync().Wait();
          return await _db.Users.FirstOrDefaultAsync(u => u.UserName == user.UserName);
        }

        _db.Users.Add(user);
        _db.SaveChangesAsync().Wait();
        user = GetUser(user.UserName, user.Password);
        foreach (var theater in theaters)
        {
          if (theater != null)
          {

            Theater theaterToAdd = await _db.Theaters.FirstOrDefaultAsync(x => x.Id == theater.Id);
            zip = new TheaterZip()
            {
              ZipCode = user.ZipCode,
              Theater = theaterToAdd
            };
            if (theaterToAdd != null)
            {
              _db.TheaterZips.Add(zip);
              _db.SaveChangesAsync().Wait();

              continue;
            }
            else
            {
              theaterToAdd = theater;
              _db.Theaters.Add(theater);
              _db.SaveChangesAsync().Wait();
              zip.Theater = theaterToAdd;
              _db.TheaterZips.Add(zip);
              _db.SaveChangesAsync().Wait();
            }
          }
        }
        _db.SaveChanges();
        return await _db.Users.FirstOrDefaultAsync(u => u.UserName == user.UserName);
    }
    public User GetUser(string username, string password)
    {
        var user = _db.Users.FirstOrDefault(u => u.UserName == username && u.Password == password);
        return user;
    }

    // public User UpdateUser(User user)
    // {
    //   using (var db = new ApplicationDbContext())
    //   {
    //     _db.Users.Update(user);
    //     _db.SaveChanges();
    //     return user;
    //   }
    // }
    public async Task<List<Theater>> AddTheatersByZip(string zipCode, List<Theater> theaters)
    {
        foreach (Theater theater in theaters)
        {
          if(theater != null)
          {
            Theater theaterToAdd = _db.Theaters.FirstOrDefaultAsync(t => t.Tid == theater.Tid).Result;
            if (theaterToAdd != null)
            {
              _db.TheaterZips.Add(new TheaterZip()
              {
                ZipCode = zipCode,
                Theater = theaterToAdd
              });
              _db.SaveChangesAsync().Wait();
            }
            else
            {
              _db.TheaterZips.Add(new TheaterZip()
              {
                ZipCode = zipCode,
                Theater = theater
              });
              _db.SaveChangesAsync().Wait();
            }
          }
          
        }
        return GetTheatersByUserZip(zipCode).Result;
    }
    public async Task<List<Theater>> GetTheatersByUserZip(string zipCode)
    {
        return await _db.TheaterZips.Where(x => x.ZipCode == zipCode).Select(x => x.Theater).ToListAsync();
    }
    public async Task<User> UpdateUser(User user)
    {
        _db.Users.Update(user);
        _db.SaveChanges();
        return await _db.Users.FirstOrDefaultAsync(u => u.Id == user.Id);
    }
    public bool AddUserZip(User user, string zip)
    {
        bool result = _db.UserZip.Any(x => x.User == user && x.ZipCode == zip);
        Console.WriteLine(result);
        if (!result)
        {
          User userZipAdder = _db.Users.FirstOrDefaultAsync(u=> u.Id == user.Id).Result;
          _db.UserZip.Add(new UserZip { ZipCode = zip, User = userZipAdder });
          _db.SaveChangesAsync().Wait();
        }
        return result;
    }

    public List<string> GetUserZips(User user)
    {
        List<UserZip> userZips = _db.UserZip.Where(z => z.User == user).ToList();
        if(userZips != null && userZips.Count != 0)
        {
          return userZips.Select(z=>z.ZipCode).ToList();
        }
        return new List<string>();
    }
    public async Task<FavoriteMovie> AddFavoriteMovie(FavoriteMovie favoriteMovie, int userId )
    {
       User testUser = _db.Users.FirstOrDefault(x => x.Id == userId);
       favoriteMovie.User = testUser;
        _db.FavoriteMovie.Add(favoriteMovie);
        _db.SaveChanges();
        return await _db.FavoriteMovie.FirstOrDefaultAsync(x => x.User == testUser);
    }
  }
}


      // using (var db = new ApplicationDbContext())
      // {
      //   bool result = _db.UserZip.Any(x => x.User == user && x.ZipCode == zip);
      //   Console.WriteLine(result);
      //   if (!result)
      //   {
      //     User userZipAdder = _db.Users.FirstOrDefaultAsync(u=> u.Id == user.Id).Result;
      //     _db.UserZip.Add(new UserZip { ZipCode = zip, User = userZipAdder });
      //     _db.SaveChangesAsync().Wait();
      //   }
      //   return result;
      // }