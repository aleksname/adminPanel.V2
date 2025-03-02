import React from 'react'
import styles from './page.module.css'
import MainContainer from './../components/MainContainer/MainContainer';

export default function WeWorkInClass() {

  return (
    <div className={styles.wrapper}>
      <MainContainer>
        <div className={styles.workInClassContainer}>
          <div className={styles.workInClassTitle}>Посилання на кахут</div>
          <form action="" >
            <div className={styles.inputContainer}>
              <input type="text" className={styles.input} placeholder='Посилання на кахут ✏️' />
            </div>
            <div className={styles.inputContainer}>
                <button type='submit' className={styles.buttonElement}>Надіслати посилання</button>
                <button type="reset" className={styles.buttonElement}>Видалити посилання</button>
              </div>
          </form>
        </div>
      </MainContainer>
    </div>
  )
}
