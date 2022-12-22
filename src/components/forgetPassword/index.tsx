import React from 'react';
import cx from 'classnames';
import Input from '../input';
import Button from '../button';

import styles from './ForgetPassword.module.scss';

const submit = () => {
  console.log('submit');
};
const ForgetPassword:React.FC = () => (
  <div className={styles.wrapper}>
    <Input placeholder="User name" id="user" type="text" />
    <Input placeholder="Password" id="pass" type="password" />
    <Input placeholder="Confirm Password" id="pass" type="password" />
    <Button onClick={submit} className={cx(styles.buttonColor)}>Submit</Button>
  </div>
);
export default ForgetPassword;
