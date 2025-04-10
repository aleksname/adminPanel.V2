import React, {useState} from 'react'
import styles from './EditUser_UserGroup.module.css'

import Image from 'next/image';
import Vector from '../../../../public/Vector.svg'

export default function editUserGroup({ onSelectedGroup}) {
    const [groups, setGroups] = useState([]);
    const [open, setOpen] = useState(false);
  
    const getGroup = async () => {
    setOpen(!open)

    try {
      const response = await fetch('/api/getGroup', { method: 'GET' });
       if (!response.ok) {
          throw new Error('Failed fetch group');
        }
        const data = await response.json()
        setGroups(data)
        // console.log(data)
    } catch (err) {
      console.log('error fetch group',err)
    }
  }
    


    return (
        <>
           <div className="">
                <div className={styles.userTitleEl}>Група учня</div>
                <div className={styles.userTitleBlock}>
                  <ul>
                    <button type="button" onClick={getGroup} className={styles.userDropDownWrapper}>
                      <div className="" >Знайти групу</div>
                      <Image src={Vector} alt='Vector' style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }} />
                    </button>
                    <div className={styles.dropdownContainer}>
                      {open && (
                        <div className={styles.dropdownList}>
                         {groups.map((user) => (
                              <div key={user.id} className={styles.listUserContainer}>
                                <input
                                  type="radio"
                                  value={user.id}
                                  onChange={() => onSelectedGroup(user.name)}
                                  className={styles.inputEl}
                                />
                                <li className={styles.listUser}>{user.name}</li>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </ul>
                </div>
              </div>  
        </>
    )
}
