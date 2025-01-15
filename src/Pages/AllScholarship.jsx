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
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch scholarships with pagination
  const fetchScholarships = async (page, query = '') => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:5000/all-Scholarships', {
        params: { page, limit: 6, search: query }, // Pass search query as a parameter
      });
      setAllScholarships(response.data.scholarships);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching scholarships:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchScholarships(currentPage);
  }, [currentPage]);


  useEffect(() => {
    
    setCurrentPage(1); // Reset to the first page on search
    fetchScholarships(1, searchQuery);

  }, [searchQuery]);

  const handleSearch = () => {
    setCurrentPage(1); // Reset to the first page on search
    fetchScholarships(1, searchQuery);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    fetchScholarships(page, searchQuery); // Update page with current search query
  };

  return (
    <div>
      <h2 className='text-center font-bold text-4xl py-5 pt-10'>All Scholarships Circular</h2>
      <div className="search-box flex justify-center my-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Scholarship Name, University, or Degree"
          className="p-2 border border-gray-300 rounded-l-md w-80"
        />
        <button
          onClick={handleSearch}
          className="bg-[#ff5202] text-white px-4 py-2 rounded-r-md hover:bg-[#ff5202]"
        >
          Search
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='pb-8'>




          <div className='grid grid-cols-3  container px-28 mx-auto '>
            {allScholarships.map((scholarship) => (
              <ScolarshipCard key={scholarship._id} topeachcard={scholarship}></ScolarshipCard>
            ))}
          </div>









    




<div className="pagination flex justify-center mt-4 space-x-1">
  

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
          currentPage === page ? 'bg-[#ff5202] text-white' : 'bg-white'
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

 
</div>

        </div>
      )}
    </div>
  );
};

AllScholarship.propTypes = {};

export default AllScholarship;
