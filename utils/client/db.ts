// FIREBASE
import { query, where, orderBy, limit, startAfter } from "firebase/firestore";
// TYPES
import { CollectionRefClientSide, IDbFilters, QUERY_STATUS, ORDER_BY } from "@/types/db";

export const applyDBFiltersClientSide = (collectionRef: CollectionRefClientSide, {
  numberOfItems = null, 
  status = null, 
  sort = null,
  lastItem = null
}: IDbFilters) => {
  if (status && QUERY_STATUS[status as keyof typeof QUERY_STATUS]) {
    collectionRef = query(collectionRef, where('status', '==', status));
  }

  // sort based on date they were created
  switch(sort) {
    case ORDER_BY.ASC:
      collectionRef = query(collectionRef, orderBy('createdAt', ORDER_BY.ASC));
      break;
    case ORDER_BY.DESC:
    default:
      collectionRef = query(collectionRef, orderBy('createdAt', ORDER_BY.DESC));
      break;
  }

  // filter based on number of items to fetch
  if(numberOfItems) {
    collectionRef = query(collectionRef, limit(numberOfItems));
  }

  // filter based on the last item fetched
  if (lastItem) {
    collectionRef = query(collectionRef, startAfter(lastItem));
  }

  return collectionRef;
}