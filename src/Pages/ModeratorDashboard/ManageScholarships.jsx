import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import useAllScholarshipData from '../../hooks/useAllScholarshipData';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';
import ModaAllScholarship from './ModaAllScholarship';


const ManageScholarships = () => {
  // const [allscholarshipData, isPending, refetch] = useAllScholarshipData()
  const [allscholarshipData, isLoading, error, refetch] = useAllScholarshipData()

//   console.log(allscholarshipData)

// const [loading, setLoading]= useState(false)
//   const [renderScholarship, setRenderScholarship] = useState([]);




// useEffect(()=>{
//   setLoading(true)
//   const fetchingData=async()=>{
//     const res= await axios.get('http://localhost:5000/allscholarship')
//     setRenderScholarship(res.data)
//     // console.log(res.data)
//     setLoading(false)
    
//   }
//   fetchingData()
//   refetch()

// },[])


  // const [selectedScholarship, setSelectedScholarship] = useState(null);
  // console.log(allscholarshipData)

// useEffect(()=>{
//   refetch()
//   setRenderScholarship(allscholarshipData)
// },[allscholarshipData])
  

  // Fetch scholarships from the server
  // useEffect(() => {
  //   setScholarships(scholarshipDetails)
  // }, []);



  // Handle deleting a scholarship
  // const handleDelete = (scholarshipId) => {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "This action cannot be undone!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, cancel!',
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       axios.delete(`http://localhost:5000/scholarships/${scholarshipId}`)
  //         .then(() => {
  //           Swal.fire('Deleted!', 'The scholarship has been deleted.', 'success');
  //           setScholarships(prev => prev.filter(scholarship => scholarship._id !== scholarshipId));
  //         })
  //         .catch(error => {
  //           console.error('Error deleting scholarship:', error);
  //           Swal.fire('Error!', 'Failed to delete scholarship.', 'error');
  //         });
  //     }
  //   });
  // };

  // Handle editing a scholarship
  // const handleEditSubmit = () => {
  //   axios.put(`http://localhost:5000/scholarships/${selectedScholarship?._id}`, selectedScholarship)
  //     .then(() => {
  //       Swal.fire('Updated!', 'Scholarship updated successfully.', 'success');
  //       setScholarships(prev => prev.map(s => (s._id === selectedScholarship._id ? selectedScholarship : s)));
  //       document.getElementById('edit_modal').close();
  //     })
  //     .catch(error => {
  //       console.error('Error updating scholarship:', error);
  //       Swal.fire('Error!', 'Failed to update scholarship.', 'error');
  //     });
  // };

  return (

    <>
    {isLoading?(<Loading></Loading>)
    : 
    ( <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Scholarships ({allscholarshipData?.length})</h2>
      <table className="min-w-full bg-white  ">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Scholarship Name</th>
            <th className="px-4 py-2 border">University Name</th>
            <th className="px-4 py-2 border">Subject Category</th>
            <th className="px-4 py-2 border">Degree</th>
            <th className="px-4 py-2 border">Application Fees</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
  {allscholarshipData && allscholarshipData.length > 0 ? (
    allscholarshipData.map((scholarship) => (
      <ModaAllScholarship key={scholarship._id} scholarship={scholarship} refetch={refetch}></ModaAllScholarship>
    ))
  ) : (
    <tr>
      <Loading></Loading>
    </tr>
  )}
</tbody>

      </table>




    
    </div>)}
    </>
   
  );
};

export default ManageScholarships;



















