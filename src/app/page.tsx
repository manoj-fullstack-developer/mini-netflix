'use client'
import Loader from '../components/loader'
import MovieCard from '../components/home/movieCard'
import styles from '../components/home/movieCard/index.module.scss'
import Container from '../components/container'
import Link from 'next/link'
import useMovies from '../hooks/useMovies'
import { Col, Row } from 'antd'

export default function Home() {
    const { moviesList, loader, error } = useMovies()

    if (loader) {
        return <Loader />
    }

    if (error) {
        return <p>Unable to fetch details because of an unknown error.</p>
    }

    if (!moviesList) {
        return <p className={styles.noData}>No movie list found</p>
    }

    return (
        <Container>
            <h1 className="mt-2">Action Movies</h1>
            <div className={styles.movieList}>
                <Row gutter={20}>
                    {moviesList.Search.map((data, i) => (
                        <Col
                            className="mt-3"
                            xs={24}
                            sm={12}
                            lg={8}
                            xl={6}
                            key={data.imdbID}
                        >
                            <Link href={`/movie/details/${data.imdbID}`}>
                                <MovieCard
                                    Poster={data.Poster}
                                    Title={data.Title}
                                    Year={data.Year}
                                />
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    )
}
