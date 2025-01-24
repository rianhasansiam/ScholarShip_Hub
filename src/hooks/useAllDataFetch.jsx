import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useAllDataFetch = (_id) => {

    // console.log(rian)

    const { isLoading, data:scholarshipDetails=[], refetch } = useQuery({
        queryKey: ['details'],  //unique  akek joner email aa akek joner jonno cach korbe
        queryFn: async() =>{
        const res =await axios.get(`http://localhost:5000/scholarshipDetails/${_id}`)
       return  res.data
        }
      })

  return [scholarshipDetails, isLoading, refetch]
}

export default useAllDataFetch;