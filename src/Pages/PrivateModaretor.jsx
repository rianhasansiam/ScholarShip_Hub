import React, { useContext } from 'react'
import Loading from './Loading';
import { Navigate, useLocation } from 'react-router-dom';
import { contextData } from '../Contex';

const PrivateModaretor = ({ children }) => {
  const { userData, loading, setRedirectPath, setLoading, userRole } = useContext(contextData)
  const location = useLocation();



  setRedirectPath(location.pathname)

  if (userRole === 'Moderator') {
    return children;
  }

  if (loading) {
    return <Loading></Loading>
  }


  return <Navigate to="/" />;
};



export default PrivateModaretor
