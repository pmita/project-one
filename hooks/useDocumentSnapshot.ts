// REACT
import { useState, useEffect } from 'react';
// FIREBASE
import firebase from 'firebase/app';
import { db } from '@/firebase/client/config';


export const useDocumentSnapshot = (collection: string, docId: string) => {
  //STATE
  const [data, setData] = useState<firebase.firestore.DocumentData| null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const unsubscribe = db.collection(collection).doc(docId).onSnapshot((doc) => {
      if(doc.exists) {
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
  }, [collection, docId]);

  return { data, isLoading, error };
}

