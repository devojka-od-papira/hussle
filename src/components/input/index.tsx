import React, { FC, ReactNode } from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

interface InputProps {
  placeholder: string;
  id: string;
  type: string;
  icon?: ReactNode
  className?:string;
  onChange?: (e : React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const Input:FC<InputProps> = ({
  placeholder,
  id,
  type,
  value,
  className,
  icon,
  onChange,
}) => (
  <div className={styles.inputWrapper}>
    {icon ? <div>{icon}</div> : null}
    <input
      id={id}
      type={type}
      onChange={onChange}
      className={cx(styles.input, className)}
      placeholder={placeholder}
      value={value}
    />
  </div>
);

export default Input;
