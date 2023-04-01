using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class MovieDetailsTomatoRating
  {
    public int? tomatometer { get; set; }
    public int? ratingCount { get; set; }
    public string? consensus { get; set; }
    public MovieDetailsIconImage? iconImage { get; set; }
    public LargeIconImage? largeIconImage { get; set; }
    public static MovieDetailsTomatoRating ValidateMovieDetailsTomatoRating(MovieDetailsTomatoRating? rating)
    {
      if(rating == null)
      {
        return new MovieDetailsTomatoRating()
        {
          tomatometer = -1,
          ratingCount = -1,
          consensus = "N/A",
          iconImage = MovieDetailsIconImage.ValidateMovieDetailsIconImage(null),
          largeIconImage = LargeIconImage.ValidateLargeIconImage(null)
        };
      }
      rating.tomatometer = rating.tomatometer == null ? -1 : rating.tomatometer;
      rating.ratingCount = rating.ratingCount == null ? -1 : rating.ratingCount;
      rating.consensus = rating.consensus == null ? "<i class=\"bi bi-bandaid\"></i>" : rating.consensus;
      rating.iconImage = MovieDetailsIconImage.ValidateMovieDetailsIconImage(rating.iconImage);
      rating.largeIconImage = LargeIconImage.ValidateLargeIconImage(rating.largeIconImage);
      return rating;
    }
  }
}
