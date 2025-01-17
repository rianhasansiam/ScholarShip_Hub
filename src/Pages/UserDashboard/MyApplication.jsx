import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import { contextData } from '../../Contex';
import Swal from 'sweetalert2';


const MyApplication = () => {
//   const { email } = useContext(contextData); // Assuming user email is available in context
//   const [applications, setApplications] = useState([]);

//   // Fetch the user's applied scholarships from the backend
//   useEffect(() => {
//     const fetchApplications = async () => {
//       try {
//         const res = await axios.get(`http://localhost:5000/userApplications/${email}`);
//         setApplications(res.data);
//       } catch (error) {
//         console.error('Error fetching applications:', error);
//       }
//     };
//     fetchApplications();
//   }, [email]);

//   // Handle the edit button click
//   const handleEdit = (status) => {
//     if (status === 'pending') {
//       // Allow the user to edit the application
//       console.log('Edit the application');
//     } else {
//       // Show SweetAlert if the application is not in pending status
//       Swal.fire({
//         icon: 'warning',
//         title: 'Cannot Edit Application',
//         text: 'You can only edit the application when it is in pending status!',
//       });
//     }
//   };

//   // Handle cancel application
//   const handleCancel = (id) => {
//     // Call the API to cancel the application and update the state
//     Swal.fire({
//       icon: 'warning',
//       title: 'Are you sure?',
//       text: 'Do you want to cancel this application?',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, cancel it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Perform the cancellation logic
//         axios.patch(`http://localhost:5000/cancelApplication/${id}`)
//           .then((res) => {
//             setApplications(applications.map(app => app._id === id ? { ...app, status: 'rejected' } : app));
//             Swal.fire('Cancelled!', 'Your application has been cancelled.', 'success');
//           })
//           .catch((error) => {
//             console.error('Error cancelling application:', error);
//           });
//       }
//     });
//   };

  return (

    <h1>hii</h1>
    // <div className="p-8">
    //   <h1 className="text-3xl font-bold mb-6">My Applications</h1>
    //   <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
    //     <thead>
    //       <tr className="text-left bg-gray-100">
    //         <th className="py-3 px-4">University Name</th>
    //         <th className="py-3 px-4">University Address</th>
    //         <th className="py-3 px-4">Feedback</th>
    //         <th className="py-3 px-4">Subject Category</th>
    //         <th className="py-3 px-4">Applied Degree</th>
    //         <th className="py-3 px-4">Application Fees</th>
    //         <th className="py-3 px-4">Service Charge</th>
    //         <th className="py-3 px-4">Application Status</th>
    //         <th className="py-3 px-4">Actions</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {applications.map((app) => (
            
    //       ))}
    //     </tbody>
    //   </table>
    // </div>
  );
};

export default MyApplication;
