"use client"

// REACT
import { createContext, useState, useEffect } from "react";
// FIREBASE
import { onAuthStateChanged, type User} from "firebase/auth";
import { auth } from '@/firebase/client/config';

type AuthContextType = {
  user: User| null;
  setUser: React.Dispatch<React.SetStateAction<User| null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // STATE && VARIABLES
  const [user, setUser] = useState<User| null>(null);

  // USE EFFECTS
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    })

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider };