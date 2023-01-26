import React, { useState } from 'react';
import cx from 'classnames';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../db';
import Input from '../input';
import Button from '../button';
import Typography from '../typography';

import styles from './SignUp.module.scss';

interface SignUpProps {
  setIsActive: () => void;
}

const SignUp:React.FC<SignUpProps> = ({ setIsActive }) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const signUp = () => {
    if (password === repeatPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          console.log('response', response);
        }).catch((error) => {
          console.log(error);
        });
    } else {
      console.log('doesn\'t match password');
    }
  };

  return (
    <div className={cx(styles.signUp)}>
      <Input placeholder="Name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} id="user" type="text" />
      <Input placeholder="Last name" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} id="user" type="text" />
      <Input placeholder="Email" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} id="pass" type="text" />
      <Input placeholder="Password" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} id="pass" type="password" />
      <Input placeholder="Repeat Password" onChange={(e:React.ChangeEvent<HTMLInputElement>) => setRepeatPassword(e.target.value)} id="pass" type="password" />
      <Button onClick={signUp} className={cx(styles.buttonColor)}>
        <Typography variant="h4">Sign up</Typography>
      </Button>
      <div className={styles.hr} />
      <div className={styles.wrapper}>
        <Button onClick={setIsActive} className={styles.alreadyButton}>
          <Typography variant="h4">Already have an account?</Typography>
        </Button>
      </div>
    </div>
  );
};
export default SignUp;
