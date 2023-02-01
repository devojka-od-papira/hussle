import React, { useEffect, useState } from 'react';
import cx from 'classnames';
import { TextType } from '../../types';

import styles from './Typography.module.scss';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' ;

type TextOptions<T = boolean> = { [key in keyof typeof TextType]: T };
interface TypographyProps {
  variant: Variant;
  children: string | string[] | number;
  className?: string;
  type?: TextType
}

const Typography = ({
  variant, children, className, type,
}: TypographyProps) => {
  const [classType, setClassType] = useState('');

  useEffect(() => {
    switch (type) {
      case TextType.Heading1:
        setClassType(styles.h1);
        break;
      case TextType.Heading2:
        setClassType(styles.h2);
        break;
      case TextType.Heading3:
        setClassType(styles.h3);
        break;
      case TextType.Heading4:
        setClassType(styles.h4);
        break;
      case TextType.Heading5:
        setClassType(styles.h5);
        break;
      case TextType.Description:
        setClassType(styles.description);
        break;
      case TextType.BodySmall:
        setClassType(styles.bodySmall);
        break;
      case TextType.Bold:
        setClassType(styles.bold);
        break;
      default:
        setClassType('');
    }
  }, []);

  const Tag = variant;
  return (
    <Tag className={cx(classType, className)}>{children}</Tag>
  );
};

export default Typography;
