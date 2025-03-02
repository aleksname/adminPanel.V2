import React, {useState} from 'react'
import styles from './EditUser_FindUser.module.css'
import Vector from '../../../../../public/Vector.svg';
import Image from 'next/image';

export default function EditUser_FindUser() {
    const [users, setUsers] = useState([])
    const [open, setOpen] = useState(false);
    const getusers = async () => {
      setOpen(!open)
      
    try {
      const response = await fetch('/api/getUser', { method: 'GET' }); 
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
  return (
    <div>
                <div className={styles.userTitleEl}>Учень</div>
                    <ul>
                      <button onClick={getusers} className={styles.userDropDownWrapper}>
                        <div className="">Знайти учня</div>
                        <Image src={Vector} alt="Vector" style={{ transform: open ? "rotate(0deg)" : "rotate(180deg)" }} />
                      </button>
                      <div className={styles.dropdownContainer}>
                        {open && (
                          <div className={styles.dropdownList}>
                            {users.map((user) => (
                              <div key={user.id} className={styles.listUserContainer}>
                                <input
                                  type="checkbox"
                                  className={styles.checkbox}
                                />
                                <li className={styles.listUser}>{user.name}</li>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                </ul>
    </div>
  )
}
