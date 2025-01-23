import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ScolarshipCard = ({topeachcard}) => {


const {_id, university_logo, university_name, scholarship_category, university_location, application_deadline, subject_name, application_fees,scholarship_name}=topeachcard

const [reviewer, setReviewer]=useState([])


useEffect(()=>{

const reviewFetch= async()=>{

  const res= await axios.get(`http://localhost:5000/each-user-reviews/${_id}`)
  setReviewer(res.data)
  // console.log(res.data)

  

}
reviewFetch()
},[])



// if(reviewer){
//   const averageRating = reviewer.reduce((acc, review) => acc + review.rating_point, 0) / reviewer.length;
// }
const averageRating = reviewer.reduce((acc, review) => acc + review.rating, 0) / reviewer.length;

// console.log(reviewer, averageRating);

// console.log(scholarship_name)
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white m-4 p-5  min-h-[520px] mx-auto">
    <img
      className="w-full h-48 object-cover rounded-xl"
      src={university_logo}
      alt={`${university_name} logo`}
    />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{university_name}</div>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Category: </span>{scholarship_category}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Location: </span>
        {university_location?.city}, {university_location?.country}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Application Deadline: </span>
        {new Date(application_deadline).toLocaleDateString()}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Subject: </span>{subject_name}
      </p>
      <p className="text-gray-700 text-base">
        <span className="font-semibold">Application Fees: </span>{application_fees}
      </p>
      <p className="text-gray-700 text-base">
        {/* <span className="font-semibold">Rating: </span>{averageRating.toFixed(1)} / 5 */}
        <span className="font-semibold">Rating: </span>{averageRating || '0'} / 5
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <Link to={`/scholarshipDetails/${_id}`}><button  className="bg-[#ff5202] hover:bg-[#f77740] text-white font-bold py-2 px-4 rounded">
        Scholarship Details
      </button></Link>
    </div>
  </div>
  )
}

ScolarshipCard.propTypes = {}

export default ScolarshipCard