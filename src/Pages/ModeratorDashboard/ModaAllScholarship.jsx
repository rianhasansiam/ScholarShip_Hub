import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const ModaAllScholarship = ({scholarship, refetch}) => {

    const navigate= useNavigate()



// Handle deleting a scholarship
  const handleDelete = (scholarshipId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:5000/scholarships/${scholarshipId}`)
          .then(() => {
            Swal.fire('Deleted!', 'The scholarship has been deleted.', 'success');
            refetch()
          })
          .catch(error => {
            console.error('Error deleting scholarship:', error);
            Swal.fire('Error!', 'Failed to delete scholarship.', 'error');
          });
      }
    });
  };














  // Handle editing a scholarship

const [scholarshipName, setScholarshipName]=useState('')
const [univercityName, setUnivercityName]=useState('')
const [subjectName, setSubjectname]=useState('')
const [degree, setDegree]=useState('')
const [applicationFees, setApplicationsFees]=useState('')

// const allStateNull=()=>{
//   setScholarshipName('')
//   setUnivercityName('')
//   setSubjectname('')
//   setDegree('')
//   setApplicationsFees('')
  
// }


  const handleEditSubmit = () => {
// console.log("click" )

const updatedData={
        scholarship_name: scholarshipName || scholarship.scholarship_name,
        university_name: univercityName || scholarship.university_name,
        subject_name: subjectName || scholarship.subject_name,
        degree: degree || scholarship.degree,
        application_fees: applicationFees || scholarship.application_fees,
}




    axios.put(`http://localhost:5000/scholarships/${scholarship?._id}`, updatedData)
      .then(() => {
        Swal.fire('Updated!', 'Scholarship updated successfully.', 'success');
        refetch()
        // setScholarships(prev => prev.map(s => (s._id === selectedScholarship._id ? selectedScholarship : s)));
        document.getElementById('edit_modal').close();
      })
      .catch(error => {
        console.error('Error updating scholarship:', error);
        Swal.fire('Error!', 'Failed to update scholarship.', 'error');
      });
  };

  return (
    <tr >
    <td className="px-4 py-2 border">{scholarship.scholarship_name}</td>
    <td className="px-4 py-2 border">{scholarship.university_name}</td>
    <td className="px-4 py-2 border">{scholarship.subject_name}</td>
    <td className="px-4 py-2 border">{scholarship.degree}</td>
    <td className="px-4 py-2 border">${scholarship.application_fees}</td>
    <td className="px-4 py-2 border">
      <button
        className="mr-2 p-2 bg-blue-500 text-white rounded"
        onClick={() => navigate(`/scholarshipDetails/${scholarship?._id}`)} // Show details in alert
      >
        <FaEye />
      </button>


      <button
        className="mr-2 p-2 bg-yellow-500 text-white rounded"
        onClick={() => {
        //   setSelectedScholarship(scholarship);
        handleEditSubmit
          document.getElementById('edit_modal').showModal(); // Open edit modal
        }}
      >
        <FaEdit />
      </button>



      <button
        className="p-2 bg-red-500 text-white rounded"
        onClick={() => handleDelete(scholarship._id)}
      >
        <FaTrash />
      </button>
    </td>







      {/* Edit Scholarship Modal */}
      {/* {selectedScholarship && ( */}
        <dialog id="edit_modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit Scholarship</h3>
            <div className="form-control mb-4">
              <label>Scholarship Name</label>
              <input
                type="text"
                defaultValue ={scholarship?.scholarship_name}
                onChange={(e) => setScholarshipName(e.target.value )}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-4">
              <label>University Name</label>
              <input
                type="text"
                defaultValue={scholarship?.university_name}
                onChange={(e) => setUnivercityName(e.target.value )}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-4">
              <label>Subject Category</label>
              <input
                type="text"
                defaultValue={scholarship?.subject_name}
                onChange={(e) => setSubjectname(e.target.value )}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-4">
              <label>Degree</label>
              <input
                type="text"
                defaultValue={scholarship.degree}
                onChange={(e) => setDegree(e.target.value )}
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-4">
              <label>Application Fees</label>
              <input
                type="number"
                defaultValue={scholarship?.application_fees}
                onChange={(e) => setApplicationsFees(e.target.value )}
                className="input input-bordered"
              />
            </div>
            <div className="modal-action">
              <button
                className="btn btn-error"
                onClick={() => document.getElementById('edit_modal').close() }
              >
                Cancel
              </button>
              <button
                className="btn btn-success"
                onClick={handleEditSubmit}
              >
                Save Changes
              </button>
            </div>
          </div>
        </dialog>
      {/* )} */}
  </tr>
  )
}

ModaAllScholarship.propTypes = {}

export default ModaAllScholarship