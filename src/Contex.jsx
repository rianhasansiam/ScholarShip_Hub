import { createContext, useState } from "react";

export const contextData=createContext()


const Contex = ({children}) => {

const [loading, setLoading] = useState(false);
const [allScholarships, setAllScholarships] = useState([]);
  
  
  
      const info={
        loading,
        setLoading,
        allScholarships,
        setAllScholarships


        
      }
    return (
      <contextData.Provider value={info}>
      {children}
      </contextData.Provider>
    )
  }
  

  
  export default Contex