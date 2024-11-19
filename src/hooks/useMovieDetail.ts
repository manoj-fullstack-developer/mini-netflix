import { useState, useEffect } from 'react'
import { IMoviedetailResponse } from '../interfaces/movieDetail.response'

const useMovieDetail = (imdbID: string) => {
    const [movieDetail, setMovieDetail] = useState<IMoviedetailResponse | null>(
        null
    )
    const [loader, setLoader] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchMovieDetail = async () => {
            setLoader(true)
            setError(null) // Reset the error before making a new request
            try {
                const res = await fetch(
                    `https://www.omdbapi.com/?i=${imdbID}&apikey=${process.env.NEXT_PUBLIC_OMDB_API_KEY}`
                )
                const data = await res.json()
                if (data?.Error) {
                    setError(data.Error)
                } else {
                    console.log(data, 'data')
                    setMovieDetail(data)
                }
            } catch (error) {
                setError('Error fetching movie details')
            }
            setLoader(false)
        }

        if (imdbID) {
            fetchMovieDetail()
        }
    }, [imdbID])

    return { movieDetail, loader, error }
}

export default useMovieDetail
