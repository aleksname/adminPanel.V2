import React from 'react'
import styles from './MainContainer.module.css'
import Link from 'next/link';
import Head from 'next/head';

export default function MainContainer({children,titles}) {
  return (
    <>
      <div className={styles.containerContent}>
        <Head>
          <meta name="keywords" content={"nextjs,  home page" }></meta>
          <title>{titles}</title>
          <link rel="icon" href="/public/favicon.png" type="image/x-icon" />
          <meta name="verify-admitad" content="3c5d52c3ef" />
        </Head>
        <div className={styles.container}>
          <div className={styles.title}>
            <Link href={'/'} className={styles.titleLink}>ReflexEd</Link>
          </div>
          <nav>
            <ul className={styles.navList}>
              <li>
                <Link href="/home" className={styles.navItem}>
                  Домашня сторінка
                </Link>
              </li>
            
              <li>
                <Link href="/students-rating" className={styles.navItem}>
                  Рейтинг студента на уроці
                </Link>
              </li>

              <li>
                <Link href="/we-work-in-class" className={styles.navItem}>
                  Працюємо на уроці
                </Link>
              </li>

               <li>
                <Link href="/home-work" className={styles.navItem}>
                  Надіслати домашнє
                </Link>
              </li>
            </ul>  
          </nav>
        </div>
        <main>{ children}</main>
      </div>
    </>
  )
}
