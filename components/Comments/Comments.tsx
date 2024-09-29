// REACT
import { useMemo } from "react";
// COMPONENTS
import { Card, CardDescription, CardFooter } from "@/components/ui/Card";
import { ItemStatus } from "@/components/Item";
import { FormatedTime } from "@/components/FormatedTime";
import { AddComment } from "./components/AddComment";
// TYPES
import { ICommentItem } from "@/types/db";
import { CommentsProps } from "./types";
// STYLES
import styles from "./styles.module.css";

export const Comments = ({
  id,
  status,
  comments,
  canAddComments = false,
}: CommentsProps) => {
  if (!comments?.length) return <h1 className={`${styles.commentfallback}`}>No comments yet</h1>;

  const memoizedComments = useMemo(() => (
    comments.map((comment: ICommentItem) => (
      <Card key={comment.id}>
        <CardDescription>{comment.content}</CardDescription>
        <CardFooter className={`${styles.commentFooter}`}>
          <ItemStatus status={comment.status} />
          <FormatedTime time={comment.createdAt} />
        </CardFooter>
      </Card>
    ))
  ), [comments, status]);

  const memoizedAddComment = useMemo(() => (
    canAddComments && <AddComment id={id} currentStatus={status} />
  ),  [id, status]);

  return (
    <>
      <h1 className={`${styles.commentTitle}`}>Comments</h1>
      {memoizedComments}
      {memoizedAddComment}
    </>
  );
};
