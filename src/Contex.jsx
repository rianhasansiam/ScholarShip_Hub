import { signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Security/Firebase";  // Ensure Firebase is correctly initialized

export const contextData = createContext();

const Contex = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [allScholarships, setAllScholarships] = useState([]);

  const provider = new GoogleAuthProvider();

  const googleLogReg = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      // After successful Google sign-in, update the state
      // setUserData(user);
      // setDp(user.photoURL);  // Set Google user dp
      // setdisname(user.displayName);  // Set Google user display name
     

      console.log(user)
    })
    .catch((error) => {
      console.error('Google sign-in error:', error);
    });
  };









  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // setUserData(user);
        // setDp(user.photoURL);
        // setdisname(user.displayName);

        console.log('checker login')
  
  
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
    signOut(auth).then(() => {
     
      // setUserData(null)
      console.log('Signout successful')
      // toast.warn("Signout successful", {
      //   position: "top-center"
      // })
  
      // axios.post('http://localhost:5000/logout',{},{withCredentials:true})
      // .then(res=>console.log("logout",res.data))
      // Sign-out successful.
    }).catch(() => {
  
      
    });
    
  }
  









  const info = {
    loading,
    setLoading,
    allScholarships,
    setAllScholarships,
    googleLogReg,
    signoutHandle
  };

  return (
    <contextData.Provider value={info}>
      {children}
    </contextData.Provider>
  );
};

export default Contex;
