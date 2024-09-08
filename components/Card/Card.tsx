// UTILS
import { cn } from '@/utils/helpers';
// TYPES
import { ICard, ICardHeading } from './types';
// STYLES
import styles from './styles.module.css';

const Card = ({ className, ...props}: ICard ) => {
  return (
    <div
      className={cn(
        className,
        `${styles.cardContainer}`,
      )}
      {...props}
    />
  );
}

const CardHeader = ({ className, ...props}: ICard) => {
  return (
    <header
      className={cn(
        className,
        `${styles.cardHeader}`,
      )}
      {...props}
    />
  );
};

const CardTitle = ({ className, ...props}: ICardHeading) => {
  return (
    <h2
      className={cn(
        className,
        `${styles.cardTitle}`,
      )}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props}: ICard) => {
  return (
    <div
      className={cn(
        className,
        `${styles.cardDescription}`,
      )}
      {...props}
    />
  );
};

const CardFooter = ({ className, ...props}: ICard) => {
  return (
    <div
      className={cn(
        className,
        `${styles.cardFooter}`,
      )}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardFooter };