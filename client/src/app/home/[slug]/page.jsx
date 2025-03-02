'use client'
import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './page.module.css';
import Link from 'next/link';

import EditUser_CreateGroup from '@/app/components/EditUser/EditUser_CreateGroup/EditUser_CreateGroup';
import EditUser_UserInfo from '@/app/components/EditUser/EditUser_UserInfo/EditUser_UserInfo';
import EditUser_FindUser from '@/app/components/EditUser/EditUser_FindUser/EditUser_FindUser';
export default function page() {

  return (
    <div className={styles.wrapper}>
      <MainContainer titles="Домашня сторінка">
        <div className={styles.navigationContainer}>
          <div className={styles.navigationItem}>
            <Link href={''} className={styles.navLinkActive}>
              Редагувати профіль
            </Link>
            <Link href={'../home'} className={styles.navLink}>
              Користувачі
            </Link>
          </div>
          <div className={styles.userContainerTitle}>
            <div className={styles.userTitle}>Редагувати профіль</div>
            <div className={styles.userTitleBlock}>
              <EditUser_FindUser/>
              <EditUser_CreateGroup/>
            </div>
            
            <div className={styles.userTitle2}>Інформація користувача</div>
            <EditUser_UserInfo/>
            <div className={styles.createUserContainer}>
              <button type="submit" className={styles.createUser}>Створити користувача</button>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
