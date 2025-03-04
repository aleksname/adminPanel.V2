'use client';
import React, { useState } from 'react';
import styles from './EditUser_FindUser.module.css';
import Image from 'next/image';
import Vector from '../../../../../public/Vector.svg';

export default function EditUser_FindUser({ users, onSelectUser }) {
  const [open, setOpen] = useState(false);

  const getUsers = async () => {
    setOpen(!open);
    try {
      const response = await fetch('/api/getUser', { method: 'GET' });
      if (!response.ok) throw new Error('Failed to fetch users');
      const data = await response.json();
      // Якщо користувачі передаються через пропси, можна оновлювати стан батьківського компонента.
      // Але в даному прикладі припускаємо, що users завантажуються десь і передаються як props.
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <div className={styles.userTitleEl}>Знайти учня</div>
      <div className={styles.userTitleBlock}>
        <button type="button" onClick={getUsers} className={styles.userDropDownWrapper}>
          <div>Знайти учня</div>
          <Image src={Vector} alt="Vector" style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }} />
        </button>
        <div className={styles.dropdownContainer}>
          {open && (
            <div className={styles.dropdownList}>
              {users.map((user) => (
                <div key={user.id} className={styles.listUserContainer}>
                  <input
                    type="radio"
                    name="selectedUser"            // Спільне ім'я для всіх радіо кнопок користувачів
                    value={user.id}
                    onChange={() => onSelectUser(user.id)}
                  />
                  <label className={styles.listUser}>{user.name}</label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
