// REACT
import { useState, useEffect } from 'react';
// FIREBASE
import { db } from '@/src/firebase/client/config';
import { doc, onSnapshot, type DocumentData } from 'firebase/firestore';


export const useDocumentSnapshot = (documentPath: string) => {
  //STATE
  const [data, setData] = useState<DocumentData| null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const docRef = doc(db, documentPath);

    const unsubscribe = onSnapshot(docRef, (doc) => {
      if(doc.exists()) {
        setData({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data()?.createdAt?.toMillis() ?? null,
          lastUpdatedAt: doc.data()?.lastUpdatedAt?.toMillis() ?? null,
        });

        setIsLoading(false);
        setError(null);
      } else {
        setError('Document does not exist');
        setIsLoading(false);
      }
    }, (error) => {
      setError(error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [documentPath]);

  return { data, isLoading, error };
}

