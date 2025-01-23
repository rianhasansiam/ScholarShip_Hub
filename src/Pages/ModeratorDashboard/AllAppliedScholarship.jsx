import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import UseAllAppliedScholarship from '../../hooks/UseAllAppliedScholarship';

const AllAppliedScholarships = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  // console.log(status)




const [allAppliedScholarship, isLoading, error, refetch] = UseAllAppliedScholarship()



// console.log(selectedApplication)


  // Handle opening the details modal
  const handleDetails = (application) => {
    setSelectedApplication(application);
    document.getElementById('details_modal').showModal();

  };

  // Handle opening the feedback modal
  const handleFeedback = (application) => {
    setSelectedApplication(application);
    document.getElementById('feedback_modal').showModal();
  
  };

  // Submit feedback
  const handleSubmitFeedback = () => {
    axios.put(`http://localhost:5000/submit-feedback/${selectedApplication._id}`, { feedback })
      .then(() => {
        Swal.fire('Feedback Submitted!', 'The feedback has been added successfully.', 'success');
        document.getElementById('feedback_modal').close();
        setFeedback('')
      })
      .catch((err) => {
        console.error('Error submitting feedback:', err);
        Swal.fire('Error!', 'Failed to submit feedback.', 'error');
      });
  };



  // Cancel application
  const handleCancelApplication = (applicationId) => {
    axios.put(`http://localhost:5000/cancel-application/${applicationId}`)
      .then(() => {
        Swal.fire('Application Cancelled', 'The application has been cancelled.', 'success');
        refetch()
        // Update the status to rejected in the UI (assuming you store the state for the list of applications)
        // For example: update the application status in the appliedScholarships array here
      })
      .catch((err) => {
        console.error('Error canceling application:', err);
        Swal.fire('Error!', 'Failed to cancel the application.', 'error');
      });
  };

  



  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Applied Scholarships ({allAppliedScholarship.length})</h2>

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">University Name</th>
            <th className="border px-4 py-2">Degree</th>
            <th className="border px-4 py-2">Scholarship Category</th>
            <th className="border px-4 py-2">Application Status</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allAppliedScholarship.map(application => (
            <tr key={application._id}>
              <td className="border px-4 py-2">{application.universityName}</td>
              <td className="border px-4 py-2">{application.applyingDegree}</td>
              <td className="border px-4 py-2">{application.scholarshipCategory}</td>
              <td className="border px-4 py-2">{application.status}</td>
              <td className="border px-4 py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleDetails(application)}
                >
                  Details
                </button>
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleFeedback(application)}
                >
                  Feedback
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleCancelApplication(application._id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>






      {/* Details Modal */}
      <dialog id="details_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-xl mb-4">Application Details</h3>
          {selectedApplication && (
            <>
              <p><strong>University:</strong> {selectedApplication.universityName}</p>
              <p><strong>Degree:</strong> {selectedApplication.applyingDegree}</p>
              <p><strong>Scholarship Category:</strong> {selectedApplication.scholarshipCategory}</p>
              {/* You can add more details here */}
              <form method="dialog">
                <button className="btn bg-red-500 text-white mt-4">Close</button>
              </form>
            </>
          )}
        </div>
      </dialog>

      {/* Feedback Modal */}
      <dialog id="feedback_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-xl mb-4">Provide Feedback</h3>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Enter your feedback"
          />
          <div className="flex justify-end">
            <form method="dialog">
              <button className="btn bg-red-500 text-white mr-5">Cancel</button>
            </form>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmitFeedback}
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </dialog>



    </div>
  );
};

export default AllAppliedScholarships;
