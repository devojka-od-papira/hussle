import React, { useState } from 'react';
import Button from '../../components/button';
import SignIn from '../../components/signIn';
import SignUp from '../../components/signUp';

import styles from './Login.module.scss';

const Login = () => {
  const [isActive, setIsActive] = useState(0);
  const handleClick = (status : number) => {
    setIsActive(status);
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.buttonWrapper}>
            <Button onClick={() => handleClick(0)} className={styles.button}>Sign in</Button>
            <Button onClick={() => handleClick(1)} className={styles.button}>Sign up</Button>
          </div>
          <div>
            <div className={styles.hr} style={{ transform: `translateX(${isActive < 2 ? isActive * 150 : 0}px)` }} />
          </div>
          <div className={styles.loginForm} style={{ transform: `rotateY(${isActive < 2 ? isActive * 180 : 0}deg)` }}>
            <SignIn isActive={isActive} setIsActive={() => setIsActive(2)} />
            <SignUp setIsActive={() => setIsActive(0)} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
