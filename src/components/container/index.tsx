import React from 'react'
import styles from './index.module.scss'

const Container = ({ children }: { children: React.ReactNode }) => {
    return <div className={styles.container}>{children}</div>
}

export default Container
