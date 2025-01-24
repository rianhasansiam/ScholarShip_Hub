import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { contextData } from '../Contex';


const useAllreviewsFetch = () => {
  const { userData } = useContext(contextData);

  // Check if user email is available before using the query
  const { isLoading, data: allreviews = [], refetch } = useQuery({
    queryKey: ['details', userData?.email],  // Adding email to queryKey for cache invalidation per user
    queryFn: async () => {
      if (userData?.email) {
        const res = await axios.get(`https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/user-reviews?email=${userData?.email}`);
        return res.data;
      }
      return [];  // Return an empty array if user email is not available
    },
    enabled: !!userData?.email, // Only run query if email exists
  });

  return [allreviews, isLoading, refetch];
};

export default useAllreviewsFetch;
