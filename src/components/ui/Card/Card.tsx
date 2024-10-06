// UTILS
import { cn } from '@/src/utils/helpers';
// TYPES
import { ICard, ICardHeading } from './types';
// STYLES
import styles from './styles.module.css';

const Card = ({ className, ...props}: ICard ) => {
  return (
    <div
      className={cn(
        `${styles.cardContainer}`,
        className
      )}
      {...props}
    />
  );
}

const CardHeader = ({ className, ...props}: ICard) => {
  return (
    <header
      className={cn(
        `${styles.cardHeader}`,
        className
      )}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props}: ICardHeading) => {
  return (
    <h2
      className={cn(
        `${styles.cardTitle}`,
        className
      )}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props}: ICard) => {
  return (
    <div
      className={cn(
        `${styles.cardDescription}`,
        className
      )}
      {...props}
    />
  );
};

const CardFooter = ({ className, ...props}: ICard) => {
  return (
    <div
      className={cn(
        `${styles.cardFooter}`,
        className
      )}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardFooter };