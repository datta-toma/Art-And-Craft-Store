import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useState } from "react";
import auth from '../firebase/firebase.config';
import { useEffect } from "react";

 export const AuthContext = createContext(null);

//  social auth provider
 const googleProvider = new GoogleAuthProvider();
 const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    const [loading, setLoading] = useState(true);
    console.log(loading)

    // create user
    const createUser = (email, password) =>{
      setLoading(true);
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    // update Profile
    const updateUserProfile = (name, image) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

    // sin in user
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    // github login
    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // logout
    const logout = () =>{
        setUser(null)
        setLoading(true)
        signOut(auth) 
    }

    // observable
    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, (user) => {
        setLoading(false)
        setUser(user);
        // if (user) {
        //     setUser(user);
        //     setLoading(false);
        //   }
        //   else {
        //     setUser(null);
        //     setLoading(false);
        //   }
           
          });
          return () => unsubscribe();
    },[]);

    
    const allValues ={createUser, signInUser, googleLogin, githubLogin, logout, user, updateUserProfile, loading}
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;