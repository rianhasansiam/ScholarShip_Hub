import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { contextData } from '../../Contex';
import axios from 'axios';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMGE_JOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const MyProfile = () => {
  const { name, picture, userRole, email, setPicture, userData } = useContext(contextData);

  const [photo, setPhoto] = useState('');
  const [updateButton, setUpdateButton] = useState('Update Photo');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bio, setBio] = useState(''); // New state for bio

  const updatePhoto = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    setUpdateButton('Updating...');

    const imageFormData = new FormData();
    imageFormData.append('image', photo);

    try {
      const imageRes = await axios.post(image_hosting_API, imageFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imageUrl = imageRes.data.data.url;
      setPicture(imageUrl);

      if (userData) {
        updateProfile(userData, {
          photoURL: imageUrl,
        })
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Profile updated!',
              text: 'Your profile photo has been updated.',
              confirmButtonText: 'OK',
            });
            setUpdateButton('Update Photo');
            closeModal();
          });
      }
    } catch (error) {
      console.error('Error uploading the image:', error);
    }
  };

  const openModal = () => {
    const modal = document.getElementById('my_modal_5');
    if (modal) {
      modal.showModal();
    }
  };

  const closeModal = () => {
    const modal = document.getElementById('my_modal_5');
    if (modal) {
      modal.close();
    }
  };

  const handleBioChange = (e) => {
    setBio(e.target.value); // Update bio state
  };

  return (
    <div className="profile-container flex flex-col items-center p-8 md:mx-24 bg-white rounded-lg shadow-lg">
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

      {/* New About Me Section */}
      <div className="w-full mt-6">
        <h2 className="text-lg font-semibold mb-2">About Me</h2>
        <textarea
          placeholder="Tell us something about yourself..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
          value={bio}
          onChange={handleBioChange}
        />
        <p className="mt-2 text-gray-600">{bio}</p>
      </div>

      <div className="flex gap-5 mt-4">
        {/* Role (only if not a regular user) */}
        {userRole && (
          <div className="flex items-center bg-[#ff5202] text-white px-4 py-2 rounded-md">
            <span className="text-sm">{userRole}</span>
          </div>
        )}

        {/* Edit Photo button */}
        <div
          onClick={openModal}  // Open the modal
          className="flex items-center bg-[#ff5202] text-white px-4 py-2 rounded-md cursor-pointer"
        >
          Edit Photo
        </div>
      </div>

      {/* Photo Update Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold mb-4">Update Profile Photo</h3>
          <input
            type="file"
            onChange={(e) => setPhoto(e.target.files[0])}  // Update the picture state when a file is selected
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg file:bg-[#ff5202] file:text-white file:border-none file:px-4 file:py-2 focus:outline-none focus:ring-2 focus:ring-[#ff5202] focus:border-transparent"
          />
          <div className="flex justify-end gap-4 mt-10">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={closeModal}  // Close the modal
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={updatePhoto}  // Trigger photo update
              disabled={isSubmitting}
            >
              {updateButton}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

MyProfile.propTypes = {
  // Define prop types if necessary
};

export default MyProfile;
