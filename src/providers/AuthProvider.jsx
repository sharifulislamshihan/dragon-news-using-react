import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("on auth change", currentUser);
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        } 
    }, [])
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;