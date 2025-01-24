import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useFetchAllUser = (_id) => {



  const { isLoading, data: allUser = [], error, refetch } = useQuery({
    queryKey: ['details'],  //unique  akek joner email aa akek joner jonno cach korbe
    queryFn: async () => {
      try {
        const res = await axios.get(`https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/get-all-users`, {
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
      
    }
  });


  return [allUser, isLoading, refetch, error]
}

export default useFetchAllUser;