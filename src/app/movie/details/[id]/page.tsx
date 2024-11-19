'use client'
import Loader from '@/components/loader'
import useMovieDetail from '@/hooks/useMovieDetail'
import { useParams } from 'next/navigation'
import React from 'react'
import styles from './index.module.scss'
import Container from '@/components/container'
import { Rate } from 'antd'

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
            <div className={styles.movieDetailContainer}>
                <div className={styles.posterContainer}>
                    <img
                        src={movieDetail.Poster}
                        alt={movieDetail.Title}
                        className={styles.moviePoster}
                    />
                </div>
                <div className={styles.detailsContainer}>
                    <h1>
                        {movieDetail.Title} ({movieDetail.Year})
                    </h1>
                    <p>{movieDetail.Plot}</p>
                    <div>
                        <strong>Rating:</strong> {movieDetail.imdbRating} / 10
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default MovieDetail
