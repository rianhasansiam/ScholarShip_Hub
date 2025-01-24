import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { contextData } from '../../Contex';
import Loading from '../Loading';

const UserDashboard = () => {



  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };




  return (
    <div className="dashboard-container flex h-screen bg-gray-100 ">

      {/* Sidebar */}
      <aside className={`sidebar bg-[#1A1A2E] text-white ${isMenuOpen ? 'block' : 'hidden'} md:block w-64 md:w-1/7 h-full fixed md:static top-0 left-0 z-50 transition-transform`}>
        {/* Logo and Menu Toggle */}
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <h1 className="text-2xl font-bold">
            <Link to="/dashboard">
              <span className="text-[#ff5202]">User</span> Dashboard
            </Link>
          </h1>


          {/* Close button for mobile */}
          <button onClick={toggleMenu} className="text-white md:hidden">
            ✖
          </button>
        </div>

        {/* Navigation Menu */}
        <ul className="mt-4 px-6 space-y-4">
          <li>
            <NavLink
              to="/userdashboard/myprofile"
              className="text-lg block py-1 hover:text-[#ff5202] text-center rounded-lg"
              onClick={toggleMenu} // Close the menu after clicking on a link
            >
              My Profile
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/userdashboard/myapplication"
              className="text-lg block py-1 hover:text-[#ff5202] text-center rounded-lg"
              onClick={toggleMenu}
            >
              My Application
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/userdashboard/myreviews"
              className="text-lg block py-1 hover:text-[#ff5202] text-center rounded-lg"
              onClick={toggleMenu}
            >
              My Reviews
            </NavLink>
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <div className="flex-1   ">
        {/* Navbar for mobile */}
        <header className="flex justify-between items-center md:hidden">
          <h1 className="text-2xl font-bold text-[#1A1A2E]">
            Dashboard
          </h1>
          <button
            onClick={toggleMenu}
            className="text-2xl text-[#ff5202] focus:outline-none mr-2"
          >
            ☰
          </button>
        </header>

        {/* Nested routes (content) */}
        <main className="dashboard-content mt-6 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

UserDashboard.propTypes = {};

export default UserDashboard;
