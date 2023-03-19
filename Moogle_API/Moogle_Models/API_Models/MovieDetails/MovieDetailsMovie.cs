using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.MovieDetails
{
  public class MovieDetailsMovie
  {
    public string emsId { get; set; }
    public string fandangoId { get; set; }
    public string rtMovieId { get; set; }
    public string name { get; set; }
    public int durationMinutes { get; set; }
    public string synopsis { get; set; }
    public string directedBy { get; set; }
    public string releaseDate { get; set; }
    public string showReleaseDate { get; set; }
    public object dvdReleaseDate { get; set; }
    public string availabilityWindow { get; set; }
    public string ovdReleaseDate { get; set; }
    public string totalGross { get; set; }
    public Trailer trailer { get; set; }
    public MovieDetailsPosterImage posterImage { get; set; }
    public BackgroundImage backgroundImage { get; set; }
    public MovieDetailsUserRating userRating { get; set; }
    public MovieDetailsTomatoRating tomatoRating { get; set; }
    public List<Genre> genres { get; set; }
    public List<Image> images { get; set; }
    public List<Cast> cast { get; set; }
    public List<Crew> crew { get; set; }
    public MovieDetailsMotionPictureRating motionPictureRating { get; set; }
    public List<Ovd> ovds { get; set; }
    public object criticReviews { get; set; }
    public AudienceReviews audienceReviews { get; set; }
    public ShowtimeGroupings showtimeGroupings { get; set; }
  }
}
