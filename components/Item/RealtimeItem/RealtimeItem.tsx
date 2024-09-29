"use client"

// COMPONENTS
import { ItemStatus } from "@/components/Item";
import { UpdateStatusForm } from "../../Forms/UpdateStatusForm";
import { Comments } from "@/components/Comments";
// HOOKS
import { useDocumentSnapshot } from "@/hooks/useDocumentSnapshot";
import { useCollectionSnapshot } from "@/hooks/useCollectionSnapshot";
// TYPES
import { ICommentItem } from "@/types/db";
import { RealtimeItemProps } from "./types";
// REACT
import { useState, useEffect } from 'react';
// STYLES
import styles from './styles.module.css';


export const RealtimeItem = ({ item, comments }: RealtimeItemProps) => {
  // STATE && VARIABLES
  const [commentAdded, setCommentAdded] = useState(false);
  const { data: realtimeItem } = useDocumentSnapshot(`queries/${item.id}`);
  const { data: realtimeComments } = useCollectionSnapshot(`queries/${item.id}/comments`, { sort: 'asc' });
  const itemData = realtimeItem || item;
  const commentsData = realtimeComments || comments;

  // USE EFFECTS
  useEffect(() => {
    if (commentAdded) {
      setCommentAdded(false);
    }
  }, [commentAdded, itemData.status]);

  console.log('itemData just changed', itemData.status);

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
        <Comments 
          id={item.id} 
          status={itemData.status} 
          comments={commentsData as ICommentItem[]} 
          canAddComments 
          onCommentAdded={() => setCommentAdded(true)}
        />
      </div>
    </>
  );
};
