import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useFetchAllUser = (_id) => {

    // console.log(rian)

    const { isLoading, data:allUser=[], error , refetch } = useQuery({
        queryKey: ['details'],  //unique  akek joner email aa akek joner jonno cach korbe
        queryFn: async() =>{
          try {
        const res =await axios.get(`http://localhost:5000/get-all-users`,{
          headers: {
              authorization: `Bearer ${localStorage.getItem('access-token')}`
          }
      });
      return res.data;
  } catch (err) {
      // Check for specific token-related error (e.g., 401 Unauthorized)
      if (err.response && err.response.status === 401) {
          throw new Error('Invalid token or session expired. Please log in again.');
          
      }
      // Throw a generic error if it's not related to token
      throw new Error(err.response?.data?.message || 'Failed to fetch scholarship data');
     
  }
},
onError: (error) => {
  // Handle side effects when an error occurs (e.g., show a toast or log the error)
  console.error('Error fetching scholarship data:', error.message);
  console.log('erorororr')
}
});


  return [allUser, isLoading, refetch, error]
}

export default useFetchAllUser;