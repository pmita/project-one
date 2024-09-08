// REACT
import { useState, useCallback } from 'react';
// FIREBASE
import { db } from '@/firebase/client/config';
import { collection, addDoc, updateDoc, doc, serverTimestamp, type DocumentData } from 'firebase/firestore';

export const useDB = () => {
  // STATE & HOOKS
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasQueryBeenSent, setHasQueryBeenSent] = useState(false);

  // FUNCTIONS
  const addDocument = useCallback(async (collectionPath:string, data: DocumentData) => {
    setIsLoading(true);
    setHasQueryBeenSent(false);
    setError(null);

    const docRef = collection(db, collectionPath);

    try {
      const response = await addDoc(docRef,{
        ...data,
        createdAt: serverTimestamp(),
        lastUpdatedAt: serverTimestamp()
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

const updateDocument = useCallback(async (documentPath:string,  data: DocumentData) => {
  setIsLoading(true);
  setError(null);

  const docRef = doc(db, documentPath);

  try {
    await updateDoc(docRef,{
      ...data,
      lastUpdatedAt: serverTimestamp()
    });
  }catch(err) {
    setError((err as Error).message);
  }finally {
    setIsLoading(false);
  }
}, [isLoading, error]);

  return { isLoading, hasQueryBeenSent, error, addDocument, updateDocument };
}