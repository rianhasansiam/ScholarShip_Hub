import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import useAllScholarshipData from '../../hooks/useAllScholarshipData';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom';
import ModaAllScholarship from './ModaAllScholarship';
import { contextData } from '../../Contex';


const ManageScholarships = () => {

  const [allscholarshipData, isLoading, error, refetch] = useAllScholarshipData()

  const { signoutHandle } = useContext(contextData)

  if (error) {
    signoutHandle()
  }

  

  return (

    <>
      {isLoading ? (<Loading></Loading>)
        :
        (<div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Manage Scholarships ({allscholarshipData?.length})</h2>
          <table className="min-w-full bg-white  ">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Scholarship Name</th>
                <th className="px-4 py-2 border">University Name</th>
                <th className="px-4 py-2 border">Subject Category</th>
                <th className="px-4 py-2 border">Degree</th>
                <th className="px-4 py-2 border">Application Fees</th>
                <th className="px-4 py-2 border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allscholarshipData && allscholarshipData.length > 0 ? (
                allscholarshipData.map((scholarship) => (
                  <ModaAllScholarship key={scholarship._id} scholarship={scholarship} refetch={refetch}></ModaAllScholarship>
                ))
              ) : (
                <tr>
                  <Loading></Loading>
                </tr>
              )}
            </tbody>

          </table>





        </div>)}
    </>

  );
};

export default ManageScholarships;



















