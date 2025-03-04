'use client';
import React, { useState, useEffect } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import styles from './page.module.css';
import Link from 'next/link';
import EditUser_FindUser from '@/app/components/EditUser/EditUser_FindUser/EditUser_FindUser';
import EditUser_UserGroup from '@/app/components/EditUser/EditUser_CreateGroup/EditUser_CreateGroup';
import EditUser_UserInfo from '@/app/components/EditUser/EditUser_UserInfo/EditUser_UserInfo';

export default function Page() {
  // Стан для зберігання вибраного користувача та групи
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  
  // Стан для даних користувачів та груп - для прикладу
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);

  // Можна завантажити користувачів та групи при завантаженні сторінки
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

  // Обробник для кнопки "Створити користувача"
  const handleCreateUser = async () => {
    if (!selectedUserId || !selectedGroupId) {
      alert('Будь ласка, виберіть користувача та групу');
      return;
    }

    const data = { user_id: selectedUserId, group_id: selectedGroupId };

    try {
      const response = await fetch('/api/saveUserGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert('Користувача успішно додано до групи!');
      } else {
        const errorText = await response.text();
        console.error('Server error:', errorText);
        alert('Не вдалося зберегти користувача та групу');
      }
    } catch (error) {
      console.error('Request error:', error);
      alert('Сталася помилка при збереженні');
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
              <EditUser_UserGroup groups={groups} onSelectGroup={setSelectedGroupId} />
            </div>

            <div className={styles.userTitle2}>Інформація користувача</div>
            <EditUser_UserInfo />
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
