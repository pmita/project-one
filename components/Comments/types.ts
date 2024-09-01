// TYPES
import { QUERY_STATUS, ICommentItem } from "@/types/db";

export type CommentsProps = {
  id: string;
  status: QUERY_STATUS;
  comments: ICommentItem[];
  canAddComments?: boolean
}

export interface IAddCommentForm {
  comment: string;
}
