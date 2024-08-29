// DB
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

export enum QUERY_STATUS {
  INITIAL = 'INITIAL',
  PROGRESSED = 'PROGRESSED',
  COMPLETED = 'COMPLETED',
}