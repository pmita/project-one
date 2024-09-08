"use client"

// COMPONENTS
import { Status } from "@/components/Status";
import { UpdateStatus } from "../ItemStatus";
import { Comments } from "@/components/Comments";
// HOOKS
import { useDocumentSnapshot } from "@/hooks/useDocumentSnapshot";
import { useCollectionSnapshot } from "@/hooks/useCollectionSnapshot";
// TYPES
import { ICommentItem } from "@/types/db";
import { RealtimeItemProps } from "./types";
// STYLES
import styles from './styles.module.css'


export const RealtimeItem = ({ item, comments }: RealtimeItemProps) => {
  // STATE && VARIABLES
  const { data: realtimeItem } = useDocumentSnapshot('queries', item.id);
  const { data: realtimeComments } = useCollectionSnapshot(`queries/${item.id}/comments`, { sort: 'asc' });
  const itemData = realtimeItem || item;
  const commentsData = realtimeComments || comments;

  return (
    <>
        <div className={`${styles.statusContainer}`}>
          <div className={`${styles.statusDetails}`}>
            <span>Status:</span>
            <Status status={itemData.status} />
          </div>
          <UpdateStatus id={itemData.id} status={itemData.status} />
        </div>
        <div className={`${styles.commentsContainer}`}>
          <Comments 
            id={item.id} 
            status={itemData.status} 
            comments={commentsData as ICommentItem[]} 
            canAddComments 
          />
        </div>
    </>
  )
}