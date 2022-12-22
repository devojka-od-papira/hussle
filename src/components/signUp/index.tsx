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
      <Button onClick={submit} className={cx(styles.buttonColor)}>Sign up</Button>
      <div className={styles.hr} />
      <div className={styles.wrapper}>
        <Button onClick={setIsActive} className={styles.alreadyButton}>
          Already have an account?
        </Button>
      </div>
    </div>
  );
};
export default SignUp;
