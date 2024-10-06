// LINK
import Link from 'next/link';
// COMPONENTS
import { Card, CardDescription, CardFooter, CardHeader } from '@/src/components/ui/Card';
import { buttonVariants } from '@/src/components/ui/Button';
import { FormatedTime } from '@/src/components/FormatedTime';
import { ItemStatus } from '@/src/components/Item';
import { QuickView } from '../../QuickView';
// UTILS
import { cn, truncate } from '@/src/utils/helpers';
// TYPES
import { IQueryItem } from '@/src/types/db';
// STYLES
import styles from './styles.module.css';

export const ItemCard = ({ item }: { item : IQueryItem | null }) => {

  if (!item) return null;

  return (
    <Card className={`${styles.itemContainer}`}>
      <CardHeader className={`${styles.itemHeader}`}>
        <ItemStatus status={item.status} />
        <FormatedTime time={item.createdAt} />
      </CardHeader>
      <CardDescription className={`${styles.itemDescription}`}>
        {truncate(item.additionalInfo, 150)}
      </CardDescription>
      <CardFooter className={`${styles.itemFooter}`}>
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