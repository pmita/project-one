// LINK
import Link from 'next/link';
// COMPONENTS
import { Card, CardDescription, CardFooter, CardHeader } from '@/components/Card';
import { buttonVariants } from '@/components/Button';
import { FormatedTime } from '@/components/FormatedTime';
import { Status } from '@/components/Status';
import { QuickView } from '../QuickView';
// UTILS
import { cn, truncate } from '@/utils/helpers';
// TYPES
import { IQueryItem } from '@/types/db';
// STYLES
import styles from './styles.module.css';

export const ItemCard = ({ item }: { item : IQueryItem | null }) => {

  if (!item) return null;

  return (
    <Card className={`${styles.container}`}>
      <CardHeader className={`${styles.header}`}>
        <Status status={item.status} />
        <FormatedTime time={item.createdAt} />
      </CardHeader>
      <CardDescription className={`${styles.description}`}>
        {truncate(item.additionalInfo, 150)}
      </CardDescription>
      <CardFooter className={`${styles.footer}`}>
        <Link 
            className={cn(buttonVariants({ variant: 'primary', size: 'sm' }))}
            href={`/dashboard/${item.id}`}
        >
            Edit
        </Link>
        <QuickView item={item} />
      </CardFooter>
    </Card>
  )
}