import React from 'react'
import styles from './page.module.css'
import MainContainer from '../components/MainContainer/MainContainer'

export default function homeWork() {
  return (
    <div className={styles.wrapper}>
      <MainContainer>
        <div className={styles.homeContentContainer}>
          <div className={styles.homeContent}>
            <div className={styles.homeTitle}>Домашнє завдання</div>
            <form action="" className={styles.formContainer}>
              <div className="">
                <div className="">
                  <textarea name="" id=""className={styles.input} placeholder='Дз:..'></textarea>
                  {/* <input type="file" name="" id="" className={styles.input}/> */}
                </div>
                <div className={styles.submitContainer}>
                  <button type="submit" className={styles.submit}>Надіслати завдання</button>
                  <button type="reset"  className={styles.submit}>Видалити завдання</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </MainContainer>
    </div>
  )
}
