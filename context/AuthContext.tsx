"use client"

// REACT
import { createContext, useState } from "react";
// FIREBASE
import firebase from "firebase/app";

type AuthContextType = {
  user: firebase.User | null;
  setUser: React.Dispatch<React.SetStateAction<firebase.User | null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // STATE && VARIABLES
  const [user, setUser] = useState<firebase.User | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider };