import React from 'react';
import cx from 'classnames';
import Typography from '../typography';

import styles from './PriorityTag.module.scss';

export enum Priority {
  LOW = 'Low',
  MED = 'Med',
  HIGH = 'High'
}

interface PriorityTagProps {
  priority: Priority;
}

const PriorityTag:React.FC<PriorityTagProps> = ({ priority }) => (
  <div className={cx(styles.tag, {
    [styles.low]: priority === Priority.LOW,
    [styles.med]: priority === Priority.MED,
    [styles.high]: priority === Priority.HIGH,
  })}
  >
    <Typography variant="span">
      {`${priority} Priority`}
    </Typography>
  </div>
);
export default PriorityTag;
