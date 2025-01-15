import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { contextData } from '../Contex';

// Axios instance for public use
const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your public API base URL
  // timeout: 1000,                    // Optional: Set a timeout if needed
});

const useAxiosPublic = () => {
   const {setLoading}=useContext(contextData) 

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use((config) => {
      setLoading(true); // Set loading to true before request is sent
      return config;
    });

    const responseInterceptor = axiosInstance.interceptors.response.use(
      (response) => {
        setLoading(false); // Set loading to false when response is received
        return response;
      },
      (error) => {
        setLoading(false); // Set loading to false when error is received
        console.error('Public API error:', error);
        return Promise.reject(error);
      }
    );

    return () => {
      // Cleanup interceptors when component unmounts
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return { axiosInstance }; // Return axiosInstance and loading state
};

export default useAxiosPublic;
