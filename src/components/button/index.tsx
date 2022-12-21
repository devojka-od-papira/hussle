import React, { ReactNode } from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children?: ReactNode;
}
const Button: React.FC<ButtonProps> = ({
  onClick, className, children,
}) => (
  <button
    onClick={onClick}
    className={cx(styles.button, className)}
    type="button"
  >
    {children}
  </button>
);
export default Button;
