import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}
const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => (
  <button
    onClick={onClick}
    className={cx(styles.button, className)}
    type="button"
  >
    {text}
  </button>
);
export default Button;
