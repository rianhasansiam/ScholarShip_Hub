
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


const UseAllAppliedScholarship = () => {

    const { isLoading, data: allAppliedScholarship = [], error, refetch } = useQuery({
        queryKey: ['apply'],  // Unique cache for each user based on key
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/all-applied-scholarships`);
            return res.data;
        }
    });

    return [allAppliedScholarship, isLoading, error, refetch];
}

export default UseAllAppliedScholarship;

