// REACT
import { useState, useCallback } from 'react';
// FIREBASE
import { db, timestamp } from '@/firebase/client/config';

export const useDB = () => {
  // STATE & HOOKS
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasQueryBeenSent, setHasQueryBeenSent] = useState(false);

  // FUNCTIONS
  const addDocument = useCallback(async (collection:string, data: object) => {
    setIsLoading(true);
    setHasQueryBeenSent(false);
    setError(null);

    const docRef = db.collection(collection);

    try {
      const response = await docRef.add({
        ...data,
        createdAt: timestamp(),
        lastUpdated: timestamp()
      });

      if(!response) {
        throw new Error('Could not add document');
      }

      setHasQueryBeenSent(true);
    }catch(err) {
      setError((err as Error).message);
      setHasQueryBeenSent(false);
    }finally {
      setIsLoading(false);
    }
}, [isLoading, error, hasQueryBeenSent]);

  return { isLoading, hasQueryBeenSent, error, addDocument };
}