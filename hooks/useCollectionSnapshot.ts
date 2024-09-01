// REACT
import { useState, useEffect } from 'react';
// FIREBASE
import { db } from '@/firebase/client/config';
// UTILS
import { applyDBFilters } from '@/utils/db';
// TYPES
import { IDbFilters } from '@/types/db';

export const useCollectionSnapshot = (collection: string, filters: IDbFilters) => {
  //STATE
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const docsRef = db.collection(collection);
    const docsWithFilters = applyDBFilters(docsRef, filters);

    const unsubscribe = docsWithFilters
    .onSnapshot((snapshot: { empty: boolean; docs: FirebaseFirestore.DocumentData[]; }) => {
      if(!snapshot.empty) {
        const docs = snapshot.docs.map((doc: FirebaseFirestore.DocumentData) => ({
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