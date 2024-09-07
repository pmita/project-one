// REACT
import { useState, useEffect } from 'react';
// HOOKS
import { useAuth } from './useAuth';
// FIREBASE
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/client/config';

export const useSignIn = () => {
  // STATE && VARIABLES
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCancelled, setIsCancelled] = useState(false);
  const { setUser } = useAuth();

  const signin = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);
   
    try {
      const authResponse = await signInWithEmailAndPassword(auth, email, password)
    
      if (!authResponse.user) {
        throw new Error('User not found');
      }

      setUser(authResponse.user);

      if (isCancelled) {
        setError(null);
      }


    }catch(error) {
      if (isCancelled) {
        setError((error as Error).message);
      }
    }finally {
      setIsLoading(false);
    }

  }
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { isLoading, error, signin };
}