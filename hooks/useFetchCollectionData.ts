// REACT
import { useState, useCallback } from 'react';
// FIREBASE
import { db } from '@/firebase/client/config';
// UTILS
import { applyDBFilters } from '@/utils/db';
// TYPES
import { IDbFilters, IQueryItem } from '@/types/db';

export const useFetchCollectionData = () => {
  // STATE & HOOKS
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // FUNCTIONS
const fetchCollectionData = useCallback(async (collection: string, filters: IDbFilters) => {
  setIsLoading(true);
  setError(null);
  let data = null;

  const collectionRef = db.collection(collection);
  const collectionRefWithFilters = applyDBFilters(collectionRef, filters);

  try {
    const docsSnapshot = await collectionRefWithFilters.get();
    const docsData = docsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdAt: doc.data().createdAt ?? null,
      lastUpdatedAt: doc.data().lastUpdatedAt ?? null,
    }));

    data = docsData as IQueryItem[] | [];
  }catch(error) {
    setError((error as Error).message);
  }finally {
    setIsLoading(false);
  }

  return data;
}, []);

  return { isLoading, error, fetchCollectionData };
}