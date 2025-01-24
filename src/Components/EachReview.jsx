import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAllreviewsFetch from '../hooks/useAllreviewsFetch';

const EachReview = ({ review }) => {


  const [, , refetch] = useAllreviewsFetch()


  const [comment, setComment] = useState('')



  // Submit the edited review
  const handleSubmitEdit = () => {


    const newReview = {
      applicationId: review.applicationId,
      comment: comment,
      rating: review.rating,
      reviewDate: review.reviewDate,
      scholarshipName: review.scholarshipName,
      universityName: review.universityName,
      userEmail: review.userEmail,
      userImage: review.userImage,
      userName: review.userName

    }
   
    document.getElementById('my_modal_5').close(); // Close modal
    axios.put(`https://assignment-12-server-ruddy-eight.vercel.app/edit-review/${review?._id}`, newReview)
      .then((res) => {
        Swal.fire('Updated!', 'Your review has been updated.', 'success');
        refetch()
      

      })
      .catch(err => {
        console.error('Error updating review:', err);
        Swal.fire('Error!', 'Failed to update review.', 'error');
      });



  };

  // Delete review function
  const handleDelete = (reviewId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://assignment-12-server-ruddy-eight.vercel.app/delete-review/${reviewId}`)
          .then(() => {
            Swal.fire('Deleted!', 'Your review has been deleted.', 'success');
            refetch()

          })
          .catch(err => {
            console.error('Error deleting review:', err);
            Swal.fire('Error!', 'Failed to delete review.', 'error');
          });
      }
    });
  };



  return (
    <>
      <tr>
        <td className="border px-4 py-2">{review?.scholarshipName}</td>
        <td className="border px-4 py-2">{review?.universityName}</td>
        <td className="border px-4 py-2">{review?.comment}</td>
        <td className="border px-4 py-2">{new Date(review?.reviewDate).toLocaleDateString()}</td>
        <td className="border px-4 py-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => {
              //   setSelectedReview(review); // Set the review to be edited
              document.getElementById('my_modal_5').showModal(); // Open modal
            }}
          >
            Edit
          </button>




          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleDelete(review?._id)}
          >
            Delete
          </button>




        </td>
      </tr>



      {/* Edit Review Modal */}



      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-xl mb-4">Edit Review</h3>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Review Comments</label>
            <textarea
              defaultValue={review?.comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-end">
            <form method="dialog">
              <button className="btn bg-red-500 text-white mr-5">Cancel</button>
            </form>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmitEdit}
            >
              Save Changes
            </button>
          </div>
        </div>
      </dialog>


    </>
  );
};

export default EachReview;
