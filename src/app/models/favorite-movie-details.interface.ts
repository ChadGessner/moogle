export interface IFavoriteMovieDetails {
    emsId: string,
    emsVersionId: string,
    userId: string,
    name: string,
    posterImageUrl: string,
    movieCast: IMovieCast[],
    synopsis: string,
    directedBy: string,
    releaseDate: string,
    totalGross: string,
    trailerUrl: string,
    images: string[],
}

export interface IMovieCast {
    role: string,
    name: string,
    characterName: string,
    [propName: string]: any;
}