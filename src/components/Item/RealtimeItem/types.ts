// TYPES
import { IQueryItem, ICommentItem } from "@/src/types/db";

export interface RealtimeItemProps {
  item: IQueryItem;
  comments: ICommentItem[];
}