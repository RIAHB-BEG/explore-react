import { createContext, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Authentication/firebase.config";
import { AuthContext } from "./AuthProvider";

export const SignContext = createContext(AuthContext);

export default function SignInProvider({ children }) {
  const [users, setUsers] = useState(null);
  const auth = getAuth(app);

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUsers(userCredential.user);
        return userCredential.user;
      })
      .catch((error) => {
        console.error("Sign-in error:", error);
        throw error;
      });
  };

  const authInfos = { signIn, users };

  return (
    <SignContext.Provider value={authInfos}>
      {children}
    </SignContext.Provider>
  );
}
