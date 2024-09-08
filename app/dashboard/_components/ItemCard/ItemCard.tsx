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

  )
}