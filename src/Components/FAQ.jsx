import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      question: "How do I apply for scholarships?",
      answer: "To apply for scholarships, browse our list of scholarships, choose the one that fits your profile, and click 'Apply'. You may need to create an account and submit the required documents.",
    },
    {
      question: "What documents are needed for scholarship applications?",
      answer: "Commonly required documents include academic transcripts, letters of recommendation, proof of enrollment, and a personal statement or essay.",
    },
    {
      question: "How do I track my scholarship application status?",
      answer: "After submitting your application, you can track the status by visiting the 'Dashboard' and clicking on 'My Applications'.",
    },
    {
      question: "Are scholarships available for international students?",
      answer: "Yes, we provide a wide range of scholarships available for international students in different countries and fields of study.",
    },
    {
      question: "Can I apply for more than one scholarship?",
      answer: "Yes, you can apply for multiple scholarships as long as you meet the eligibility criteria for each scholarship.",
    },
  ];

  return (
    <div className="faq-section py-12 bg-white">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="mt-8 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border-b border-gray-300 pb-4"
          >
            <button
              className="w-full text-left text-xl font-medium text-[#ff5202] focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="float-right">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
