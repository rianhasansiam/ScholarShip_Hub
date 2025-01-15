import React from 'react';

const SuccessStories = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image: 'https://i.ibb.co.com/n6k3fKT/images.jpg', // Replace with real images
      story: 'I received a full scholarship for my studies abroad through this platform. It made the whole process easy and stress-free.',
      university: 'Harvard University',
      country: 'United States',
      date: 'January 2025',
      rating: 5
    },
    {
      name: 'Alexa Glory',
      image: 'https://i.ibb.co.com/PzcXKLr/download-2.jpg', 
      story: 'Thanks to this platform, I found the perfect scholarship that covered my tuition and living expenses.',
      university: 'University of Oxford',
      country: 'United Kingdom',
      date: 'February 2025',
      rating: 4.8
    },
    {
      name: 'Ahmed Ali',
      image: 'https://i.ibb.co.com/vhMdKpP/download-1.jpg', 
      story: 'I highly recommend this platform! It helped me find a scholarship that aligned perfectly with my studies.',
      university: 'University of Toronto',
      country: 'Canada',
      date: 'March 2025',
      rating: 4.9
    }
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Success Stories from Our Scholars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-center mb-2">{testimonial.name}</h3>
              <p className="text-center text-sm text-gray-500">
                {testimonial.university}, {testimonial.country}
              </p>
              <p className="text-center text-gray-600 italic mb-4">
                {testimonial.story}
              </p>
              <p className="text-center text-gray-500 text-sm">
                <strong>Reviewed on:</strong> {testimonial.date}
              </p>
              <div className="text-center text-yellow-500">
                {'★'.repeat(Math.round(testimonial.rating))} 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
