import React from 'react';

import styles from './Input.module.scss';

interface InputProps {
  placeholder: string;
  id: string;
  type: string;
}

const Input:React.FC<InputProps> = ({
  placeholder, id, type,
}) => (
  <input
    id={id}
    type={type}
    className={styles.input}
    placeholder={placeholder}
  />
);

export default Input;
