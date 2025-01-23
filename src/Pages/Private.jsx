import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

import { useContext, useEffect } from "react";
import { contextData } from "../Contex";
import Loading from "./Loading";

const Private = ({ children }) => {
  const { userData, loading, setRedirectPath ,setLoading} = useContext(contextData)
  const location = useLocation();
  // console.log(loading);


    setRedirectPath(location.pathname)

    if (userData) {
      return children;
    }

if(loading){
  return <Loading></Loading>
}

// setLoading(false)
  return <Navigate  to="/login" />;
};


export default Private;
