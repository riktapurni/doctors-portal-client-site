import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,signInWithEmailAndPassword,  onAuthStateChanged, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
initializeFirebase();
const useFirebase = () =>{
const [user, setUser] = useState({});
// const [error, setError] = useState({});
const [authError, setAuthError] = useState(''); //jehetu text tai emty string
const [isLoading, setIsLoading] = useState(true);
const [admin, setAdmin] = useState(false);  //who is admin or not
const [token, setToken] = useState('');
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

//Google handler
const signInUsingGoogle = (location, navigate) => {
         signInWithPopup(auth, googleProvider)
       .then((result) =>{
         const  user = result.user
           console.log(result.user);
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
          //  setUser(result.user);
           const destination = location?.state?.from || '/';
            navigate(destination);
            
       })
        .catch(error => {
           setAuthError(error.message); //default firebase error
        })
    }
//register handling
    const registerUser = (email, password, name, navigate) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user);
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                 // save user to the database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                navigate('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

const loginUser = (email, password, location, navigate) =>{
    setIsLoading(true);
signInWithEmailAndPassword(auth, email, password)
  .then(result => {
            const user = result.user;
            console.log(user);
            const destination = location?.state?.from || '/';
            navigate(destination);
            setAuthError('');
        })
        .catch(error => {
           setAuthError(error.message); 
        })
        .finally(() => setIsLoading(false));
}
//signOut
const logOut = () =>{
    setIsLoading(true);
      signOut(auth)
      .then(() =>{
          setUser({});
      })
      .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));
  }
  //Observer user state
  useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
  if (user) {
    setUser(user);
    // jwt 
    getIdToken(user)
    .then(idToken => {
      // console.log(idToken)
      setToken(idToken)
    })
  }else{
      setUser({})
  }
  setIsLoading(false);
});
return () => unsubscribed;
  }, [auth]);
//who is admin or not
 useEffect(() => {
        fetch(`https://gentle-falls-83113.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email]);

    // save user to the database
 const saveUser = (email, displayName, method) => {
          const user = {email, displayName}; //property er name r property er value j variable a ache ta same tai email and displayName rakha hoiche/
          //send data to the backend
          fetch('https://gentle-falls-83113.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
  }
  
return{ user, admin, isLoading, authError, registerUser, loginUser, signInUsingGoogle, token, logOut}
}
export default useFirebase;