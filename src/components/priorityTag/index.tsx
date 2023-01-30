import React from 'react';
import cx from 'classnames';
import Typography from '../typography';
import { Priority } from '../../constants';

import styles from './PriorityTag.module.scss';

interface PriorityTagProps {
  priority: Priority;
  onChange?: (priority: Priority) => void;
  className?: string;
}

const PriorityTag:React.FC<PriorityTagProps> = ({ priority, onChange, className }) => (
  <div
    className={cx(styles.tag, className, {
      [styles.low]: priority === Priority.LOW,
      [styles.med]: priority === Priority.MED,
      [styles.high]: priority === Priority.HIGH,
    })}
    onChange={() => (onChange ? onChange(priority) : null)}
  >
    <Typography variant="span">
      {`${priority} Priority`}
    </Typography>
  </div>
);
export default PriorityTag;
