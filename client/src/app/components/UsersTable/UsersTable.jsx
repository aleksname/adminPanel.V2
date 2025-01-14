import React from 'react'
import styles from './UsersTable.module.css';
import DeletIcon from '../../../../public/DeletIcon.svg';
import Image from 'next/image';
import {groups} from '../../../userList'

export default function UsersTable() {
  return (
    <>
      {groups.map((el) => (
        <div className={styles.userContainerTitle} key={el.id}>
            <div className={styles.userTitle}>{ el.student}</div>
            <div className={styles.userTitle}>{el.name }</div>
            <div className={styles.userTitle}>{el.country}</div>
            <div className={styles.userTitle}>{el.status}</div>
            <Image src={DeletIcon} alt="Delete Icon" width={24} height={24} />
        </div>      
      ))}
    </>
  )
}
