using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class MovieDetailsMovie
  {
    public string? emsId { get; set; }
    public string? fandangoId { get; set; }
    public string? rtMovieId { get; set; }
    public string? name { get; set; }
    public int? durationMinutes { get; set; }
    public string? synopsis { get; set; }
    public string? directedBy { get; set; }
    public string? releaseDate { get; set; }
    public string? showReleaseDate { get; set; }
    public object? dvdReleaseDate { get; set; }
    public string availabilityWindow { get; set; }
    public string ovdReleaseDate { get; set; }
    public int? totalGross { get; set; }
    public Trailer? trailer { get; set; }
    public MovieDetailsPosterImage? posterImage { get; set; }
    public BackgroundImage? backgroundImage { get; set; }
    public MovieDetailsUserRating? userRating { get; set; }
    public MovieDetailsTomatoRating? tomatoRating { get; set; }
    public List<Genre> genres { get; set; }
    public List<Image> images { get; set; }
    public List<Cast> cast { get; set; }
    public List<Crew> crew { get; set; }
    public MovieDetailsMotionPictureRating motionPictureRating { get; set; }
    public List<Ovd> ovds { get; set; }
    public object? criticReviews { get; set; }
    public AudienceReviews audienceReviews { get; set; }
    public ShowtimeGroupings showtimeGroupings { get; set; }

    public static MovieDetailsMovie ValidateMovieDetailsMovie(MovieDetailsMovie movie)
    {
      // placeholder for trailer maybe
      //https://www.youtube.com/watch?v=wupToqz1e2g
      if (movie.name == null || movie.name.Length == 0)
      {
        return null;
      }
      movie.emsId = StringPlaceHolder(movie.emsId);
      movie.rtMovieId = StringPlaceHolder(movie.rtMovieId);
      movie.totalGross = movie.totalGross ?? -1;
      movie.releaseDate = StringPlaceHolder(movie.releaseDate);
      movie.synopsis = StringPlaceHolder(movie.synopsis);
      movie.availabilityWindow = StringPlaceHolder(movie.availabilityWindow);
      movie.directedBy = StringPlaceHolder(movie.directedBy);
      movie.showReleaseDate = StringPlaceHolder(movie.showReleaseDate);
      movie.ovdReleaseDate = StringPlaceHolder(movie.ovdReleaseDate);
      movie.durationMinutes = movie.durationMinutes == null ? -1 : movie.durationMinutes;
      movie.trailer = Trailer.ValidateTrailer(movie.trailer);
      movie.posterImage = MovieDetailsPosterImage.ValidateMovieDetailsPosterImage(movie.posterImage);
      movie.backgroundImage = BackgroundImage.ValidateBackgroundImage(movie.backgroundImage);
      movie.tomatoRating = MovieDetailsTomatoRating.ValidateMovieDetailsTomatoRating(movie.tomatoRating);
      movie.images = Image.ValidateImages(movie.images);
      movie.cast = Cast.ValidateCastList(movie.cast);
      
      return movie;
    }
    public static string StringPlaceHolder(string str)
    {
      if(str == null || str.Length == 0)
      {
        return "<i class=\"bi bi-bandaid\"></i>";
      }
      return str;
    }
  }
}
