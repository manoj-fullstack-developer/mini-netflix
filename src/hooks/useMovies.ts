import { useState, useEffect } from 'react'
import { IMoviesListResponse } from '../interfaces/moviesList.response'

const useMovies = () => {
    const [moviesList, setMoviesList] = useState<IMoviesListResponse | null>(
        null
    )
    const [loader, setLoader] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchMovies = async () => {
            setLoader(true)
            setError(null)
            try {
                const res = await fetch(
                    `https://www.omdbapi.com/?s=action&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
                )
                const data = await res.json()
                if (data?.Error) {
                    setError(data.Error)
                } else {
                    setMoviesList(data)
                }
            } catch (error) {
                setError('Error fetching movies')
            }
            setLoader(false)
        }

        fetchMovies()
    }, [])

    return { moviesList, loader, error }
}

export default useMovies
