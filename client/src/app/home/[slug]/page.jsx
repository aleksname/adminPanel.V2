"use client"

import React from 'react'
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './page.module.css';
import Link from 'next/link';

export default function page() {
  return (
    <div className={styles.wrapper}>
      <MainContainer titles="Домашня сторінка">
        <div className={styles.navigationContainer}>
          <div className={styles.navigationItem}>

            
          </div>
        </div>
      </MainContainer>
    </div>
  )
}

