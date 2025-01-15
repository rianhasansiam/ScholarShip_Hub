import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Logo and Website Info */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <img
              src={"logo.png"} // Replace with your logo image path
              alt="Website Logo"
              className="w-16 mr-3"
            />
            <h2 className="text-2xl font-bold">Scholarship Hub</h2>
          </div>
          {/* <p className="text-gray-400 text-sm">&copy; 2025 Scholarship Hub. All Rights Reserved.</p> */}
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
              </li>
              <li>
                <Link to="/scholarships" className="text-gray-400 hover:text-white">Scholarships</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <ul>
              <li>
                <a target='_blank' href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a>
              </li>
              <li>
                <a target='_blank' href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a>
              </li>
              <li>
                <a target='_blank' href="https://linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a>
              </li>
              <li>
                <a target='_blank' href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="text-gray-400">1234 Street Name, City, Country</li>
              <li className="text-gray-400">Email: support@scholarshiphub.com</li>
              <li className="text-gray-400">Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">&copy; 2025 Scholarship Hub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
