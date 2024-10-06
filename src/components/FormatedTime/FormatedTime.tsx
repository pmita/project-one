// REACT
import React from 'react';
// UTILS
import { cn, formatDate, formatDateFromMillis } from '@/src/utils/helpers';
// TYPES
import { FormatedTimeProps } from './types';
// STYLES
import styles from './styles.module.css';


export const FormatedTime = ({ time, className }: FormatedTimeProps) => {

  if (!time) return null;

  return (
    <time className={cn(`${styles.styledText}`, className)}>
      {typeof time === 'number' ? formatDateFromMillis(time) : formatDate(time as unknown as Date)}
    </time>
  )
};
