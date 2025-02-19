import React, { useState } from 'react';
import { toast } from 'react-toastify';


const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Add subscription logic here (API call or Firebase integration)
      toast.success('Thank you for subscribing to our newsletter!');
      setEmail('');
    } else {
      toast.error('Please enter a valid email address.');
    }
  };

  return (
    <div className="newsletter-section py-16 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated with Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and get the latest scholarships, tips, and updates delivered right to your inbox.
        </p>
        <form onSubmit={handleSubscribe} className="flex justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="px-4 py-2 w-72 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[#ff5202] text-white rounded-r-lg hover:bg-[#da7749]"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
