export interface IFavoriteMovieDetails {
    emsId: string,
    name: string,
    posterImageUrl: string,
    movieCast: IMovieCast[],
    synopsis: string,
    directedBy: string,
    releaseDate: string,
    totalGross: number, //shows up as an object?
    trailerUrl: string,
    images: IMovieImage[],
}

export interface IMovieCast {
    role: string,
    name: string,
    characterName: string,
    [propName: string]: any;
}

export interface IMovieImage {
    url: string,
    // type: object,
    height: number,
    width: number
    [propName: string]: any;
}