"use client";
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import MainContainer from './../components/MainContainer/MainContainer';
import { groups } from '../../userList';

export default function WeWorkInClass() {
  function parseFormJson(formJson) {
  const userDataMap = {};

  // Проходимось по всіх ключах форми
  for (const [key, value] of Object.entries(formJson)) {
    const parts = key.split('_'); // ['user', 'active', 'Anna']
    if (parts.length < 3) continue;

    const type = parts[1]; // active / attentiveness / kahoot
    const user_name = parts.slice(2).join('_'); // підтримує складні імена з "_"

    // Якщо ще не існує запису для користувача — створюємо
    if (!userDataMap[user_name]) {
      userDataMap[user_name] = {
        user_name,
        activity_score: 0,
        attention_score: 0,
        kahoot_score: 0
      };
    }

    // Додаємо відповідне поле
    if (type === 'active') {
      userDataMap[user_name].activity_score = parseInt(value);
    } else if (type === 'attentiveness') {
      userDataMap[user_name].attention_score = parseInt(value);
    } else if (type === 'kahoot') {
      userDataMap[user_name].kahoot_score = parseInt(value);
    }
  }

  // Конвертуємо з об'єкта в масив
  return Object.values(userDataMap);
}



  function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());

  const parsedGrades = parseFormJson(formJson);

  const body = {
    lesson_id: 1, // або динамічно — в залежності від обраного уроку
    grades: parsedGrades
  };

  fetch('/api/submitGrades', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(res => {
    if (res.ok) alert('Оцінки збережено ✅');
  }).catch(err => {
    console.error('Помилка при надсиланні:', err);
  });
}

  
  const [user, setUser] = useState([])
  const [group, setGroup] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/finalUserGroups')
        const userData = await res.json()
        setUser(userData)

        const response = await fetch('/api/getGroup');
        const groupData = await response.json()
        setGroup(groupData)

      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])



  
  const [open, setOpen] = useState(false)
  function handleDropDown() {
    setOpen(!open)
  }
  return (
    <div className={styles.wrapper}>
      <MainContainer>
        <h1 className={styles.title}>Рейтинг учнів 🫅</h1>
        <h1 className={styles.subTitle}>Оцінювання від 0 до 10</h1>

        <form method="POST" onSubmit={handleSubmit}>
          {/* тест компонент */}
          <div className="">
            <button type='button' onClick={handleDropDown} className="">Вибери групу</button>
            {open && (
              group.map(el => (
                  <div key={el.id}>{el.name}</div>
              ))
            )}
          </div>
          <div className={styles.studendPrifileBlock} >
            {user.map((el) => {
              // console.log('elemtnt: ', el.id)
              return (
                <div key={el.id} className={styles.containerStudendPrifile}>
                  <div className={styles.studentProfile}>
                    <div className={styles.studentProfileNumber}>{el.id}</div>
                    <div className={styles.studentProfileBIO}>{el.user_name}</div>
                  </div>
                  <div className={styles.studentProfileInputScore}>
                    <div className={styles.inputScoreTitle}>Активність</div>
                    {/*  унікальне ім'я для кожного інпута */}
                    <input
                      type="number"
                      name={`user_active_${el.user_name}`}
                      defaultValue={0}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.studentProfileInputScore}>
                    <div className={styles.inputScoreTitle}>Уважність</div>
                    <input
                      type="number"
                      name={`user_attentiveness_${el.user_name}`}
                      defaultValue={0}
                      className={styles.input}
                    />
                  </div>
                  <div className={styles.studentProfileInputScore}>
                    <div className={styles.inputScoreTitle}>Кахут</div>
                    <input
                      type="number"
                      name={`user_kahoot_${el.user_name}`}
                      defaultValue={0}
                      className={styles.input}
                    />
                  </div>
                </div>
              )
            })}
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
