import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useAllScholarshipData = () => {

    const { isLoading, data: allscholarshipData = [], error, refetch } = useQuery({
        queryKey: ['details'],  // Unique cache for each user based on key
        queryFn: async () => {
            try {
                const res = await axios.get(`https://assignment-12-server-ruddy-eight.vercel.app/allscholarship`, {
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

    return [allscholarshipData, isLoading, error, refetch];
}

export default useAllScholarshipData;
