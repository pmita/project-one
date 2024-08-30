import { CollectionRef, IDbFilters, ORDER_BY, QUERY_STATUS } from "@/types/db";


export const applyDBFilters = (collectionRef:  CollectionRef, { 
  limit = null, 
  status = null, 
  sort = null,
  startAfter = null
}: IDbFilters) => {
  // filter based on item status
  if (status && QUERY_STATUS[status as keyof typeof QUERY_STATUS]) {
    collectionRef = collectionRef.where('status', '==', status);
  }

  // sort based on date they were created
  switch(sort) {
    case ORDER_BY.ASC:
      collectionRef = collectionRef.orderBy('createdAt', ORDER_BY.ASC);
      break;
    case ORDER_BY.DESC:
    default:
      collectionRef = collectionRef.orderBy('createdAt', ORDER_BY.DESC);
      break;
  }

  // filter based on number of items to fetch
  if(limit) {
    collectionRef = collectionRef.limit(limit);
  }

  // filter based on the last item fetched
  if (startAfter) {
    collectionRef = collectionRef.startAfter(startAfter);
  }

  return collectionRef;
}