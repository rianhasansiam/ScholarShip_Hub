import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { contextData } from '../Contex';
import Swal from 'sweetalert2';

const EditScholarshipApplication = () => {
  const locationPath = useLocation();
  const _id = locationPath.pathname.split('/')[3]; 
  const { userData } = useContext(contextData);

  const navigate = useNavigate(); // For redirecting after saving

  const [phoneNumber, setPhoneNumber] = useState('');
  const [village, setVillage] = useState('');
  const [district, setDistrict] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('');
  const [sscResult, setSscResult] = useState('');
  const [hscResult, setHscResult] = useState('');
  const [studyGap, setStudyGap] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [applyingDegree, setApplyingDegree] = useState('');

  const [applicationData, setApplicationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch the existing application data on component load
  useEffect(() => {
    const email = userData?.email;

    axios.get(`http://localhost:5000/edit-myApplication`, {
      params: {
        _id,
        email,
      },
    })
      .then((response) => {
        const data = response.data;
        setApplicationData(data);

        // Prepopulate the state with existing data
        setPhoneNumber(data.phoneNumber);
        setVillage(data.address.village);
        setDistrict(data.address.district);
        setCountry(data.address.country);
        setGender(data.gender);
        setSscResult(data.sscResult);
        setHscResult(data.hscResult);
        setStudyGap(data.studyGap);
        setApplyingDegree(data.applyingDegree);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching application:', err);
        setError('Failed to load application data');
        setLoading(false);
      });
  }, [_id, userData?.email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      phoneNumber,
      address: {
        village,
        district,
        country,
      },
      gender,
      sscResult,
      hscResult,
      studyGap,
      applyingDegree,
    };


console.log(formData)
    axios.put(`http://localhost:5000/edit-my-application/${_id}?email=${userData.email}`, formData)
    .then(() => {
      Swal.fire({
        title: 'Success!',
        text: 'Application updated successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/userdashboard/myapplication'); // Redirect after user clicks OK
      });
    })
    .catch((err) => {
      console.error('Error updating application:', err);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to update application',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    })


  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Scholarship Application</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="mb-4 grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Village</label>
            <input
              type="text"
              name="village"
              value={village}
              onChange={(e) => setVillage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Village"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">District</label>
            <input
              type="text"
              name="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="District"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Country"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Gender</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">SSC Result</label>
            <input
              type="text"
              name="sscResult"
              value={sscResult}
              onChange={(e) => setSscResult(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="SSC Result"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">HSC Result</label>
            <input
              type="text"
              name="hscResult"
              value={hscResult}
              onChange={(e) => setHscResult(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="HSC Result"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Study Gap</label>
          <select
            name="studyGap"
            value={studyGap}
            onChange={(e) => setStudyGap(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {/* Applying for Degree Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Applying for Degree</label>
          <select
            name="applyingDegree"
            value={applyingDegree}
            onChange={(e) => setApplyingDegree(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="" disabled>Select Degree</option>
            <option value="BBA">BBA</option>
            <option value="BSc">BSc</option>
            <option value="MSc">MSc</option>
            <option value="PhD">PhD</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            onClick={()=>navigate(-1)}
            className="bg-[#ff5202] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Back
          </button>


          <button
            type="submit"
            className="bg-[#ff5202] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Update Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditScholarshipApplication
