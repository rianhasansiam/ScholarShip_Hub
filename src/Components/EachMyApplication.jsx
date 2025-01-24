import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import useAllDataFetch from '../hooks/useAllDataFetch';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import AddReviewButton from './AddReviewButton';

const EachMyApplication = ({ application, refetch }) => {
  const [scholarshipDetails, isLoading] = useAllDataFetch(application?.scholarshipId);



  const navigate = useNavigate()

  const handleEditClick = (application) => {
    if (application.status === 'pending') {
      // Edit functionality
      navigate(`/userdashboard/editApplication/${application?._id}`)
   
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Cannot Edit',
        text: 'You cannot edit the application as it is already in processing or completed status.',
      });
    }
  };



  const handleCancelClick = (applicationId) => {
   
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, cancel it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axios.delete(`https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/cancel-application/${applicationId}`);
          Swal.fire('Cancelled!', 'Your application has been canceled.', 'success');
          refetch(); // Optional refresh after cancel
        } catch (error) {
          console.error('Error canceling application:', error);
        }
      }
    });
  };

  const [universityName, setUniversityName] = useState('');
  const [address, setAddress] = useState('');
  const [feedback, setFeedback] = useState('');
  const [subjectCategory, setSubjectCategory] = useState('');
  const [appliedDegree, setAppliedDegree] = useState('');
  const [applicationFees, setApplicationFees] = useState('');
  const [serviceCharge, setServiceCharge] = useState('');
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (application) {
      setUniversityName(application?.universityName || '');
      setAddress(application?.address?.country || '');
      setFeedback(application?.feedback || 'No Feedback Given.');
      setSubjectCategory(application?.subjectCategory || '');
      setAppliedDegree(application?.applyingDegree || '');
      setApplicationFees(scholarshipDetails?.application_fees || '');
      setServiceCharge(scholarshipDetails?.service_charge || '');
      setStatus(application?.status || '');
    }
  }, [application, scholarshipDetails]);

  return (
    <tr className="text-sm text-gray-700">
      <td className="px-4 py-2">{universityName}</td>
      <td className="px-4 py-2">{address}</td>
      <td className="px-4 py-2">{feedback}</td>
      <td className="px-4 py-2">{subjectCategory}</td>
      <td className="px-4 py-2">{appliedDegree}</td>
      <td className="px-4 py-2">${applicationFees}</td>
      <td className="px-4 py-2">{serviceCharge}</td>
      <td className="px-4 py-2">{status}</td>
      <td className="px-4 py-2">
        <div className="dropdown dropdown-bottom dropdown-end">
          {showModal && <AddReviewButton application={application} showModal={showModal} setShowModal={setShowModal} scholarshipDetails={scholarshipDetails}></AddReviewButton>}
          <a id='y-anchor-element'>


            <div id='y-anchor-element' tabIndex={0} role="button" className="btn m-1 bg-[#ff5202] text-white">Actions</div>
          </a>

          <Tooltip
            anchorSelect="#y-anchor-element"
            content="scroll Down"
          />

          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow gap-3 ">
            <li>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mr-2 block"
                onClick={() => handleEditClick(application)}
          
              >
                Edit
              </button>
            </li>
            <li>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2 block"
                onClick={() => navigate(`/scholarshipDetails/${scholarshipDetails?._id}`)}
              >
                Details
              </button>
            </li>
            <li>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 block"
                onClick={() => handleCancelClick(application._id)}
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded block"
       
                onClick={() => setShowModal(true)}
              >
                Add Review
              </button>


            </li>
          </ul>



        </div>


      </td>
    </tr>
  );
};

export default EachMyApplication;
