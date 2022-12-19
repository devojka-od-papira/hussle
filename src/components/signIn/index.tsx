import React from 'react';
import cx from 'classnames';
import Input from '../input';
import Button from '../button';
import ForgetPassword from '../forgetPassword';

import styles from './SignIn.module.scss';

interface SignInProps {
  isActive: number;
  setIsActive: ()=> void;
}
const SignIn:React.FC<SignInProps> = ({ isActive, setIsActive }) => {
  const submit = () => {
    console.log('submit');
  };

  return isActive === 0 ? (
    <div className={cx(styles.signIn)}>
      <Input placeholder="User name" id="user" type="text" />
      <Input placeholder="Password" id="pass" type="password" />
      <Button text="Sign in" onClick={submit} className={cx(styles.buttonColor)} />
      <div className={styles.hr}> </div>
      <div className={styles.wrapper}>
        <Button text="Forgot Password?" onClick={setIsActive} className={styles.forgotButton} />
      </div>
    </div>
  ) : (<ForgetPassword />);
};

export default SignIn;
