"use client"

// REACT
import { createContext, useState, useEffect } from "react";
// FIREBASE
import firebase from "firebase/app";
import { auth } from "@/firebase/client/config";

type AuthContextType = {
  user: firebase.User | null;
  setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // STATE && VARIABLES
  const [user, setUser] = useState<firebase.User | null>(null);

  // USE EFFECTS
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
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