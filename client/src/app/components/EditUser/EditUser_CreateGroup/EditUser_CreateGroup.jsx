import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './EditUser_CreateGroup.module.css'

export default function EditUser_CreateGroup() {
      const { register, handleSubmit, formState } = useForm({
        mode: 'onChange',
      })
    
    
      const inputError = formState.errors['groups']?.message
      const onSubmit = (data) => {
        try {
          const response = fetch('/api/postGroup',
            {
              method: 'POST',
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({name: data.groups})
            },)
        } catch  {
          console.log(err)
        }
    }
    
  return (
          <div className="">
                  <div className={styles.userTitleEl}>Створити групу</div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.inputContainer}>
                      <input
                        type="text"
                        placeholder="Назва групи"
                        {...register('groups', {
                          required: 'This field is required',
                          pattern: {
                            value: /^[A-Za-zА-Яа-яІіЇїЄєҐґ0-9!@#$%^&*()_+\-=<>?/.,:;"'{}\[\]\\|`~]+$/,
                            message: 'Дозволені літери, цифри та спецсимволи'
                          }
                        })}
                        className={styles.inputUser}
                      />
                      {inputError && <p>{inputError}</p>}
                      <button type="submit" className={styles.submitForm}>Підтвердити</button>
                    </div>
                  </form>
                </div>
  )
}
