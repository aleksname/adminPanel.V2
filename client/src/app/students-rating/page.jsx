"use client"
import React, { useState } from 'react';
import styles from './page.module.css';
import MainContainer from './../components/MainContainer/MainContainer';
import { groups } from '../../userList';

export default function WeWorkInClass() {
  const [selectedGroup, setSelectedGroup] = useState('group1'); // Початково обрана група

  return (
    <div className={styles.wrapper}>
      <MainContainer>
        <h1 className={styles.title}>Рейтинг учнів 🫅</h1>
        <h1 className={styles.subTitle}>Оцінювання від 0 до 10</h1>

        {/* Кнопки для вибору групи */}
        <div className={styles.studendPrifileBlock}>
          {groups.map((el) => (
            <div key={el.id} className={styles.containerStudendPrifile}>
              <div className={styles.studentProfile}>
                <div className={styles.studentProfileNumber}>{el.id}</div>
                <div className={styles.studentProfileBIO}>{el.name}</div>
              </div>
              <div className={styles.studentProfileInputScore}>
                <div className={styles.inputScoreTitle}>Aктивність</div>
                <input type="number" maxLength={1} className={styles.input} />
              </div>
              <div className={styles.studentProfileInputScore}>
                <div className={styles.inputScoreTitle}>Уважність</div>
                <input type="number" maxLength={1} className={styles.input} />
              </div>
              <div className={styles.studentProfileInputScore}>
                <div className={styles.inputScoreTitle}>Кахут</div>
                <input type="number" maxLength={1} className={styles.input} />
              </div>
            </div>
          ))}
        </div>
      </MainContainer>
    </div>
  );
}
