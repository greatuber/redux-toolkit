import { createContext, useContext } from "react";
import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyC-9dB2d0XH0zb7-iY46hHwfwQO_ByOZvU",
    authDomain: "react-intern-project.firebaseapp.com",
    projectId: "react-intern-project",
    storageBucket: "react-intern-project.appspot.com",
    messagingSenderId: "522099272303",
    appId: "1:522099272303:web:6cd3f0864198052ed5bb9a"
  };



export const FirebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth =   getAuth(FirebaseApp)



export const FirebaseContext = createContext(null)

export const useFirebaseAuth = () =>  useContext(FirebaseContext) // custom hook

export const FirebaseContextProvider = (props) => {
    

    const signup = (email, password) => {
     return   createUserWithEmailAndPassword(firebaseAuth, email, password)
    }

    const signIn = (email, password) => {
     return   signInWithEmailAndPassword(firebaseAuth, email, password)
    }


   return (
            <FirebaseContext.Provider value={{signup, signIn}}>
                 {props.children}
          </FirebaseContext.Provider>
    )
}