using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Moogle_Models.API_Models.PopularMovies
{
    public class PopularMoviesData
    {
        public List<PopularMoviesPopularity> popularity { get; set; }
        public List<PopularMoviesOpening> opening { get; set; }
    }
}