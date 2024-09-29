// TYPES
import { IQueryItem, ICommentItem } from "@/types/db";

export interface RealtimeItemProps {
  item: IQueryItem;
  comments: ICommentItem[];
}