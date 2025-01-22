import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

const useAllScholarshipData = () => {

    const { isLoading, data: allscholarshipData = [], error, refetch } = useQuery({
        queryKey: ['details'],  // Unique cache for each user based on key
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/allscholarship`);
            return res.data;
        }
    });

    return [allscholarshipData, isLoading, error, refetch];
}

export default useAllScholarshipData;
