import { createContext, useState } from "react"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Authentication/firebase.config";
 export const AuthContext = createContext(null)
export default function AuthProvider({children}){
    const [user,setUser] = useState()
   
   const auth = getAuth(app)
   const signUp = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
        }
    
const authInfo = {signUp,user}

    return(
        <>
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </>
    )
}
