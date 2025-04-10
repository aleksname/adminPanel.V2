"use client";
import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import MainContainer from './../components/MainContainer/MainContainer';
import { groups } from '../../userList';

export default function WeWorkInClass() {
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    console.log(formJson);

    // fetch('/some-api', { method: form.method, body: formData });
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
