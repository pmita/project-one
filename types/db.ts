export type CollectionRef = FirebaseFirestore.Query<FirebaseFirestore.DocumentData, FirebaseFirestore.DocumentData>;

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

export interface IDbFilters {
  status?: string | null;
  sort?: string | null;
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