import React from 'react'
import styles from './EditUser_UserInfo.module.css'
import DropDownMenu from '../../UI/DropDownMenu/DropDownMenu'
import {userCoutry} from '../../../../userCoutry'
import {userStatus} from '../../../../userStatus'
import EditUserGroup from '../../EditUser_UserGroup/EditUser_UserGroup'

export default function EditUser_UserInfo() {
  return (
      <>
            <div className={styles.userEditContainer}>
              <div className={styles.userEditBlock}>
                <div className={styles.userTitleEl}>Ім'я користувача</div>
                <div className={styles.userTitleBlock}>
                  <input type="text" placeholder="Ім'я користувача" className={ styles.inputUser} />
                </div>
                <div className={styles.userTitleEl}>Країна користувача</div>
                <div className={styles.userTitleBlock}>
                  <DropDownMenu content={userCoutry} className={styles.input} title={'Знайди учня'} classNameDropDown={styles.dropDown} dropDownWrapper={styles.dropDownWrapper}  />
                </div>
              </div>
              <div className="">
                <div className={styles.userTitleEl}>Статус учня</div>
                <div className={styles.userTitleBlock}>
                  <DropDownMenu content={userStatus} className={styles.input} title={'Статус учня'} classNameDropDown={styles.dropDown} dropDownWrapper={styles.dropDownWrapper}  />
                </div>
                <EditUserGroup/>
              </div>
            </div>
    </>
  )
}
