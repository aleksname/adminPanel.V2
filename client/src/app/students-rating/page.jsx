"use client";
import React from 'react';
import styles from './page.module.css';
import MainContainer from './../components/MainContainer/MainContainer';
import { groups } from '../../userList';

export default function WeWorkInClass() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Перетворюємо FormData в об'єкт
    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);

    // fetch('/some-api', { method: form.method, body: formData });
  }

  return (
    <div className={styles.wrapper}>
      <MainContainer>
        <h1 className={styles.title}>Рейтинг учнів 🫅</h1>
        <h1 className={styles.subTitle}>Оцінювання від 0 до 10</h1>

        <form method="POST" onSubmit={handleSubmit}>
          <div className={styles.studendPrifileBlock}>
            {groups.map((el) => (
              <div key={el.id} className={styles.containerStudendPrifile}>
                <div className={styles.studentProfile}>
                  <div className={styles.studentProfileNumber}>{el.id}</div>
                  <div className={styles.studentProfileBIO}>{el.name}</div>
                </div>
                <div className={styles.studentProfileInputScore}>
                  <div className={styles.inputScoreTitle}>Активність</div>
                  {/* Використовуємо унікальне ім'я для кожного поля */}
                  <input 
                    type="number" 
                    name={`user_active_${el.name}`} 
                    defaultValue={0} 
                    className={styles.input} 
                  />
                </div>
                <div className={styles.studentProfileInputScore}>
                  <div className={styles.inputScoreTitle}>Уважність</div>
                  <input 
                    type="number" 
                    name={`user_attentiveness_${el.name}`} 
                    defaultValue={0} 
                    className={styles.input} 
                  />
                </div>
                <div className={styles.studentProfileInputScore}>
                  <div className={styles.inputScoreTitle}>Кахут</div>
                  <input 
                    type="number" 
                    name={`user_kahoot_${el.name}`} 
                    defaultValue={0} 
                    className={styles.input} 
                  />
                </div>
              </div>
            ))}
          </div>

          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitUserData}>
              Відправити
            </button>
            <button type="reset" className={styles.submitUserData}>
              Очистити
            </button>
          </div>
        </form>
      </MainContainer>
    </div>
  );
}
