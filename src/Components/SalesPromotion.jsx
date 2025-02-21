import React from 'react';

const SalesPromotion = () => {
  return (
    <div className="promotion-section py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#ff5202] mb-4">Exclusive Scholarship Opportunities!</h2>
        <p className="text-gray-600 mb-6">
          Unlock access to premium scholarships with our limited-time offers. Apply now and secure your future with exclusive scholarships tailored to your needs!
        </p>
        
        <div className="flex justify-center gap-6">
          {/* Promotion card 1 */}
          <div className="promotion-card bg-white p-6 rounded-lg shadow-md max-w-sm">
            <h3 className="text-2xl font-bold text-[#ff5202] mb-4">Premium Scholarship Access</h3>
            <p className="text-gray-700 mb-6">
              Get access to exclusive scholarships with premium features. Limited-time 30% discount on all premium plans!
            </p>
            <button className="px-6 py-2 bg-[#ff5202] text-white rounded-lg hover:bg-[#da7749]">
              <a target='blank' href='https://internationalstudentsvc.org/college-planning-resources/scholarship-financial-aid-resources/list-of-scholarship/?gad_source=1&gclid=CjwKCAiAn9a9BhBtEiwAbKg6fuzrSnkbY4b8kUIbJIXfqy787yBu0WW-OygIzRZbfnHmxCTJJ2IGzhoCo6QQAvD_BwE'>Unlock Now</a>
            </button>
          </div>

          {/* Promotion card 2 */}
          <div className="promotion-card bg-white p-6 rounded-lg shadow-md max-w-sm">
            <h3 className="text-2xl font-bold text-[#ff5202] mb-4">Consultation Services</h3>
            <p className="text-gray-700 mb-6">
              Need help with your scholarship application? Get personalized advice and support with a 20% discount!
            </p>
            <button className="px-6 py-2 bg-[#ff5202] text-white rounded-lg hover:bg-[#da7749]">
          <a target='blank' href='https://foundationoficf.org/scholarships/applications/?gad_source=1&gclid=CjwKCAiAn9a9BhBtEiwAbKg6fmcBZCwzzZOZd22rfy94JVS1zG170E48V3ErqkKP5tLAdaoO_IcuBhoCBWQQAvD_BwE'>Book a Session</a>
            </button>
          </div>

          {/* Promotion card 3 */}
          <div className="promotion-card bg-white p-6 rounded-lg shadow-md max-w-sm">
            <h3 className="text-2xl font-bold text-[#ff5202] mb-4">Early Application Discount</h3>
            <p className="text-gray-700 mb-6">
              Apply early for select scholarships and get a 15% discount on application fees. Don’t miss out!
            </p>
            <button className="px-6 py-2 bg-[#ff5202] text-white rounded-lg hover:bg-[#da7749]">
              <a target='blank' href='https://www.lshtm.ac.uk/study/masters-degrees/early-application-fee-reduction-terms-and-conditions'>Apply Now</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesPromotion;
