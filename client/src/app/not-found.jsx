import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <div>Page not found</div>
            <Link href={'/'}>Go back</Link>
        </div>
  )
}
