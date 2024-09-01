"use client"

// COMPONENTS
import { Status } from "@/components/Status";
import { UpdateStatus } from "../ItemStatus";
import { Comments } from "@/components/Comments";
// HOOKS
import { useDocumentSnapshot } from "@/hooks/useDocumentSnapshot";
// TYPES
import { ICommentItem, IQueryItem } from "@/types/db";
// STYLES
import styles from './styles.module.css'

interface RealtimeItemProps {
  item: IQueryItem;
  comments: ICommentItem[];
}


export const RealtimeItem = ({ item, comments }: RealtimeItemProps) => {
  // STATE && VARIABLES
  const { data: realtimeItem } = useDocumentSnapshot('queries', item.id);
  const { data: realtimeComments } = useDocumentSnapshot(`queries/${item.id}/comments`, 'comments');
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
        <div className="rounded-lg bg-neutral lg:col-span-2 p-4 flex flex-col gap-4">
          <Comments 
            id={item.id} 
            status={item.status} 
            comments={commentsData as ICommentItem[]} 
            canAddComments 
          />
        </div>
    </>
  )
}