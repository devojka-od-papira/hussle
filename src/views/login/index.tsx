import React, { useState } from 'react';
import Button from '../../components/button';
import SignIn from '../../components/signIn';
import SignUp from '../../components/signUp';
import Typography from '../../components/typography';

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
