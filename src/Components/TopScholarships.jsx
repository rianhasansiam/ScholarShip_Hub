import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { contextData } from '../Contex';
import useAxiosPublic from '../hooks/useAxiosPublic';
import ScolarshipCard from './ScolarshipCard';
import axios from 'axios';

const TopScholarships = () => {


  const [topSchorships, setTopScholarships] = useState([])



  const { loading } = useContext(contextData)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://assignment-12-server-ruddy-eight.vercel.app/top-Scholarships'); // Make a public API call
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
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center items-center lg:px-32 container mx-auto pb-10'>
        {
          topSchorships.map(topeachcard => <ScolarshipCard key={topeachcard._id} topeachcard={topeachcard}></ScolarshipCard>)
        }
      </div>


    </div>
  )
}

TopScholarships.propTypes = {}

export default TopScholarships