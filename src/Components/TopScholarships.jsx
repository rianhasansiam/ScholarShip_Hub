import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { contextData } from '../Contex';
import useAxiosPublic from '../hooks/useAxiosPublic';
import ScolarshipCard from './ScolarshipCard';
import axios from 'axios';

const TopScholarships = () => {
   

    const [topSchorships, setTopScholarships]= useState([])
    // console.log(topSchorships)


    const {loading}=useContext(contextData)
    // const {axiosInstance}=useAxiosPublic()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:5000/top-Scholarships'); // Make a public API call
            setTopScholarships(response.data);
          } catch (error) {
            console.error('Error fetching public data:', error);
          }
        };
    
        fetchData();
      }, []);

  return (
    
    <div className=''>


   <h1 className='font-extrabold text-4xl text-center my-4 mt-16'>Top Scholarship</h1>
        <div className='grid grid-cols-3 grid-rows-2 justify-center items-center px-32 container mx-auto pb-10'>
            {
                topSchorships.map(topeachcard => <ScolarshipCard key={topeachcard._id} topeachcard={topeachcard}></ScolarshipCard>)
            }
        </div>


    </div>
      )
}

TopScholarships.propTypes = {}

export default TopScholarships