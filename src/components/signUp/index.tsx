import React from 'react';
import cx from 'classnames';
import Input from '../input';
import Button from '../button';

import styles from './SignUp.module.scss';

interface SignUpProps {
  setIsActive: () => void;
}

const SignUp:React.FC<SignUpProps> = ({ setIsActive }) => {
  const submit = () => {
    console.log('submit');
  };

  return (
    <div className={cx(styles.signUp)}>
      <Input placeholder="Name" id="user" type="text" />
      <Input placeholder="Last name" id="user" type="text" />
      <Input placeholder="Email" id="pass" type="text" />
      <Input placeholder="Password" id="pass" type="password" />
      <Input placeholder="Repeat Password" id="pass" type="password" />
      <Button text="Sign up" onClick={submit} className={cx(styles.buttonColor)} />
      <div className={styles.hr} />
      <div className={styles.wrapper}>
        <Button text="Already have an account?" onClick={setIsActive} className={styles.alreadyButton} />
      </div>
    </div>
  );
};
export default SignUp;
