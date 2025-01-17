import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";

import { useContext, useEffect } from "react";
import { contextData } from "../Contex";

const Private = ({ children }) => {
  const { userData, loading, setRedirectPath ,setLoading} = useContext(contextData)
  const location = useLocation();
//   console.log(location.pathname);


    setRedirectPath(location.pathname)




  if (userData) {
    return children;
  }
setLoading(false)
  return <Navigate  to="/login" />;
};


export default Private;
