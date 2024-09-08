// COMPONENTS
import { Card, CardDescription, CardFooter } from "@/components/Card";
import { Status } from "@/components/Status";
import { FormatedTime } from "@/components/FormatedTime";
import { AddComment } from "./AddComment";
// TYPES
import { ICommentItem } from "@/types/db";
import { CommentsProps } from "./types";
// STYLES
import styles from "./styles.module.css";

export const Comments = ({
  id,
  status,
  comments,
  canAddComments = false
}: CommentsProps) => {
  if (!comments) return <h1 className={`${styles.commentfallback}`}>No comments yet</h1>;

  return (
    <>
      <h1 className={`${styles.commentTitle}`}>Comments</h1>
      {comments.map((comment: ICommentItem) => (
        <Card key={comment.id}>
          <CardDescription>{comment.content}</CardDescription>
          <CardFooter className={`${styles.commentFooter}`}>
            <Status status={comment.status} />
            <FormatedTime time={comment.createdAt} />
          </CardFooter>
        </Card>
      ))}

      {canAddComments && <AddComment id={id} currentStatus={status} />}
    </>
  );
}