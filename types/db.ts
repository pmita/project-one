import firebase from 'firebase/app';
import 'firebase/firestore';
import { Query as AdminQuery, CollectionReference as AdminCollectionReference } from 'firebase-admin/firestore';

export type CollectionRef<T = firebase.firestore.DocumentData> = 
  | firebase.firestore.Query<T>
  | firebase.firestore.CollectionReference<T>
  | AdminQuery<T>
  | AdminCollectionReference<T>;
  
export interface IQueryItem extends FirebaseFirestore.DocumentData {
  id: string;
  email: string;
  fullName: string;
  mobile: string;
  additionalInfo: string;
  status: QUERY_STATUS;
  createdAt: number | string;
  lastUpdatedAt: number | string;
}

export interface ICommentItem extends FirebaseFirestore.DocumentData {
  content: string;
  createdAt: number | string;
  status: QUERY_STATUS;
  lastUpdatedAt: number | string;
  id: string;
}

export interface IDbFilters {
  limit?: number | null;
  status?: string | null;
  sort?: string | null;
  startAfter?: string | firebase.firestore.Timestamp | null;
}

export enum QUERY_STATUS {
  INITIAL = 'INITIAL',
  PROGRESSED = 'PROGRESSED',
  COMPLETED = 'COMPLETED',
}

export enum ORDER_BY {
  ASC = 'asc',
  DESC = 'desc',
}