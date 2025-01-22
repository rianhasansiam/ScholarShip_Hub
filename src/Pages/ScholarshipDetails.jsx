import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import useAllDataFetch from '../hooks/useAllDataFetch'
import { contextData } from '../Contex'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ReviewerCard from '../Components/ReviewerCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import Loading from './Loading'

const ScholarshipDetails = () => {


  const navigate= useNavigate()
  
  const locationPath = useLocation()
  // console.log()

  const _id = locationPath.pathname.split('/')[2]

  const [scholarshipDetails, isPending] = useAllDataFetch(_id)

  // console.log(scholarshipDetails)
  // console.log(_id)


  if (isPending) {
    return <Loading></Loading>;
  }

  if (!scholarshipDetails) {
    return <div>No scholarship found.</div>;
  }

  const {

    university_name,
    university_logo,
    scholarship_category,
    university_location,
    application_deadline,
    subject_name,
    scholarship_description,
    stipend,
    post_date,
    service_charge,
    application_fees,
    reviewer
  } = scholarshipDetails;

  // const{reviewer_image,reviewer_name,review_date,rating_point,reviewer_comments}= reviewer[0]




  return (
    <div className="flex justify-center items-center py-10">
      <div className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-6">
        <div className="flex items-center space-x-4 border-b pb-4 mb-4">
          <img
            src={university_logo}
            alt={`${university_name} logo`}
            className="w-20 h-20 object-cover rounded-full border"
          />
          <h1 className="text-3xl font-bold text-gray-800">{university_name}</h1>
        </div>

        <div className="text-gray-600">
          <p className="text-sm text-gray-500 mb-2">
            <span className="font-semibold">Posted on: </span>
            {new Date(post_date).toLocaleDateString()}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <p>
              <span className="font-semibold">Scholarship Category: </span>
              {scholarship_category}
            </p>
            <p>
              <span className="font-semibold">Location: </span>
              {university_location.city}, {university_location.country}
            </p>
            <p>
              <span className="font-semibold">Application Deadline: </span>
              {new Date(application_deadline).toLocaleDateString()}
            </p>
            <p>
              <span className="font-semibold">Subject Name: </span>
              {subject_name}
            </p>
            <p>
              <span className="font-semibold">Service Charge: </span>
              {service_charge}
            </p>
            <p>
              <span className="font-semibold">Application Fees: </span>
              ${application_fees}
            </p>
            {stipend && (
              <p>
                <span className="font-semibold">Stipend: </span>
                {stipend}
              </p>
            )}
          </div>

          <div className="mt-6">
            <h2 className="font-semibold text-lg mb-3">Scholarship Description:</h2>
            <p className="text-gray-700">{scholarship_description}</p>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <button onClick={()=>navigate(-1)}  className="px-6 py-2 bg-[#e73b3b] text-white rounded-lg hover:bg-[#e95252]">
            back
          </button>
          <Link to={`/payment/${_id}`} className="px-6 py-2 bg-[#ff5202] text-white rounded-lg hover:bg-[#f18756]">
            Apply Scholarship
          </Link>
        </div>

        {/* Reviews Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-6">Reviews ({reviewer.length})</h2>
          <div className="space-y-4 mb-6">
            {reviewer.length>1?
            <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop
            autoplay={{
              delay: 3000, // Time between each slide in milliseconds (3000ms = 3 seconds)
              disableOnInteraction: false, // Keep autoplay running after user interaction
            }}
          >
            {reviewer.length > 0 ? (
              reviewer.map((review, index) => (
                <SwiperSlide key={index}>
                  <ReviewerCard review={review} />
                </SwiperSlide>
              ))
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}
          </Swiper>:<div>
          {reviewer.length > 0 ? (
              reviewer.map((review, index) => (
                <SwiperSlide key={index}>
                  <ReviewerCard review={review} />
                </SwiperSlide>
              ))
            ) : (
              <p className="text-gray-500">No reviews yet.</p>
            )}</div>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipDetails;