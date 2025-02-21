

import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAllDataFetch from '../hooks/useAllDataFetch';
import PaymentPage from './PaymentPage';
import { contextData } from '../Contex';

const PaymentLayout = () => {
  const locationPath = useLocation();
  const _id = locationPath.pathname.split('/')[2];

  // Fetch scholarship details (custom hook for fetching data)
  const [scholarshipDetails, isLoading] = useAllDataFetch(_id);

  // Destructure relevant data from the scholarship details
  const { university_logo, application_fees, university_name } = scholarshipDetails;

  // Use context to get the cardholder's name
  const { name } = useContext(contextData);

  // Display loading state if the data is still being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }



  const navigate = useNavigate()




  return (
    <div className="flex  justify-center items-center h-screen bg-gray-200">
      {/* Container for the entire checkout page */}
      <div className="flex flex-col md:flex-row mx-auto bg-white items-center justify-around rounded-lg shadow-lg max-w-5xl w-full">

        {/* Product details on the left */}
        <div className="md:w-[45%] w-[80vw] p-8 border-r">
          <button className="text-lg mb-4 text-gray-500">
            <button onClick={() => navigate(-1)}><i className="fas fa-arrow-left"></i></button>
          </button>
          <div className="text-2xl font-bold mb-2">{university_name}</div>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
          </div>
          <img src={university_logo} alt="University Logo" className="mb-6" />
          <div className="text-lg">
            <div className="flex justify-between">
              <span>Application Fees</span>
              <span>${application_fees}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total</span>
              <span>${application_fees}</span>
            </div>
          </div>
        </div>

        {/* Payment section on the right */}
        <div className=" md:w-[45%] w-[80vw] p-8 bg-[#77d6f3] text-white">
          <div className="flex items-center justify-center mb-6">
            <h2 className="text-xl font-bold">Complete Payment</h2>
          </div>

          <div>
            {/* Card Holder's Name */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2" htmlFor="cardHolderName">
                CARD HOLDER'S NAME
              </label>
              <input
                className="w-full p-3 text-gray-900 rounded"
                defaultValue={name} // Display name from context
                readOnly
              />
            </div>

            {/* Card Number */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 pb-0" htmlFor="cardNumber">
                CARD NUMBER
              </label>

              {/* Payment form for Stripe */}
              <PaymentPage _id={_id} application_fees={application_fees} />
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default PaymentLayout;

