import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; // Import SweetAlert2
import { useLocation, useNavigate } from 'react-router-dom';
import useAllDataFetch from '../hooks/useAllDataFetch';
import { contextData } from '../Contex';

const image_hosting_key = import.meta.env.VITE_IMGE_JOSTING_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const ApplicationForm = () => {
  const locationPath = useLocation();
  const _id = locationPath.pathname.split('/')[2];

  const navigate = useNavigate()

  // Fetch scholarship details (custom hook for fetching data)
  const [scholarshipDetails, isLoading] = useAllDataFetch(_id);
  const { userData } = useContext(contextData);

  const [user_id, setuser_id] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user's user _id
        const res = await axios.get(`https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/userInfo?email=${userData?.email}`);
        setuser_id(res.data._id);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, [userData]);


  const [phoneNumber, setPhoneNumber] = useState('');
  const [photo, setPhoto] = useState(null);
  const [address, setAddress] = useState({ village: '', district: '', country: '' });
  const [gender, setGender] = useState('');
  const [applyingDegree, setApplyingDegree] = useState('');
  const [sscResult, setSscResult] = useState('');
  const [hscResult, setHscResult] = useState('');
  const [studyGap, setStudyGap] = useState('No');


  const universityName = scholarshipDetails.university_name;
  const scholarshipCategory = scholarshipDetails.scholarship_category;
  const subjectCategory = scholarshipDetails.subject_name;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submit, setSubmit] = useState('Submit Application');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; // If the form is already submitting, do nothing

    setIsSubmitting(true);
    setSubmit('Processing.....')

    // Handle the image upload first
    const imageFormData = new FormData();
    imageFormData.append('image', photo);

    try {
      const imageRes = await axios.post(image_hosting_API, imageFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imageUrl = imageRes.data.data.url;

      

      // Now handle the form submission after getting the image URL
      const formData = {
        phoneNumber,
        photo: imageUrl, // Use the uploaded image URL
        address,
        gender,
        applyingDegree,
        sscResult,
        hscResult,
        studyGap,
        universityName,
        scholarshipCategory,
        subjectCategory,
        name: userData.displayName,
        email: userData.email,
        user_id,
        scholarshipId: _id,
        dateApplied: new Date(),
        application_deadline: scholarshipDetails?.application_deadline
      };


      // Submit the complete form data to your API
      const response = await axios.post('https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/apply-scholarship', formData);

      if (response.status === 200) {
        Swal.fire('Application Submitted!', 'Your scholarship application has been submitted successfully.', 'success');
        navigate('/allscholarship')
      } else {
        Swal.fire('Error!', 'There was an error submitting your application. Please try again later.', 'error');
      }
    } catch (error) {
      console.error('Error uploading image or submitting application:', error);
      Swal.fire('Error!', 'There was an error with your application. Please try again later.', 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Apply for Scholarship</h2>

      {/* Applicant phone number */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input
          type="text"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Applicant photo */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Photo</label>
        <input
          type="file"
          onChange={(e) => setPhoto(e.target.files[0])}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg file:bg-indigo-500 file:text-white file:border-none file:px-4 file:py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* Applicant address */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Village</label>
          <input
            type="text"
            placeholder="Village"
            value={address.village}
            onChange={(e) => setAddress({ ...address, village: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">District</label>
          <input
            type="text"
            placeholder="District"
            value={address.district}
            onChange={(e) => setAddress({ ...address, district: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
          <input
            type="text"
            placeholder="Country"
            value={address.country}
            onChange={(e) => setAddress({ ...address, country: e.target.value })}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Gender dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Applying Degree dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Applying for Degree</label>
        <select
          value={applyingDegree}
          onChange={(e) => setApplyingDegree(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="">Select Degree</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Masters">Masters</option>
        </select>
      </div>

      {/* SSC and HSC Results */}
      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">SSC Result</label>
          <input
            type="text"
            placeholder="SSC Result"
            value={sscResult}
            onChange={(e) => setSscResult(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">HSC Result</label>
          <input
            type="text"
            placeholder="HSC Result"
            value={hscResult}
            onChange={(e) => setHscResult(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Study Gap dropdown */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Study Gap</label>
        <select
          value={studyGap}
          onChange={(e) => setStudyGap(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        disabled={isSubmitting} // Disable the button if submitting
      >
        {submit}
      </button>
    </form>
  );
};

export default ApplicationForm;
