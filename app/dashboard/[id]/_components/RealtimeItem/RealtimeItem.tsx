"use client"

// COMPONENTS
import { Status } from "@/components/Status";
import { UpdateStatus } from "../ItemStatus";
// HOOKS
import { useDocumentSnapshot } from "@/hooks/useDocumentSnapshot";
// TYPES
import { IQueryItem } from "@/types/db";
// STYLES
import styles from './styles.module.css';


export const RealtimeItem = ({ item }: { item: IQueryItem }) => {
  // STATE && VARIABLES
  const { data: realtimeItem } = useDocumentSnapshot('queries', item.id);
  const itemData = realtimeItem || item;

  return (
    <>
        <div className={`${styles.statusContainer}`}>
          <div className={`${styles.statusDetails}`}>
            <span>Status:</span>
            <Status status={itemData.status} />
          </div>
          <UpdateStatus id={itemData.id} status={itemData.status} />
        </div>
    </>
  )
}