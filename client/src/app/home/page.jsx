"use client"

import React,  {useState, useEffect } from 'react'
import MainContainer from './../components/MainContainer/MainContainer';
import styles from './page.module.css';
import Link from 'next/link';

import UsersTable from '../components/UsersTable/UsersTable';

export default function page() {
// виніс цей кусочок логіки для отримання користувачів, щоб можна було працювати з фільтром а данні передаю на чілд з батьківського
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try { 
        const response = await fetch('/api/finalUserGroups');
        const userData = await response.json();
        setUsers(userData);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    }
    fetchData();
  }, []);

//  filter
  const [user, setUser] = useState('')
  // console.log(user);
  // console.log(users.filter(queru => queru.user_name.toLowerCase().includes('a') ))
  return (
    <div className={styles.wrapper}>
      <MainContainer titles="Домашня сторінка">
        <div className={styles.navigationContainer}>
          <div className={styles.navigationItem}>
            <Link href={'/home/Edit-Users'} className={styles.navLink}>Редагувати профіль</Link>
            <Link href={''} className={styles.navLinkActive}>Користувачі</Link>
          </div>
          <div className={styles.userContainerContent}>
            <div className={styles.conteinerTitle}>Користувачі</div>
            <div className={styles.conteinerSubTitle}></div>
            <div className={styles.userDropDownContainer}>
              {/* <DropDownMenu content={groups} className={styles.input} title={'Група'} classNameDropDown={styles.dropDown} dropDownWrapper={styles.dropDownWrapper}  />
              <DropDownMenu content={groups} className={styles.input} title={"Ім'я"} classNameDropDown={styles.dropDown} dropDownWrapper={styles.dropDownWrapper}  />
              <DropDownMenu content={groups} className={styles.input} title={"Статус"} classNameDropDown={styles.dropDown} dropDownWrapper={styles.dropDownWrapper}  /> */}
              <form action="">
                <input onChange={(e) => setUser(e.target.value)} type="text" name="" id="" placeholder="Знайти користувача за ім'ям або групою"  className={styles.userInput} />
                <button type="reset" className={styles.resetBTN}>скинути </button>
              </form>
            </div>
            
            <div className={styles.userContainerTitle}>
              <div className={styles.userTitle}>Статус</div>
              <div className={styles.userTitle}>Ім'я</div>
              <div className={styles.userTitle}>Країна</div>
              <div className={styles.userTitle}>Група</div>
              <div className={styles.userTitle}></div>
           </div>
            <UsersTable users={users} user={user} />
          </div>
        </div>
      </MainContainer>
    </div>
  )
}
