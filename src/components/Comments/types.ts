// TYPES
import { QUERY_STATUS, ICommentItem } from "@/src/types/db";

export type CommentsProps = {
  id: string;
  status: QUERY_STATUS;
  comments: ICommentItem[];
  canAddComments?: boolean
}