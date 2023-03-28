using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.PopularMovies
{
    public class PopularMoviesOpening
    {
        public string emsId { get; set; }
        public string emsVersionId { get; set; }
        public string name { get; set; }
        public object sortEms { get; set; }
        public PopularMoviesPosterImage posterImage { get; set; }
        public PopularMoviesTomatoRating tomatoRating { get; set; }
        public PopularMoviesUserRating userRating { get; set; }
    }
}