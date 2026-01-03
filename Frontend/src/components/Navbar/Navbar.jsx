import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom' // NavLink is better for navbars

const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='logo'>ContactManager</h1>
      <ul className='nav-links'>
          <li>
          <NavLink to='/' className={({isActive}) => isActive ? "active" : ""}>Home</NavLink>
        </li>
       
        <li>
          <NavLink to='/add' className={({isActive}) => isActive ? "active" : ""}>Add New</NavLink>
        </li>
        
         <li>
          <NavLink to='/list' className={({isActive}) => isActive ? "active" : ""}>List</NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar