import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import UseAllAppliedScholarship from '../../hooks/UseAllAppliedScholarship';

const AllAppliedScholarships = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('');

  const [sortOption, setSortOption] = useState('');
  const [sortedScholarships, setSortedScholarships] = useState([]);

  const [allAppliedScholarship, isLoading, error, refetch] = UseAllAppliedScholarship();

  // useEffect to handle sorting logic
  useEffect(() => {
    let sorted = [...allAppliedScholarship];

    if (sortOption === 'appliedDate') {
      sorted.sort((a, b) => new Date(b.dateApplied) - new Date(a.dateApplied));
    } else if (sortOption === 'scholarshipDeadline') {
      sorted.sort((a, b) => new Date(b.application_deadline) - new Date(a.application_deadline));
    }
    setSortedScholarships(sorted);
  }, [sortOption, allAppliedScholarship]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleDetails = (application) => {
    setSelectedApplication(application);
    document.getElementById('details_modal').showModal();
  };

  const handleFeedback = (application) => {
    setSelectedApplication(application);
    document.getElementById('feedback_modal').showModal();
  };

  const handleSubmitFeedback = () => {
    axios.put(`https://assignment-12-server-ruddy-eight.vercel.app/submit-feedback/${selectedApplication._id}`, { feedback })
      .then(() => {
        Swal.fire('Feedback Submitted!', 'The feedback has been added successfully.', 'success');
        document.getElementById('feedback_modal').close();
        setFeedback('');
      })
      .catch((err) => {
        console.error('Error submitting feedback:', err);
        Swal.fire('Error!', 'Failed to submit feedback.', 'error');
      });
  };

  const handleCancelApplication = (applicationId) => {
    axios.put(`https://assignment-12-server-ruddy-eight.vercel.app/cancel-application/${applicationId}`)
      .then(() => {
        Swal.fire('Application Cancelled', 'The application has been cancelled.', 'success');
        refetch();
      })
      .catch((err) => {
        console.error('Error canceling application:', err);
        Swal.fire('Error!', 'Failed to cancel the application.', 'error');
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Applied Scholarships ({sortedScholarships.length})</h2>

      {/* Sorting/Filtering Dropdown */}
      <div className="flex justify-center mb-4">
        <select
          className="border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5202]"
          value={sortOption}
          onChange={handleSortChange}
        >
          <option value="">Sort By</option>
          <option value="appliedDate">Applied Date</option>
          <option value="scholarshipDeadline">Scholarship Deadline</option>
        </select>
      </div>

     <div className='w-[97%] mx-auto overflow-auto'>

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
          {sortedScholarships.map(application => (
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
     </div>

      {/* Details Modal */}
      <dialog id="details_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-xl mb-4">Application Details</h3>
          {selectedApplication && (
            <>
              <p><strong>University:</strong> {selectedApplication.universityName}</p>
              <p><strong>Degree:</strong> {selectedApplication.applyingDegree}</p>
              <p><strong>Scholarship Category:</strong> {selectedApplication.scholarshipCategory}</p>
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
