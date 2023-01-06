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
  priority: Priority;
}

const PriorityTag:React.FC<PriorityTagProps> = ({ priority }) => (
  <div className={cx(styles.tag, {
    [styles.low]: priority === Priority.Low,
    [styles.med]: priority === Priority.Med,
    [styles.high]: priority === Priority.High,
  })}
  >
    <Typography variant="span">
      {priority}
      {' '}
      Priority
    </Typography>
  </div>
);
export default PriorityTag;
