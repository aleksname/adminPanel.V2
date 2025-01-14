import React from 'react'
import MainContainer from './../components/MainContainer/MainContainer';
import styles from './page.module.css';
import Link from 'next/link';

import UsersTable from '../components/UsersTable/UsersTable';

export default function page() {
  return (
    <div className={styles.wrapper}>
      <MainContainer titles="Домашня сторінка">
        <div className={styles.navigationContainer}>
          <div className={styles.navigationItem}>
            <Link href={'/home/Edit-Users'} className={styles.navLink}>Редагувати профіль</Link>
            <Link href={''} className={styles.navLinkActive}>Користувачі</Link>
          </div>
          <div className={styles.userContainerContent}>
            <div className={styles.conteinerTitle}>Користувачі</div>
            <div className={styles.conteinerSubTitle}></div>
            <div className={styles.userDropDownContainer}>
              <div className={styles.userDropWown}>Група</div>
              <div className={styles.userDropWown}>Ім'я</div>
              <div className={styles.userDropWown}>Статус</div>
            </div>
            <div className={styles.userContainerTitle}>
              <div className={styles.userTitle}>Статус</div>
              <div className={styles.userTitle}>Ім'я</div>
              <div className={styles.userTitle}>Країна</div>
              <div className={styles.userTitle}>Статус</div>
              <div className={styles.userTitle}></div>
           </div>
             <UsersTable/>
          </div>
        </div>
      </MainContainer>
    </div>
  )
}
