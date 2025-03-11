'use client';
import React, { useState, useEffect } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './page.module.css';
import Link from 'next/link';
import EditUser_FindUser from '@/app/components/EditUser/EditUser_FindUser/EditUser_FindUser';
import EditUser_UserGroup from '@/app/components/EditUser/EditUser_CreateGroup/EditUser_CreateGroup';
import EditUser_UserInfo from '@/app/components/EditUser_UserGroup/EditUser_UserGroup';


import DropDownMenu from '../../components/UI/DropDownMenu/DropDownMenu'
import {userStatus} from '../../../userStatus'


export default function Page() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userResponse = await fetch('/api/getUser');
        const usersData = await userResponse.json();
        setUsers(usersData);

        const groupResponse = await fetch('/api/getGroup');
        const groupsData = await groupResponse.json();
        setGroups(groupsData);
      } catch (error) {
        console.error('Error fetching users or groups:', error);
      }
    }
    fetchData();
  }, []);

  const handleCreateUser = async () => {
    console.log(selectedUserId)
    console.log(selectedGroupId)
    if (!selectedUserId || !selectedGroupId) {
      alert('Будь ласка, виберіть користувача та групу');
      return;
    }

    try {
      const response = await fetch('/api/createUserGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: selectedUserId,
          groupId: selectedGroupId
        })
      });

      if (response.ok) {
        const data = await response.json();
        alert("Користувача успішно додано до групи");
      } else {
        const errorText = await response.text();
        alert("Виникла помилка: " + errorText);
      }
    } catch (error) {
      console.error('Помилка запиту:', error);
      alert('Помилка зв\'язку із сервером');
    }
};


  return (
    <div className={styles.wrapper}>
      <MainContainer titles="Домашня сторінка">
        <div className={styles.navigationContainer}>
          <div className={styles.navigationItem}>
            <Link href="" className={styles.navLinkActive}>Редагувати профіль</Link>
            <Link href="../home" className={styles.navLink}>Користувачі</Link>
          </div>
          <div className={styles.userContainerTitle}>
            <div className={styles.userTitle}>Редагувати профіль</div>
            <div className={styles.userTitleBlock}>
              <EditUser_FindUser users={users} onSelectUser={setSelectedUserId} />
              <EditUser_UserGroup  />
            </div>

            <div className={styles.userTitle2}>Інформація користувача</div>
            <div className={styles.infoContainer}>
               <div className="">
                <div className={styles.userTitleEl}>Статус учня</div>
                <div className={styles.userTitleBlock} >
                  <DropDownMenu disabled={ true} content={userStatus} className={styles.input} title={'Статус учня'} classNameDropDown={styles.dropDown} dropDownWrapper={styles.dropDownWrapper}  />
                </div>
              </div>
              <EditUser_UserInfo groups={groups} onSelectedGroup={setSelectedGroupId} />
              </div>
            <div className={styles.createUserContainer}>
              <button type="button" className={styles.createUser} onClick={handleCreateUser}>
                Створити користувача
              </button>
            </div>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}
