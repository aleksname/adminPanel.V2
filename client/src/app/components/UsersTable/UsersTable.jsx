"use client";
import React from 'react';
import styles from './UsersTable.module.css';
import DeletIcon from '../../../../public/DeletIcon.svg';
import Image from 'next/image';

export default function UsersTable({ users, user }) {
  // Застосовуємо фільтр до користувачів
  const filteredUsers = users.filter((u) =>
    u.user_name.toLowerCase().includes(user.toLowerCase()) ||
    u.group_name.toLowerCase().includes(user.toLowerCase())
  );

  return (
    <>
      {filteredUsers.length === 0 ? (
        <p className={styles.userUnderfind}>Користувача не знайдено, спробуйте змінити запит</p>
      ) : (
        filteredUsers.map((name, index) => (
          <div className={styles.userContainerTitle} key={name.id ? name.id : index}>
            <div className={styles.userTitle}>активний</div>
            <div className={styles.userTitle}>{name.user_name}</div>
            <div className={styles.userTitle}>Україна</div>
            <div className={styles.userTitle}>{name.group_name}</div>
            <Image src={DeletIcon} alt="DeletIcon Icon" width={24} height={24} />
          </div>
        ))
      )}
    </>
  );
}
