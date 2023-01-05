import React from 'react';
import cx from 'classnames';
import Typography from '../typography';

import styles from './PriorityTag.module.scss';

interface PriorityTagProps {
  children: string;
}

const PriorityTag:React.FC<PriorityTagProps> = ({ children }) => (
  <div className={cx(styles.tag, {
    [styles.low]: children === 'Low',
    [styles.medium]: children === 'Medium',
    [styles.high]: children === 'High',
  })}
  >
    <Typography variant="span">
      {children}
      {' '}
      Priority
    </Typography>
  </div>
);
export default PriorityTag;
