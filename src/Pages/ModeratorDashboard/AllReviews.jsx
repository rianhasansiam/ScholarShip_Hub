import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAllUserReviews from '../../hooks/useAllUserReviews';
import Loading from '../Loading';

const AllReviews = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch all reviews from the server

  const [allreviews, isLoading, refetch] = useAllUserReviews()



  // Handle deleting a review
  const handleDelete = (reviewId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "This action cannot be undone!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/delete-review/${reviewId}`)
          .then(() => {
            Swal.fire('Deleted!', 'The review has been deleted.', 'success');
            refetch()
          })
          .catch(error => {
            console.error('Error deleting review:', error);
            Swal.fire('Error!', 'Failed to delete review.', 'error');
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">All Reviews ({allreviews.length})</h2>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {allreviews.length > 0 ? (

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

              {

                allreviews.map(review => (
                  <div key={review._id} className="border rounded-lg shadow-md p-4">
                    <div className="flex items-center mb-4">
                      <img
                        src={review?.userImage || 'https://via.placeholder.com/50'}
                        alt="Reviewer"
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="text-lg font-bold">{review?.userName}</h4>
                        <p className="text-gray-600">
                          {new Date(review?.reviewDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p>
                        <strong>University:</strong> {review?.universityName}
                      </p>
                      <p>
                        <strong>Subject Category:</strong> {review?.subjectCategory}
                      </p>
                      <p>
                        <strong>Rating:</strong> {review?.rating}{' '}
                        <i className="fa-solid fa-star text-[15px] text-orange-600"></i>
                      </p>
                      <p>
                        <strong>Comments:</strong> {review?.comment}
                      </p>
                    </div>

                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(review._id)}
                    >
                      Delete
                    </button>
                  </div>
                ))
              }

            </div>

          ) : (
            <h1 className="font-bold text-center">
              No Reviews Available For Now....!
            </h1>
          )}
        </>
      )}
    </div>

  );
};

export default AllReviews;
