import React, { useState } from 'react';
import Button from '../../components/button';
import SignIn from '../../components/signIn';
import SignUp from '../../components/signUp';
import Typography from '../../components/typography';
import { Priority } from '../../types';

import styles from './Login.module.scss';

const Login = () => {
  const [isActive, setIsActive] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = (status : number) => {
    setIsActive(status);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const data = [
    {
      priority: Priority.LOW,
      description: 'Company website redesign.',
      attachmentNumber: 1,
      commentNumber: 2,
    },
    {
      priority: Priority.MED,
      description: 'Mobile app login process prototype.',
      attachmentNumber: 2,
      commentNumber: 3,
    },
    {
      priority: Priority.HIGH,
      description: 'Work on company website.',
      attachmentNumber: 1,
      commentNumber: 3,
    },
  ];
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => handleClick(0)} className={styles.button}>
              <Typography variant="h2">Sign in</Typography>
            </Button>
            <Button onClick={() => handleClick(1)} className={styles.button}>
              <Typography variant="h2">Sign up</Typography>
            </Button>
          </div>
          <div>
            <div
              className={styles.hr}
              style={{ transform: `translateX(${isActive < 2 ? isActive * 150 : 0}px)` }}
            />
          </div>
          <div
            className={styles.loginForm}
            style={{ transform: `rotateY(${isActive < 2 ? isActive * 180 : 0}deg)` }}
          >
            <SignIn isActive={isActive} setIsActive={() => setIsActive(2)} />
            <SignUp setIsActive={() => setIsActive(0)} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
