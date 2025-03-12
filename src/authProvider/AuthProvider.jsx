import { createContext, useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Authentication/firebase.config";
export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {
    const [user, setUser] = useState()

    const auth = getAuth(app)
    
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
      const signIn= (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signout = () => { 
        return signOut(auth);
    };
    
  
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser)
        })
        return () => {
          return  unsubscribe
        }
    

    }, [])
        console.log(user)
    const authInfo = { signUp, user,signIn,signout }


    return (
        <>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </>
    )
}
