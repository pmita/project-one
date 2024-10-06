// REACT
import { useState, useEffect } from 'react';
// FIREBASE
import { db } from '@/src/firebase/client/config';
import { collection, onSnapshot, type DocumentData } from 'firebase/firestore';
// UTILS
import { applyDBFiltersClientSide } from '@/src/utils/client/db';
// TYPES
import { IDbFilters } from '@/src/types/db';

export const useCollectionSnapshot = (collectionPath: string, filters: IDbFilters) => {
  //STATE
  const [data, setData] = useState<DocumentData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const docsRef = collection(db, collectionPath);
    const docsWithFilters = applyDBFiltersClientSide(docsRef, filters);

    const unsubscribe = 
    onSnapshot(docsWithFilters, (snapshot) => {
      if(!snapshot.empty) {
        const docs = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data().createdAt?.toMillis() ?? null,
          lastUpdated: doc.data().lastUpdated?.toMillis() ?? null,
        }));

        setData(docs);
        setIsLoading(false);
        setError(null);
      } else {
        setError('Collection is empty');
        setIsLoading(false);
      }
    }, (error) => {
      setError(error);
      setIsLoading(false);
    })

    return () => unsubscribe();
  }, [collection]);

  return { data, isLoading, error };
}