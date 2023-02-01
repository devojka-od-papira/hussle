import React, { ReactNode, FC } from 'react';
import cx from 'classnames';
import { Priority } from '../../types';

import styles from './Checkbox.module.scss';

interface CheckboxProps {
  children?: ReactNode;
  className? : string;
  checked?: boolean | undefined;
  handleChange: (priority: Priority) => void;
  priority: Priority;
}

const Checkbox:FC<CheckboxProps> = ({
  children,
  className,
  checked,
  handleChange,
  priority,
}) => (
  <div className={styles.wrapperCheckbox}>
    <input
      className={styles.input}
      type="checkbox"
      id="priority"
      name="priority"
      checked={checked}
      onChange={() => handleChange(priority)}
    />
    <span className={cx(className, styles.checkmark)} />
    {children}
  </div>
);

export default Checkbox;
