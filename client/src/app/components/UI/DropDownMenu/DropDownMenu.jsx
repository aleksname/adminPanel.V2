"use client"

import React, { useState } from 'react';
import styles from './DropDownMenu.module.css';
import Vector from '../../../../../public/Vector.svg';
import Image  from 'next/image';

export default function DropDownMenu({ content, title, className, classNameDropDown, dropDownWrapper, disabled }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (disabled) return; 
    setOpen(!open);
  };

  return (
    <div className={`dropDownWrapper ${dropDownWrapper}`}>
      <button 
        onClick={handleOpen} 
        className={`dropDownMenu ${classNameDropDown} ${disabled ? styles.disabled : ''}`}
        disabled={disabled}
      >
        <div>{title}</div>
        <Image src={Vector} alt="Vector" className={open ? styles.dropDownIcon : styles.dropDownIconRounded} />
      </button>
      {open && (
        <div className={styles.dropDownContainer}>
          {content.map((item) => (
            <div key={item.id} className={`dropDownItem ${className}`}>
              <input type="checkbox" id={`checkbox-${item.id}`} className={styles.input} />
              <label htmlFor={`checkbox-${item.id}`}>{item.name}</label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
