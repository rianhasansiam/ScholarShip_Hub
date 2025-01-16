import { signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Security/Firebase";  // Ensure Firebase is correctly initialized

export const contextData = createContext();

const Contex = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allScholarships, setAllScholarships] = useState([]);
  const [userData, setUserData] = useState([]);
  // console.log(userData)
  console.log(loading)

  const provider = new GoogleAuthProvider();

  const googleLogReg = () => {
    setLoading(true)
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // After successful Google sign-in, update the state
      // setUserData(user);
      // setDp(user.photoURL);  // Set Google user dp
      // setdisname(user.displayName);  // Set Google user display name
     

 setLoading(false)
    })
    .catch((error) => {
      console.error('Google sign-in error:', error);
    });
  };









  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // setUserData(user);
        // setDp(user.photoURL);
        // setdisname(user.displayName);

        setUserData(user)

        console.log('checker login')
        setLoading(false)
  
  
      // if(user.email){
      //   axios.post('http://localhost:5000/jwt',user.email, {withCredentials:true})
      //   .then(res=> console.log(res.data))
  
  
      // }
      // else{
      //   axios.post('http://localhost:5000/logout',{},{withCredentials:true})
      //   .then(res=>console.log("logout",res.data))
      // }
  
  
  
      } else {
        console.log('User is signed out');
        // setUserData(null);
      }
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  

  





  const signoutHandle=()=>{
    setLoading(true)
    signOut(auth).then(() => {
     
      // setUserData(null)
      console.log('Signout successful')
      // toast.warn("Signout successful", {
      //   position: "top-center"
      // })
  
      // axios.post('http://localhost:5000/logout',{},{withCredentials:true})
      // .then(res=>console.log("logout",res.data))
      // Sign-out successful.

      setLoading(false)
    }).catch(() => {
  
      
    });
    
  }
  









  const info = {
    loading,
    setLoading,
    allScholarships,
    setAllScholarships,
    googleLogReg,
    signoutHandle,
    userData
  };

  return (
    <contextData.Provider value={info}>
      {children}
    </contextData.Provider>
  );
};

export default Contex;
