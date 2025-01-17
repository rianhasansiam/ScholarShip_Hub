import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router


const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className='flex items-center mb-6'>

        <img  src='https://img.icons8.com/?size=100&id=PPEhbSMTZRtI&format=png&color=000000' alt="Scholarship Hub Logo" className="w-24" />
        <h1 className='font-bold text-4xl'>Scholarship Hub</h1>
        </div>

        {/* Error Message */}
        <h1 className="text-6xl font-extrabold text-indigo-600 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 text-lg mb-8 text-center max-w-lg">
          The page you're looking for doesn't exist or has been moved. But don't worry, we're here to guide you back to where you belong!
        </p>

        {/* Fancy Image */}
        <img
          src="https://img.icons8.com/?size=100&id=Sd2tYsgMJNyn&format=png&color=000000"
          alt="404 Illustration"
          className="w-80 mb-8"
        />

        {/* Go to Home Button */}
        <Link to="/">
          <button className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition duration-300 shadow-lg">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
