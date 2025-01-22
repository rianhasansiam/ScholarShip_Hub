import React, { useContext, useState } from 'react';
 // Assuming you have Auth context for logged-in user data
import { contextData } from '../Contex';
import axios from 'axios';

const AddReviewButton = ({ application, setShowModal, showModal }) => {


    
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const { userData } = useContext(contextData); // Logged in user info from auth context
    // console.log(showModal)

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    // Create the review object
    const reviewData = {
        schorshipId: application._id,
      scholarshipName: application?.name,
      universityName: application?.universityName,
      universityId: application?.universityId,
      userName: userData?.displayName,
      userEmail: userData?.email,
      userImage: userData?.photoURL || '', // Optional
      rating,
      comment,
      reviewDate: new Date().toISOString(),
    };

    // console.log("Review Submitted:", reviewData);


       try {
        const res= await axios.post('http://localhost:5000/add-review',reviewData)
        console.log(res.data)
        setShowModal(false)
        } catch (error) {
          console.log(error);
        }
   
    
  };

  return (

     


    
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Add Review for {application.name}</h3>
            <form onSubmit={handleSubmit}>
              {/* Rating input */}
              <div className="form-control">
                <label className="label">Rating</label>
                <input 
                  type="number" 
                  className="input input-bordered" 
                  value={rating} 
                  onChange={(e) => setRating(e.target.value)} 
                  min="1" max="5"
                  required
                />
              </div>

              {/* Comment input */}
              <div className="form-control">
                <label className="label">Comment</label>
                <textarea 
                  className="textarea textarea-bordered" 
                  value={comment} 
                  onChange={(e) => setComment(e.target.value)} 
                  required
                />
              </div>

              {/* Submit button */}
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">Submit Review</button>
                <button 
                  type="button" 
                  className="btn" 
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
    
 
  );
};

export default AddReviewButton;
