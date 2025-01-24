import { signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Security/Firebase"; // Ensure Firebase is correctly initialized
import axios from 'axios'; // Use axios directly here

import useAxiosPublic from "./hooks/useAxiosPublic";
import Swal from "sweetalert2";

export const contextData = createContext();

const Contex = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allScholarships, setAllScholarships] = useState([]);
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [picture, setPicture] = useState('https://img.icons8.com/?size=100&id=ywULFSPkh4kI&format=png&color=000000');
  const [userData, setUserData] = useState();
  const [userRole, setuserRole] = useState('Member');
  const [redirectPath, setRedirectPath] = useState('/');





  useEffect(() => {


    const fetchData = async () => {
      try {
        setLoading(true)
        if (userData) {

          // Fetch user's user Role
          const res = await axios.get(`https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/userInfo?email=${userData?.email}`);

          setuserRole(res.data?.userRole);
      
          setLoading(false)

        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };



    fetchData();
  }, [userData]);








  const provider = new GoogleAuthProvider();

  const googleLogReg = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;




        if (user) {
          const name = user.displayName
          const email = user.email
          const picture = user.photoURL
          const userRole = userRole
          
          const userDataSend = { name, email, picture, userRole }



          axios.post('https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/userData', userDataSend)

        }



        setLoading(false);
      })
      .catch((error) => {
        console.error('Google sign-in error:', error);
        setLoading(false);
      });
  };




  const authenticateUser = async (email) => {
    try {
      const response = await axios.post('https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/jwt', { email });

      // Assuming the token is in the response body
      const token = response.data.token; // Adjust according to your API response structure

      // Store the token in localStorage
      localStorage.setItem('access-token', token);


    } catch (error) {
      console.error('Authentication failed:', error);
    }
  }






  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData(user);
        setName(user?.displayName);
        setEmail(user?.email);
        if (user.photoURL) {
          setPicture(user?.photoURL)
        }



        authenticateUser(user?.email)



        setLoading(false);

      } else {

        localStorage.removeItem('access-token')

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

        Swal.fire({
          icon: 'info',
          title: 'Signed Out',
          text: 'You have been signed out successfully!',
          confirmButtonText: 'OK',
        });
        setUserData(null)
        setEmail(null)
        setName(null)
        setPicture('https://img.icons8.com/?size=100&id=ywULFSPkh4kI&format=png&color=000000')
        setLoading(false);
        setuserRole('Member')
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
    userRole,
    setRedirectPath,
    redirectPath,


  };

  return (
    <contextData.Provider value={info}>
      {children}
    </contextData.Provider>
  );
};

export default Contex;
