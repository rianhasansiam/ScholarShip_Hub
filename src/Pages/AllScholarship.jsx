import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { contextData } from '../Contex';
import axios from 'axios';
import ScolarshipCard from '../Components/ScolarshipCard';

const AllScholarship = (props) => {
  const { loading, setLoading, setAllScholarships, allScholarships } = useContext(contextData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch scholarships with pagination
  const fetchScholarships = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/all-Scholarships', {
        params: { page, limit: 6 },
      });

      // Set scholarships data and totalPages from the response
      setAllScholarships(response.data.scholarships);  // Extracting scholarships from the response
      setTotalPages(response.data.totalPages);         // Extracting totalPages from the response
    } catch (error) {
      console.error('Error fetching scholarships:', error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch scholarships when currentPage changes
  useEffect(() => {
    fetchScholarships(currentPage);
  }, [currentPage]);

  // Handle page change for pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2 className='text-center font-bold text-4xl py-5 pt-10'>All Scholarships Circular</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='pb-8'>




          <div className='grid grid-cols-3  container px-28 mx-auto '>
            {allScholarships.map((scholarship) => (
              <ScolarshipCard key={scholarship._id} topeachcard={scholarship}></ScolarshipCard>
            ))}
          </div>









          {/* Pagination Controls */}
          {/* <div className="pagination flex justify-center mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
            >
              Previous
            </button>

            <span className="mx-2">Page {currentPage} of {totalPages}</span>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="mx-2 px-4 py-2 bg-gray-300 hover:bg-gray-400 disabled:bg-gray-200"
            >
              Next
            </button>
          </div> */}











<div className="pagination flex justify-center mt-4 space-x-1">
  {/* First Button */}
  {/* <button
    onClick={() => handlePageChange(1)}
    disabled={currentPage === 1}
    className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-200 disabled:bg-gray-100"
  >
    «
  </button> */}

  {/* Previous Button */}
  <button
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-5 py-1 border border-gray-300 rounded hover:bg-gray-200 disabled:bg-gray-100"
  >
      <i className="fa-solid fa-chevron-left"></i>
  </button>

  {/* Display page numbers */}
  {Array.from({ length: totalPages }, (_, index) => {
    const page = index + 1;
    return (
      <button
        key={page}
        onClick={() => handlePageChange(page)}
        className={`px-5 py-1 border border-gray-300 rounded hover:bg-gray-200 ${
          currentPage === page ? 'bg-blue-500 text-white' : 'bg-white'
        }`}
      >
        {page}
      </button>
    );
  })}

  {/* Next Button */}
  <button
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-5 py-1 border border-gray-300 rounded hover:bg-gray-200 disabled:bg-gray-100"
  >
    <i className="fa-solid fa-chevron-right"></i>
  </button>

  {/* Last Button */}
  {/* <button
    onClick={() => handlePageChange(totalPages)}
    disabled={currentPage === totalPages}
    className="px-2 py-1 border border-gray-300 rounded hover:bg-gray-200 disabled:bg-gray-100"
  >
    »
  </button> */}
</div>

        </div>
      )}
    </div>
  );
};

AllScholarship.propTypes = {};

export default AllScholarship;
