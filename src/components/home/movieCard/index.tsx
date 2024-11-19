import React from 'react'
import Image from 'next/image'
import styles from './index.module.scss'
import { Card } from 'antd'

type MovieCardProps = {
    Title: string
    Year: string
    Poster: string
}

const MovieCard: React.FC<MovieCardProps> = ({ Title, Poster, Year }) => {
    return (
        <Card hoverable>
            <Image
                src={Poster}
                alt={Title}
                width={2000}
                height={1000}
                className={styles['movie-card__image']}
            />
            <div className={styles['movie-card__info']}>
                <h3 className={styles['movie-card__title']}>{Title}</h3>
                <p className={styles['movie-card__year']}>{Year}</p>
            </div>
        </Card>
    )
}

export default MovieCard
