export interface UpcomingMovieDetails {
  data: {
    upcoming: [
      {
        emsId:string,
        emsVersionId:string,
        name: string,
        releaseDate: string,
        posterImage: {
          url: string,
          type: string,
          width: string,
          height: string,
          tomatoRating: string
        },
        userRating: {
          dtlLikedScore: string,
          ratingCount: string,
          dtlWtsCount: 0,
          dtlWtsScore: string,
          dtlScoreCount: string,
          iconImage: {
            url: string
          }
        }
      }
    ]
  }
}