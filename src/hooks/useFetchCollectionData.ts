// REACT
import { useState, useCallback } from 'react';
// FIREBASE
import { db } from '@/src/firebase/client/config';
import { collection, getDocs, type DocumentData } from 'firebase/firestore';
// UTILS
import { applyDBFiltersClientSide } from '@/src/utils/client/db';
// TYPES
import { IDbFilters, IQueryItem } from '@/src/types/db';

export const useFetchCollectionData = () => {
  // STATE & HOOKS
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null);

  // FUNCTIONS
const fetchCollectionData = useCallback(async (collectionPath: string, filters: IDbFilters) => {
  setIsLoading(true);
  setError(null);
  let data = null;

  const collectionRef = collection(db, collectionPath);
  const collectionRefWithFilters = applyDBFiltersClientSide(collectionRef, filters);

  try {
    const docsSnapshot = await getDocs(collectionRefWithFilters);
    const docsData = docsSnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      createdAt: doc?.data().createdAt ?? null,
      lastUpdatedAt: doc?.data().lastUpdatedAt ?? null,
    }));

    data = docsData as DocumentData[] | null;
  }catch(error) {
    setError((error as Error).message);
  }finally {
    setIsLoading(false);
  }

  return data;
}, []);

  return { isLoading, error, fetchCollectionData };
}