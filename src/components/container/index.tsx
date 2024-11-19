import React from 'react'
import styles from './index.module.scss'

const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={styles.centerContainer}>
            <div className={styles.container}>{children}</div>
        </div>
    )
}

export default Container
