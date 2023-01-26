import React, { useState } from 'react';
import cx from 'classnames';
import { NavLink, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Input from '../input';
import Button from '../button';
import ForgetPassword from '../forgetPassword';
import Typography from '../typography';
import { auth } from '../../db';

import styles from './SignIn.module.scss';

interface SignInProps {
  isActive: number;
  setIsActive: ()=> void;
}
const SignIn:React.FC<SignInProps> = ({ isActive, setIsActive }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        navigate('/board');
      }).catch((error) => {
        console.log(error);
      });
  };

  return isActive === 0 ? (
    <div className={cx(styles.signIn)}>
      <Input placeholder="Email" onChange={(e : React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} id="user" type="text" />
      <Input placeholder="Password" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="pass" type="password" />
      <Button onClick={signIn} className={cx(styles.buttonColor)}>
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
