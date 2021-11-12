import  { useEffect, useState } from 'react';
import initializeAuthentication from '../components/firebase/firebase.init'
import {getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword,signOut,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile} from "firebase/auth"

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    // firebase auth
    const auth = getAuth();

    // sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(false)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
    }

    // sign in existing user
    const processLogin = (email, password) => {
        setIsLoading(false)
        signInWithEmailAndPassword(auth,email, password)
        .then(userLogin => {
            const user = userLogin.user;
            setUser(user)
            setError('')
        })
        .catch(error2 => {
            const error = error2.message;
            setError(error);
        })
        .finally(() => setIsLoading(false))
    }



    // register or creating a new user
    const createNewUser = (name,email, password) => {
        setIsLoading(false)
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            setUserName(name);
            setError('');
            console.log(user);
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
        .finally(() => setIsLoading(false))
    }

    // set user name when user register
    const setUserName = (name) => {
        setIsLoading(false)
        updateProfile(auth.currentUser, {
            displayName : name
        })
        .then(result => {})
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
    };

    // sign out existing user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then( () => {
            setUser({})
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
    }

    // signed in user observer
    useEffect( () => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user){
                setUser(user)
            }else (
                setUser({})
            )
            setIsLoading(false)
        })
        return () => unsubscribed;
    }, [])




    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        processLogin,
        createNewUser,
        logOut
    }
};

export default useFirebase;