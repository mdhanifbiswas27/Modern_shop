import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const authContext = createContext(null);

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

    const authInfo = { user, createUser, userLogin, userLogOut, loading}
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