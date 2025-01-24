import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Loading from './Loading';
import { contextData } from '../Contex';

const PrivateAdmin = ({ children }) => {
  const { userData, loading, setRedirectPath, setLoading, userRole } = useContext(contextData)
  const location = useLocation();



  setRedirectPath(location.pathname)

  if (userRole === 'Admin') {
    return children;
  }

  if (loading) {
    return <Loading></Loading>
  }


  return <Navigate to="/" />;
}

export default PrivateAdmin
