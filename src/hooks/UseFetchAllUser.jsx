import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const useFetchAllUser = (_id) => {

    // console.log(rian)

    const { isPending, data:allUser=[], refetch } = useQuery({
        queryKey: ['details'],  //unique  akek joner email aa akek joner jonno cach korbe
        queryFn: async() =>{
        const res =await axios.get(`http://localhost:5000/get-all-users`)
       return  res.data
        }
      })

  return [allUser, isPending, refetch]
}

export default useFetchAllUser;