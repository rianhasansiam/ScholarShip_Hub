import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const FeaturedScholarships = () => {
  const [scholarships, setScholarships] = useState([]);

  // Simulating a fetch request to get the latest scholarships (replace with your API call)
  useEffect(() => {
    // Example of scholarships data (you can replace this with an API call to fetch actual data)
    const fetchedScholarships = [
      {
        name: 'Full Ride Scholarship',
        university: 'Stanford University',
        country: 'United States',
        deadline: '2025-06-01',
        subject: 'Engineering',
        fees: '$0',
        description: 'A full ride scholarship for students pursuing a degree in Engineering.',
        rating: 4.9,
        link: '/scholarships/stanford-engineering'
      },
      {
        name: 'Research Fellowship',
        university: 'University of Oxford',
        country: 'United Kingdom',
        deadline: '2025-05-15',
        subject: 'Science',
        fees: '$50',
        description: 'A fellowship for postgraduate students interested in scientific research.',
        rating: 4.7,
        link: '/scholarships/oxford-research'
      },
      {
        name: 'Global Scholars Program',
        university: 'Harvard University',
        country: 'United States',
        deadline: '2025-07-30',
        subject: 'Humanities',
        fees: '$100',
        description: 'A scholarship program for students in the Humanities field.',
        rating: 5.0,
        link: '/scholarships/harvard-humanities'
      },
      {
        name: 'International Students Grant',
        university: 'University of Toronto',
        country: 'Canada',
        deadline: '2025-04-25',
        subject: 'Business',
        fees: '$20',
        description: 'Grant for international students pursuing business studies.',
        rating: 4.6,
        link: '/scholarships/toronto-business'
      }
    ];

    setScholarships(fetchedScholarships);  // Set the fetched scholarships to state
  }, []);

  return (
    <section className=" py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Featured Scholarships</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarships.map((scholarship, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-center mb-2">{scholarship.name}</h3>
              <p className="text-center text-sm text-gray-500">{scholarship.university}, {scholarship.country}</p>
              <p className="text-center text-sm text-gray-600 italic mb-4">{scholarship.description}</p>
              <p className="text-center text-gray-500 text-sm">
                <strong>Application Deadline:</strong> {scholarship.deadline}
              </p>
              <p className="text-center text-gray-500 text-sm">
                <strong>Application Fees:</strong> {scholarship.fees}
              </p>
              <p className="text-center text-gray-500 text-sm">
                <strong>Subject:</strong> {scholarship.subject}
              </p>
              <div className="text-center text-yellow-500">
                {'★'.repeat(Math.round(scholarship.rating))} 
              </div>
              <NavLink
                to={scholarship.link}
                className="block text-center mt-4 text-[#ff5202] hover:text-[#e99066]"
              >
                View Scholarship Details
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedScholarships;
