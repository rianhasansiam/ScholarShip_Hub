
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import Swal from 'sweetalert2';
import { contextData } from '../../Contex';
import EachReview from '../../Components/EachReview';
import useAllreviewsFetch from '../../hooks/useAllreviewsFetch';

const MyReviews = () => {
  const { userData } = useContext(contextData);




  const [allreviews, isLoading, refetch] = useAllreviewsFetch()









  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">My Reviews</h2>

      {/* Review Table */}
      {allreviews.length === 0 ?
        (<div className='text-center font-bold text-3xl mt-32'>No Reviews Avaiable...!</div>)
        :
        (<table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Scholarship Name</th>
              <th className="px-4 py-2">University Name</th>
              <th className="px-4 py-2">Review Comments</th>
              <th className="px-4 py-2">Review Date</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allreviews.map(review => (
              <EachReview key={review._id} review={review} ></EachReview>
            ))}
          </tbody>
        </table>)}


    </div>
  );
};

export default MyReviews;
