"use client"

// REACT
import { useMemo } from 'react';
// COMPONENTS
import { ItemStatus } from "@/src/components/Item";
import { UpdateStatusForm } from "../../Forms/UpdateStatusForm";
import { Comments } from "@/src/components/Comments";
// HOOKS
import { useDocumentSnapshot } from "@/src/hooks/useDocumentSnapshot";
import { useCollectionSnapshot } from "@/src/hooks/useCollectionSnapshot";
// TYPES
import { ICommentItem } from "@/src/types/db";
import { RealtimeItemProps } from "./types";
// STYLES
import styles from './styles.module.css';


export const RealtimeItem = ({ item, comments }: RealtimeItemProps) => {
  const { data: realtimeItem } = useDocumentSnapshot(`queries/${item.id}`);
  const { data: realtimeComments } = useCollectionSnapshot(`queries/${item.id}/comments`, { sort: 'asc' });
  const itemData = realtimeItem || item;
  const commentsData = realtimeComments || comments;

  // FUNCTIONS
  const memoizedComments = useMemo(() => (
    <Comments 
      id={item.id} 
      status={itemData.status} 
      comments={commentsData as ICommentItem[]} 
      canAddComments 
    />
  ), [itemData, commentsData]);

  return (
    <>
      <div className={`${styles.statusContainer}`}>
        <div className={`${styles.statusDetails}`}>
          <span className={`${styles.highlightedText}`}>Current Status:</span>
          <ItemStatus status={itemData.status} />
        </div>
        <UpdateStatusForm id={itemData.id} status={itemData.status} />
      </div>
      <div className={`${styles.commentsContainer}`}>
        {memoizedComments}
      </div>
    </>
  );
};
