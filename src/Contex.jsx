import { signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Security/Firebase"; // Ensure Firebase is correctly initialized
import axios from 'axios'; // Use axios directly here

export const contextData = createContext();

const Contex = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allScholarships, setAllScholarships] = useState([]);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('https://img.icons8.com/?size=100&id=ywULFSPkh4kI&format=png&color=000000');
  const [userData, setUserData] = useState([]);
  const [userRole, setuserRole] = useState('Member');

  










  
  const provider = new GoogleAuthProvider();

  const googleLogReg = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;



if(user){
  const name=user.displayName
  const email=user.email
  const picture=user.photoURL
  const userDataSend={name, email, picture, userRole}
  console.log(userDataSend, 'send this')


     axios.post('http://localhost:5000/userData', userDataSend )
     .then(res=>console.log(res.data))
}


       
        setLoading(false);
      })
      .catch((error) => {
        console.error('Google sign-in error:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        setName(user?.displayName);
        setEmail(user?.email);
        setPicture(user?.photoURL)
        console.log('checker login');


        setLoading(false);
       
      } else {
        console.log('User is signed out');
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const signoutHandle = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        console.log('Signout successful');
        setUserData('')
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const info = {
    loading,
    setLoading,
    allScholarships,
    setAllScholarships,
    googleLogReg,
    signoutHandle,
    userData,
    setName,
    setEmail,
    name,
    email,

    picture,
    setPicture,
    userRole
  };

  return (
    <contextData.Provider value={info}>
      {children}
    </contextData.Provider>
  );
};

export default Contex;
