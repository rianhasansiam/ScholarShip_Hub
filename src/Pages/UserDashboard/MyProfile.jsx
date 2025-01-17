import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { contextData } from '../../Contex';


const MyProfile = () => {
  const { name, picture, userRole, email } = useContext(contextData); // Assuming you get these details from context
  
  return (


<div className="profile-container flex flex-col items-center p-8 md:mx-24 bg-white rounded-lg shadow-lg ">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      {/* User Image */}
      {picture ? (
        <img
          src={picture}
          alt={name}
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
      ) : (
        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
      )}

      {/* User Name */}
      <p className="text-xl font-semibold text-gray-700 mb-2">{name}</p>

      {/* Email */}
      <p className="text-gray-500 mb-4">{email}</p>

      {/* Role (only if not a regular user) */}
      {userRole && userRole !== 'regular' && (
        <div className="flex items-center bg-[#ff5202] text-white px-4 py-2 rounded-md">
          <span className="text-sm">{userRole}</span>
        </div>
      )}

      {/* Additional user info (add as needed) */}
      {/* For example, account creation date, bio, etc. */}
    </div>



  );
};

MyProfile.propTypes = {
  // Define prop types if necessary
};

export default MyProfile;
