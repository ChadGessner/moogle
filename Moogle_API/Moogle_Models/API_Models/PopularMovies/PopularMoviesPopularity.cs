using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.PopularMovies
{
    public class PopularMoviesPopularity
    {
        public string emsId { get; set; }
        public string emsVersionId { get; set; }
        public string name { get; set; }
        public int sortEms { get; set; }
        public int sortPopularity { get; set; }
        public PopularMoviesPosterImage posterImage { get; set; }
        public PopularMoviesTomatoRating tomatoRating { get; set; }
        public PopularMoviesUserRating userRating { get; set; }
    }
}