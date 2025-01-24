import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useContext } from 'react';
import { contextData } from '../Contex';


const useAllUserReviews = () => {
  const { userData } = useContext(contextData);

  // Check if user email is available before using the query
  const { isLoading, data: allreviews = [], refetch } = useQuery({
    queryKey: ['details'],  // Adding email to queryKey for cache invalidation per user
    queryFn: async () => {
      if (userData?.email) {
        const res = await axios.get(`https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/all-user-reviews`);
        return res.data;
      }
      return [];  // Return an empty array if user email is not available
    },
    enabled: !!userData?.email, // Only run query if email exists
  });

  return [allreviews, isLoading, refetch];
};

export default useAllUserReviews;
