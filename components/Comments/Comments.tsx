// COMPONENTS
import { Card, CardDescription, CardFooter } from "@/components/Card";
import { Status } from "@/components/Status";
import { FormatedTime } from "@/components/FormatedTime";
import { AddComment } from "./AddComment";
// TYPES
import { ICommentItem, QUERY_STATUS } from "@/types/db";
// STYLES
import styles from "./styles.module.css";

type CommentsProps = {
  id: string;
  status: QUERY_STATUS;
  comments: ICommentItem[];
  canAddComments?: boolean
}

export const Comments = ({
  id,
  status,
  comments,
  canAddComments = false
}: CommentsProps) => {
  if (!comments) return <h1 className={`${styles.fallbackText}`}>No comments yet</h1>;

  return (
    <>
      <h1 className={`${styles.title}`}>Comments</h1>
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