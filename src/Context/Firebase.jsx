import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyBnDSMVI2lVpwIOAmlL2weCilblLEtmCrU",
  authDomain: "mindmateassignment.firebaseapp.com",
  projectId: "mindmateassignment",
  storageBucket: "mindmateassignment.firebasestorage.app",
  messagingSenderId: "598101266292",
  appId: "1:598101266292:web:6743b2a2434508be78a621",
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseapp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseapp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setCurrentUser(user);
      else setCurrentUser(null);
    });
  }, []);

  const googleAuth = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };

  return (
    <FirebaseContext.Provider value={{ googleAuth, currentUser }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};
