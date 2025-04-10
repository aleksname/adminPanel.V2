"use client"

import React, { useState } from 'react'
import styles from './page.module.css'
import MainContainer from './../components/MainContainer/MainContainer';

export default function WeWorkInClass() {
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/linkKahoot', {
        method: 'PUT', // put == update, провтик
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: link }),
      });
      const data = await response.json();
      alert(data.message);
      console.log(data);
    } catch (error) {
      alert("Помилка при надсиланні посилання");
    }
  };

  const handleReset = () => {
    setLink("");
  };

  return (
    <div className={styles.wrapper}>
      <MainContainer>
        <div className={styles.workInClassContainer}>
          <div className={styles.workInClassTitle}>Посилання на кахут</div>
          <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className={styles.inputContainer}>
              <input 
                type="text" 
                className={styles.input} 
                placeholder='Посилання на кахут ✏️' 
                value={link} 
                onChange={(e) => setLink(e.target.value)}
              />
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
