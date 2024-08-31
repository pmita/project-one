// COMPONENTS
import { Card, CardDescription } from "@/components/Card";
// TYPES
import { IQueryItem } from "@/types/db";
// STYLES
import styles from './styles.module.css';

export const ItemInfo = ({
  item
}: { item: IQueryItem}) => {

  return (
    <Card className={`${styles.container}`}>
      <CardDescription>
        <h1>Name: {item.fullName}</h1>
        <h1>Email: {item.email}</h1>
        <h1>Mobile: {item.mobile}</h1>
        <p>Details: {item.additionalInfo}</p>
      </CardDescription>
    </Card>
  )
}