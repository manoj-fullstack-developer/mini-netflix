export interface IMoviesListResponse {
    Search: IMovieDetail[]
    totalResults: string
    Response: string
}

export interface IMovieDetail {
    Title: string
    Year: string
    imdbID: string
    Type: string
    Poster: string
}
