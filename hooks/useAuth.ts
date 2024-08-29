// REACT
import { useContext } from "react"
// CONTEXT
import { AuthContext } from "@/context/AuthContext";


export const useAuth = () => {
  // STATE && VARIABLES
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthenticationContextProvider");
  }

  return context;
}