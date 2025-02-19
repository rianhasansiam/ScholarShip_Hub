import React, { useContext, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { contextData } from '../Contex'
import axios from 'axios'

const Navbar = () => {

  const { signoutHandle, userData, picture, name, userRole } = useContext(contextData)






  



  return (
    <div className='bg-white'>
      <div className="navbar  container mx-auto bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[90] mt-3 w-52 p-2 shadow font-semibold">

              <li><NavLink to="/" className="nav-item">Home</NavLink></li>
              <li><NavLink to="/allscholarship" className="nav-item">All Scholarship</NavLink></li>
              {userData ? (userRole === 'Member' ? <li><NavLink to="/userdashboard/myprofile" className="nav-item">User Dashboard</NavLink></li> : '') : ''}
              {userData ? (userRole === 'Moderator' ? <li><NavLink to="/moderatordashboard/myprofile" className="nav-item">Moderator Dashboard</NavLink></li> : '') : ''}
              {userData ? (userRole === 'Admin' ? <li><NavLink to="/admindashboard/myprofile" className="nav-item">Admin Dashboard</NavLink></li> : '') : ''}
              <li> <NavLink to="/aboutUs" className="nav-item">AboutUs</NavLink></li>
              <li> <NavLink to="/guides" className="nav-item">Guides</NavLink></li>


            </ul>
          </div>
          <Link to='/' className="flex items-center   font-extrabold text-2xl h-16 p-0"><img className='w-16 ' src="https://img.icons8.com/?size=100&id=PPEhbSMTZRtI&format=png&color=000000" alt="" />Scholarship Hub</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold text-base">

            <li><NavLink to="/" className="nav-item">Home</NavLink></li>
            <li><NavLink to="/allscholarship" className="nav-item">All Scholarship</NavLink></li>


            {userData ? (userRole === 'Member' ? <li><NavLink to="/userdashboard/myprofile" className="nav-item">User Dashboard</NavLink></li> : '') : ''}
            {userData ? (userRole === 'Moderator' ? <li><NavLink to="/moderatordashboard/myprofile" className="nav-item">Moderator Dashboard</NavLink></li> : '') : ''}
            {userData ? (userRole === 'Admin' ? <li><NavLink to="/admindashboard/myprofile" className="nav-item">Admin Dashboard</NavLink></li> : '') : ''}

            <li> <NavLink to="/aboutUs" className="nav-item">About Us</NavLink></li>
            <li> <NavLink to="/guides" className="nav-item">Guides</NavLink></li>

            {/* User Dashboard (private), Admin Dashboard(private) */}
          </ul>
        </div>
        <div className="navbar-end">
          {userData ?

            <div className=" dropdown dropdown-end  z-30">
              {/* Profile Picture */}




              <div tabIndex={0} role="button" className="flex items-center space-x-4 ">
                <img
                  src={picture || 'https://img.icons8.com/?size=100&id=23265&format=png&color=000000'} // Fallback image if no profile picture
                  alt="Profile"
                  className="w-10 h-10 rounded-full cursor-pointer"

                />

                <ul
                  tabIndex={0}
                  className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-40 w-52 p-2 shadow">
                  <li className="px-4 py-3">
                    <p className="text-sm text-gray-700 font-semibold text-center">{name || 'Guest'}</p>
                  </li>


                  <li
                    className="w-full px-4 py-2 text-center font-semibold text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      signoutHandle();

                    }}
                  >
                    Logout
                  </li>
                </ul>

              </div>



            </div>
            :
            <ul className='flex gap-3 underline font-semibold text-lg '>
              <Link className='hover:text-[#ff5202]' to='/login'>LogIn</Link>
              <Link className='hover:text-[#ff5202]' to='/signup'>SignUp</Link>
            </ul>}
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {}

export default Navbar