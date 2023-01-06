import React from 'react';
import cx from 'classnames';
import Input from '../input';
import Button from '../button';
import ForgetPassword from '../forgetPassword';

import styles from './SignIn.module.scss';
import Typography from '../typography';
import PriorityTag, { Priority } from '../priorityTag';

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
      <Button onClick={submit} className={cx(styles.buttonColor)}>
        <Typography variant="h4">Sign in</Typography>
      </Button>
      <div className={styles.hr}> </div>
      <div className={styles.wrapper}>
        <Button onClick={setIsActive} className={styles.forgotButton}>
          <Typography variant="h4">Forgot Password?</Typography>
        </Button>
      </div>
    </div>
  ) : (<ForgetPassword />);
};

export default SignIn;
