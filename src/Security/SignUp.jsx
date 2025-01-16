import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import auth from './Firebase';
import { Link } from 'react-router-dom';
import { contextData } from '../Contex';

const SignUp = () => {

  const {googleLogReg}=useContext(contextData)



  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Password Validation
    if (password.length < 6) {
      console.log("Password must be at least 6 characters long");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      console.log("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      console.log("Password must contain at least one special character");
      return;
    }
    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    // try {
    //   await createUserWithEmailAndPassword(auth, email, password);
      
    //   console.log("Registration successful");
    // } catch (error) {
    //   console.log("Error:", error.message);
    // }


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);



      if (user) {
        // Update the profile (set the display name and photo URL)
        updateProfile(user, {
          displayName: name,
          // photoURL: photoUrl
        })
        .then(() => {
          // After successful profile update, set the state
          // setUserData(user);  
          // setDp(photoUrl);    
          // setdisname(name);   
          console.log('Profile updated!');
        })
        .catch((error) => {
          console.error('Error updating profile:', error);
        });
      }




 
    })
    .catch((error) => {
      console.log("Error:", error.message);
   
    });
  


  };

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen authBg">
      <div className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-md blur-container ">
        <h2 className="text-2xl font-bold text-center text-gray-700">Register</h2>
        <form className="mt-6" onSubmit={handleRegister}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:border-indigo-400"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:border-indigo-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:border-indigo-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-indigo-300 focus:outline-none focus:border-indigo-400"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700"
          >
            Register
          </button>
        </form>


        <div className="mt-6 flex justify-center items-center">
          <button
            onClick={googleLogReg}
            className="w-full flex items-center justify-center px-4 py-2 mt-2 text-white bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:bg-red-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M24 9.5c3.2 0 5.9 1.1 8.1 3.2l5.9-5.9C34.9 3.5 29.7 1 24 1 14.9 1 7.4 6.8 4.4 14.8l6.9 5.4C13.3 14.1 18.3 9.5 24 9.5z" />
              <path fill="#34A853" d="M46.1 24.6c0-1.2-.1-2.5-.3-3.6H24v7.1h12.7c-.5 2.5-2 4.7-4.1 6.1l6.4 5c3.8-3.5 6-8.6 6-14.6z" />
              <path fill="#FBBC05" d="M11.3 29.8c-2-1.2-3.6-2.9-4.7-5l-6.9 5.3C4.5 37.7 12.7 43 22 43c5.5 0 10.4-1.8 13.8-4.8l-6.5-5C26.6 34.8 24 35.5 22 35.5c-4.6 0-8.5-2.9-10.7-7z" />
              <path fill="#EA4335" d="M11.3 29.8C9.5 26.8 9.5 23 9.5 23s0-3.8 1.8-6.8l-6.9-5.3C2 16.4 1 19.6 1 23s1 6.6 2.7 9.5l6.6-2.7z" />
            </svg>
            Sign in with Google
          </button>
        </div>



        <p className="mt-4 text-center text-sm text-gray-600">
          You have an account?  
          <Link to="/login" className="text-indigo-600 hover:underline"> Login</Link>
        </p>


      </div>
    </div>
  );
};

export default SignUp;
