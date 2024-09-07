import { CollectionReference as ClientCollectionRef, Query as ClientQuery, DocumentData as ClientDocumentData } from 'firebase/firestore';
import { CollectionReference as AdminCollectionRef, Query as AdminQuery, DocumentData as AdminDocumentData, Timestamp } from 'firebase-admin/firestore';

// Create a common type for CollectionRef that supports both Firebase Admin and Firebase Client SDKs
export type CollectionRefServerSide = AdminCollectionRef<AdminDocumentData> | AdminQuery<AdminDocumentData>;
export type CollectionRefClientSide = ClientCollectionRef<ClientDocumentData> | ClientQuery<ClientDocumentData>;

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
  numberOfItems?: number | null;
  status?: string | null;
  sort?: string | null;
  lastItem?: string | Timestamp | null;
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