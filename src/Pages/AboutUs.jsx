import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            About Scholarship Hub
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Scholarship Hub is a comprehensive platform designed to help students find scholarships and university opportunities around the world. Our mission is to simplify the scholarship application process and empower students to reach their academic goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <img
              src="/images/scholarship-journey.png"  // Add a relevant image here
              alt="Scholarship Journey"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-4">
              We aim to create a seamless experience for students searching for scholarships and universities. With an easy-to-use interface and powerful tools, we connect students with opportunities that align with their academic goals.
            </p>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Wide range of scholarships from various countries and universities.</li>
              <li>Personalized scholarship recommendations based on your profile.</li>
              <li>One-click application process for faster submissions.</li>
              <li>Trusted by students globally to achieve their academic dreams.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
            Our Team
          </h3>
          <p className="text-gray-600 text-center mb-8">
            Our dedicated team works tirelessly to keep the platform updated with the latest scholarship opportunities and provide the best support to students.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                src="/images/team1.jpg"  // Replace with team member image
                alt="Team Member"
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                John Doe
              </h4>
              <p className="text-gray-500">Co-Founder & CEO</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                src="/images/team2.jpg"  // Replace with team member image
                alt="Team Member"
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                Jane Smith
              </h4>
              <p className="text-gray-500">Chief Marketing Officer</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                src="/images/team3.jpg"  // Replace with team member image
                alt="Team Member"
                className="rounded-full mx-auto w-32 h-32 object-cover mb-4"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                David Wilson
              </h4>
              <p className="text-gray-500">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
