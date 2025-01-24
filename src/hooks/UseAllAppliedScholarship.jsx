
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const UseAllAppliedScholarship = () => {

    const { isLoading, data: allAppliedScholarship = [], error, refetch } = useQuery({
        queryKey: ['apply'],  // Unique cache for each user based on key
        queryFn: async () => {
            try {
            const res = await axios.get(`http://localhost:5000/all-applied-scholarships`,{
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


    return [allAppliedScholarship, isLoading, error, refetch];
}

export default UseAllAppliedScholarship;

