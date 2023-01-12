import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './Input.module.scss';

interface InputProps {
  placeholder: string;
  id: string;
  type: string;
  icon?: ReactNode
  className?:string;
}

const Input:React.FC<InputProps> = ({
  placeholder, id, type, className, icon,
}) => (
  <div className={styles.inputWrapper}>
    {icon ? <div>{icon}</div> : null}
    <input
      id={id}
      type={type}
      className={cx(styles.input, className)}
      placeholder={placeholder}
    />
  </div>
);

export default Input;
