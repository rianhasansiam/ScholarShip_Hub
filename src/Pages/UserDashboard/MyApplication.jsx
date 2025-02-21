import React from 'react';
import EachMyApplication from '../../Components/EachMyApplication';
import useFetchEachApplication from '../../hooks/useFetchEachApplication';
import Loading from '../Loading';

const MyApplication = () => {
  const [tanstechData, isLoading, refetch] = useFetchEachApplication(); // Using isLoading properly for loading state

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4 text-center">My Applied Scholarships</h2>

      {/* Conditionally render a loading message or the table */}
      {isLoading ? (
        <div className="text-center my-4">
          <Loading></Loading>
        </div>
      ) : (
        <div className="w-full ">
          <table className="min-w-[800px]  w-full table-auto bg-white border divide-y divide-gray-200 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 text-xs sm:text-sm md:text-base">University Name</th>
                <th className="px-4 py-2 text-xs sm:text-sm md:text-base">University Address</th>
                <th className="px-4 py-2 text-xs sm:text-sm md:text-base">Application Feedback</th>
                <th className="px-4 py-2 text-xs sm:text-sm md:text-base">Subject Category</th>
                <th className="px-4 py-2 text-xs sm:text-sm md:text-base">Applied Degree</th>
                <th className="px-4 py-2 text-xs sm:text-sm md:text-base">Application Fees</th>
                <th className="px-4 py-2 text-xs sm:text-sm md:text-base">Service Charge</th>
                <th className="px-4 py-2 text-xs sm:text-sm md:text-base">Status</th>
                <th className="px-4 py-2 text-xs sm:text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {tanstechData.map((application) => (
                <EachMyApplication key={application._id} application={application} refetch={refetch} />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* If no applications are found */}
      {!isLoading && tanstechData.length === 0 && (
        <div className="text-center my-4">
          <span>No applications found.</span>
        </div>
      )}
    </div>



  );
};

export default MyApplication;
