import  { useEffect, useState } from 'react';
import initializeAuthentication from '../components/firebase/firebase.init'
import {getAuth, GoogleAuthProvider, signInWithPopup,signInWithEmailAndPassword,signOut,onAuthStateChanged,createUserWithEmailAndPassword,updateProfile} from "firebase/auth"

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false);

    // firebase auth
    const auth = getAuth();

    // sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(false)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            // save or update existing user to the database
            saveUser(user.email, user.displayName, 'PUT')
            setError('')
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false))
    }

    // sign in existing user
    const processLogin = (email, password,location,history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email, password)
        .then(userLogin => {
            const user = userLogin.user;
            setUser(user)
            const redirect_uri = location.state?.from || '/';
            history.push(redirect_uri)
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
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
            const user = userCredential.user;
            // save user to the database
            saveUser(email,name, 'POST')

            setUserName(name);
            setError('');
        })
        .catch(error => {
            const errorMessage = error.message;
            setError(errorMessage);
        })
        .finally(() => setIsLoading(false))
    }

    // set user name when user register
    const setUserName = (name) => {
        updateProfile(auth.currentUser, {
            displayName : name
        })
        .then(result => {})
        .catch(error => {
            setError(error.message)
        })
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


    // check the logged in user admin or not
    useEffect(() => {
        fetch(`https://limitless-chamber-53235.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])


    // save user to the database
    const saveUser = (email, displayName, method) => {
        const user = {email, displayName}

        fetch('https://limitless-chamber-53235.herokuapp.com/users', {
            method : method,
            headers : {
                'content-type' : 'application/json'
            },
            body : JSON.stringify(user)
        })
        .then()

    }



    return {
        user,
        admin,
        error,
        isLoading,
        signInUsingGoogle,
        processLogin,
        createNewUser,
        logOut
    }
};

export default useFirebase;