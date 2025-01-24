import React from 'react'
import PropTypes from 'prop-types'

const ReviewerCard = ({ review }) => {




    return (
        <div

            className="bg-gray-100 p-4 w-[80%] mx-auto rounded-lg shadow-md flex space-x-4"
        >
            {/* Reviewer Image */}
            <img
                src={review.reviewer_image}
                alt={review.reviewer_image}
                className="w-16 h-16 object-cover rounded-full"
            />

            {/* Review Content */}
            <div>
                <h3 className="font-semibold text-lg">{review.reviewer_name}</h3>
                <p className="text-sm text-gray-500 mb-1">
                    {new Date(review.review_date).toLocaleDateString()}
                </p>
                {/* Rating and Comments */}
                <div className="flex items-center mb-2">
                    <span className="text-yellow-500 font-bold mr-1">
                        {review.rating_point}⭐
                    </span>
                </div>
                <p className="text-gray-700">{review.reviewer_comments}</p>
            </div>
        </div>
    )
}

ReviewerCard.propTypes = {}

export default ReviewerCard