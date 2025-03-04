import React, { useState } from "react";
import styles from './EditUser_CreateGroup.module.css'
export default function EditUser_CreateGroup() {
  const [groupName, setGroupName] = useState("");
  const [groups, setGroups] = useState([]); 

  const createGroup = async (event) => {
    event.preventDefault();

    if (!groupName.trim()) { // код далі не іде
      alert("Введіть назву групи!"); 
      return;
    }

    try {
      const response = await fetch("/api/postGroup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: groupName }), 
      });

      if (!response.ok) {
        throw new Error("Помилка при створенні групи");
      }

      const newGroup = await response.json();
      setGroups([...groups, newGroup]); 
      setGroupName(""); // Очищуємо поле вводу

    } catch (error) {
      console.error("Помилка:", error);
    }
  };

  return (
    <div>
      <div className="" >Створити групу</div>
      <form onSubmit={createGroup}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Створити групу"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className={styles.inputUser}
          />
          <button type="submit" className={styles.submitForm}>Створити</button>
        </div>
      </form>
    </div>
  );
}
