import React from 'react';
import cx from 'classnames';
import Typography from '../typography';

import styles from './PriorityTag.module.scss';

export enum Priority {
  Low='Low',
  Med = 'Med',
  High = 'High'
}

interface PriorityTagProps {
  children: Priority;
}

const PriorityTag:React.FC<PriorityTagProps> = ({ children }) => (
  <div className={cx(styles.tag, {
    [styles.low]: children === 'Low',
    [styles.med]: children === 'Med',
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
