import React from 'react';

const Guides = () => {
  const guides = [
    {
      title: "How to Apply for Scholarships",
      description: "Step-by-step guide to applying for scholarships efficiently.",
      link: "https://studentaid.gov/understand-aid/types/scholarships",
    },
    {
      title: "Writing a Scholarship Essay",
      description: "Tips for writing a compelling scholarship essay.",
      link: "https://www.sallie.com/scholarships/essays",
    },
    {
      title: "Required Documents for Scholarship Applications",
      description: "A checklist of essential documents for any scholarship application.",
      link: "https://www.opportunitiescircle.com/blog/scholarship-application-requirements/",
    },
    {
      title: "Interview Tips for Scholarship Applicants",
      description: "Ace your scholarship interview with these tips.",
      link: "https://www.indeed.com/career-advice/interviewing/common-scholarship-interview",
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Guides</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{guide.title}</h2>
            <p className="text-gray-600 mt-2">{guide.description}</p>
            <a target='blank' href={guide.link} className="text-blue-500 mt-4 inline-block">
              Read more &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guides;
