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
using Moogle_Models.DTO;
using static Moogle_Models.DTO.FavoriteMovieDto;

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


        public List<FavoriteMovieCastModelDto> GetFavoriteMovieCast(int favoriteMovieId)
        {
          List<FavoriteMovieCastModelDto> newFavoriteCastDtoList = new List<FavoriteMovieCastModelDto>();

          List <FavoriteMovieCast> favoriteMovieCastList = _db.FavoriteMovieCasts.Where(x => x.FavoriteMovie.Id == favoriteMovieId).ToList();

          foreach(FavoriteMovieCast cast in favoriteMovieCastList)
          {
            FavoriteMovieCastModelDto newFavoriteCastDto = new FavoriteMovieCastModelDto(){
              Name = cast.Name,
              CharacterName = cast.CharacterName,
              Role = cast.Role
            };
            newFavoriteCastDtoList.Add(newFavoriteCastDto);
        // User user = _db.Users.FirstOrDefault(x => x.Id == userId);

        // List<FavoriteMovie> favoriteMovieList = _db.FavoriteMovie.Where(x => x.User.Id == userId).ToList();
        // List<FavoriteMovie> favoriteMovieList = _db.FavoriteMovie.Select(x => x.User.Id == userId).ToList();

        }
                return newFavoriteCastDtoList;

        }
        public List<FavoriteMovieImageModelDto> GetFavoriteMovieImages(int favoriteMovieId)
        {
          List<FavoriteMovieImageModelDto> newFavoriteImageDtoList = new List<FavoriteMovieImageModelDto>();

          List <FavoriteMovieImage> favoriteMovieImageList = _db.FavoriteMovieImages.Where(x => x.FavoriteMovie.Id == favoriteMovieId).ToList();
          foreach(FavoriteMovieImage image in favoriteMovieImageList)
          {
            FavoriteMovieImageModelDto newFavoriteImageDto = new FavoriteMovieImageModelDto(){
              Url = image.Url,
              Height = image.Height,
              Width = image.Width
            };
            newFavoriteImageDtoList.Add(newFavoriteImageDto);




          }
        // User user = _db.Users.FirstOrDefault(x => x.Id == userId);

        // List<FavoriteMovie> favoriteMovieList = _db.FavoriteMovie.Where(x => x.User.Id == userId).ToList();
        // List<FavoriteMovie> favoriteMovieList = _db.FavoriteMovie.Select(x => x.User.Id == userId).ToList();


        return newFavoriteImageDtoList;
        }
        public List<FavoriteMovieModelDto> GetAllFavoriteMovies(int userId)
    {
        List<FavoriteMovieModelDto> favoriteMovieList = new List<FavoriteMovieModelDto>();
        List<FavoriteMovie> favoriteMovies = _db.FavoriteMovie.Where(x => x.User.Id == userId).ToList();
        // List<FavoriteMovie> test = favoriteMovies.
        
        foreach(FavoriteMovie movie in favoriteMovies)
        {
          User user = _db.Users.FirstOrDefault(x => x.Id == userId);
          List<FavoriteMovieCastModelDto> movieCast = GetFavoriteMovieCast(movie.Id);
          List<FavoriteMovieImageModelDto> images = GetFavoriteMovieImages(movie.Id);
          FavoriteMovieModelDto favoriteMovie = new FavoriteMovieModelDto()
          {
            EmsId = movie.EmsId,
            User = user,
            Name = movie.Name,
            PosterImageUrl = movie.PosterImageUrl,
            MovieCast = movieCast,
            Synopsis = movie.Synopsis,
            DirectedBy = movie.DirectedBy,
            ReleaseDate = movie.ReleaseDate,
            TotalGross = movie.TotalGross,
            TrailerUrl = movie.TrailerUrl,
            Images = images
          };

          // movie.Images = Images;
          // movie.MovieCast = MovieCast;

          favoriteMovieList.Add(favoriteMovie);




        }

        // User user = _db.Users.FirstOrDefault(x => x.Id == userId);
        // List<FavoriteMovieCast> MovieCast = _db.Users.FirstOrDefault(x => x.Id == userId);
      //  favoriteMovie.User = user;
        // _db.FavoriteMovie.Add(favoriteMovie);
        // _db.SaveChanges();

        // List<FavoriteMovie> favoriteMovieList = _db.FavoriteMovie.Where(x => x.User.Id == userId).ToList();
        // List<FavoriteMovie> favoriteMovieList = _db.FavoriteMovie.Select(x => x.User.Id == userId).ToList();


        return favoriteMovieList;
    }
    public async Task<FavoriteMovieModelDto> AddFavoriteMovie(FavoriteMovie favoriteMovie, int userId )
    {
       User user = _db.Users.FirstOrDefault(x => x.Id == userId);
       favoriteMovie.User = user;
        _db.FavoriteMovie.Add(favoriteMovie);
        _db.SaveChanges();

        FavoriteMovie favoriteMovieDb = _db.FavoriteMovie.FirstOrDefaultAsync(x => x.Id == favoriteMovie.Id).Result;

        FavoriteMovieModelDto returnFavoriteMovie = new FavoriteMovieModelDto(){
          Name = favoriteMovieDb.Name

        };

        return returnFavoriteMovie;
    }

    public async Task<FavoriteMovieModelDto> RemoveFavoriteMovie(FavoriteMovie favoriteMovie, int userId )
    {
       FavoriteMovie favoriteMovieToRemove = _db.FavoriteMovie.FirstOrDefault(x => x.User.Id == userId && x.EmsId == favoriteMovie.EmsId);
        _db.FavoriteMovie.Remove(favoriteMovieToRemove);
        _db.SaveChanges();

        FavoriteMovie favoriteMovieDb = _db.FavoriteMovie.FirstOrDefaultAsync(x => x.Id == favoriteMovie.Id).Result;

        FavoriteMovieModelDto returnFavoriteMovie = new FavoriteMovieModelDto(){
          Name = favoriteMovieDb.Name

        };

        return returnFavoriteMovie;
    }
    public async Task<FavoriteMovieModelDto> RemoveFavoriteMovie(int userId, string favoriteMovieEmsId )
    {
       FavoriteMovie favoriteMovieToRemove = _db.FavoriteMovie.FirstOrDefault(x => x.User.Id == userId && x.EmsId == favoriteMovieEmsId);
        _db.FavoriteMovie.Remove(favoriteMovieToRemove);
        _db.SaveChanges();

        FavoriteMovieModelDto favoriteMovieToReturn = new FavoriteMovieModelDto(){
          Name = favoriteMovieToRemove.Name

        };
        return favoriteMovieToReturn;
    }
    public bool CheckIfFavorited(int userId, string favoriteMovieEmsId)
    {
       FavoriteMovie favoriteMovieToCheck = _db.FavoriteMovie.FirstOrDefault(x => x.User.Id == userId && x.EmsId == favoriteMovieEmsId);

      return favoriteMovieToCheck != null;
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
