// import React from 'react'
// import PropTypes from 'prop-types'

// const EachPersonalApplication = props => {




    
//   return (
//     <tr key={app._id} className="border-t">
//     <td className="py-3 px-4">{app.universityName}</td>
//     <td className="py-3 px-4">{app.universityAddress}</td>
//     <td className="py-3 px-4">{app.feedback || 'N/A'}</td>
//     <td className="py-3 px-4">{app.subjectCategory}</td>
//     <td className="py-3 px-4">{app.appliedDegree}</td>
//     <td className="py-3 px-4">{app.applicationFees}</td>
//     <td className="py-3 px-4">{app.serviceCharge}</td>
//     <td className={`py-3 px-4 font-bold ${app.status === 'rejected' ? 'text-red-600' : ''}`}>
//       {app.status}
//     </td>
//     <td className="py-3 px-4 space-x-2">
//       {/* Details Button */}
//       <button
//         className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
//         onClick={() => console.log('View details of application', app._id)}
//       >
//         Details
//       </button>

//       {/* Edit Button (only if status is pending) */}
//       <button
//         className={`px-3 py-1 rounded-lg ${app.status === 'pending' ? 'bg-yellow-500 text-white hover:bg-yellow-600' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
//         onClick={() => handleEdit(app.status)}
//       >
//         Edit
//       </button>

//       {/* Cancel Button */}
//       <button
//         className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
//         onClick={() => handleCancel(app._id)}
//       >
//         Cancel
//       </button>

//       {/* Add Review Button */}
//       <button
//         className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
//         onClick={() => console.log('Add review for application', app._id)}
//       >
//         Add Review
//       </button>
//     </td>
//   </tr>
//   )
// }

// EachPersonalApplication.propTypes = {}

// export default EachPersonalApplication