import React from 'react'
import styles from './page.module.css'
import MainContainer from './../components/MainContainer/MainContainer';

export default function WeWorkInClass() {
  return (
    <div className={styles.wrapper}>
      <MainContainer>
        <h1>робота в класі</h1>
      </MainContainer>
    </div>
  )
}
