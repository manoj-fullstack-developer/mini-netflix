'use client'
import Loader from '@/components/loader'
import useMovieDetail from '@/hooks/useMovieDetail'
import { useParams } from 'next/navigation'
import React from 'react'
import styles from './index.module.scss'
import Container from '@/components/container'
import Image from 'next/image'

const MovieDetail = () => {
    const { id }: { id: string } = useParams()
    const { error, loader, movieDetail } = useMovieDetail(id)

    if (loader) {
        return <Loader />
    }

    if (error) {
        return <div className={styles.error}>{error}</div>
    }

    if (!movieDetail) {
        return <div className={styles.noData}>No movie details found</div>
    }

    return (
        <Container>
            <div className={styles.centered}>
            <div className={styles.movieDetailContainer}>
                <div className={styles.posterContainer}>
                    <Image
                    width={300}
                    height={400}
                        src={movieDetail.Poster}
                        alt={movieDetail.Title}
                        className={styles.moviePoster}
                    />
                </div>
                <div className={styles.detailsContainer}>
                <div className={styles.detailsContainer}>
                    <h1 >
                        {movieDetail.Title} ({movieDetail.Year})
                    </h1>
                    <p  className={`mt-1 ${styles.description}`}>{movieDetail.Plot}</p>
                    <div className='mt-1'>
                        <strong>Rating:</strong> {movieDetail.imdbRating} / 10
                    </div>
                </div>
                </div>
            </div>
            </div>
          
        </Container>
    )
}

export default MovieDetail
