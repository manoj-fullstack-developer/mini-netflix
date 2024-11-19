import React from 'react'
import styles from './index.module.scss'
import Container from '../container'
import Link from 'next/link'

const Header = () => {
    return (
        <div className={styles.header}>
            <Container>
                <Link href={'/'}>
                    <p className={styles['text-white']}>Mini Netflix</p>
                </Link>
            </Container>
        </div>
    )
}

export default Header
