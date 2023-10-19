import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";



export const authContext = createContext(null);
const GoogleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

const createUser = (email , password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email, password);
}

const userLogin =(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const loginWithGoogle =()=>{
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider);
}

const userLogOut = ()=>{
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
        setLoading(false);
    });
    return() =>{
        unSubscribe();
    }
},[])

    const authInfo = { user, createUser, userLogin, userLogOut, loading, loginWithGoogle}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes ={
    children: PropTypes.node
}