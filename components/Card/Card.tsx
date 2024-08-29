// UTILS
import { cn } from '@/utils/helpers';
// TYPES
import { ICard, ICardHeading, ICardDescription } from './types';
// STYLES
import styles from './Card.module.css';

const Card = ({ className, ...props}: ICard ) => {
  return (
    <div
      className={cn(
        `${styles.container}`,
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
        `${styles.header}`,
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
        `${styles.title}`,
        className
      )}
      {...props}
    />
  );
};

const CardDescription = ({ className, ...props}: ICardDescription) => {
  return (
    <p
      className={cn(
        `${styles.description}`,
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
        `${styles.footer}`,
        className
      )}
      {...props}
    />
  );
}

export { Card, CardHeader, CardTitle, CardDescription, CardFooter };