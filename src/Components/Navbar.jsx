import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { contextData } from '../Contex'

const Navbar = () => {

const {signoutHandle, userData}= useContext(contextData)


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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-semibold">

            <li><NavLink to="/" className="nav-item">Home</NavLink></li>
            <li><NavLink to="/allscholarship" className="nav-item">All Scholarship</NavLink></li>
            <li> <NavLink to="/aboutUs" className="nav-item">AboutUs</NavLink></li>


          </ul>
        </div>
        <Link to='/' className="flex items-center   font-extrabold text-2xl h-16 p-0"><img className='w-16 '  src="https://img.icons8.com/?size=100&id=PPEhbSMTZRtI&format=png&color=000000" alt="" />Scholarship Hub</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-base">

          <li><NavLink to="/" className="nav-item">Home</NavLink></li>
          <li><NavLink to="/allscholarship" className="nav-item">All Scholarship</NavLink></li>
          <li><NavLink to="/userdashboard" className="nav-item">User Dashboard</NavLink></li>
          <li><NavLink to="/admindashboard" className="nav-item">Admin Dashboard</NavLink></li>
          <li> <NavLink to="/aboutUs" className="nav-item">About Us</NavLink></li>

          {/* User Dashboard (private), Admin Dashboard(private) */}
        </ul>
      </div>
      <div className="navbar-end">
        {userData?<button className='btn' onClick={signoutHandle}>Logout</button>
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