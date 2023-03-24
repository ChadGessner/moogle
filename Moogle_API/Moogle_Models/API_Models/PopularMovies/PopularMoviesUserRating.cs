using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.PopularMovies
{
    public class PopularMoviesUserRating
    {
        public int? dtlLikedScore { get; set; }
        public object dtlWtsScore { get; set; }
        public PopularMoviesIconImage iconImage { get; set; }
        public int dtlWtsCount { get; set; }
        public int? dtlScoreCount { get; set; }
    }
}