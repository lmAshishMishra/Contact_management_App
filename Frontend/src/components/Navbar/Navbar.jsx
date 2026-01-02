import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
   <nav className='navbar'>
        <h1>ContactManager</h1>
        <ul>
          <Link to='/'>List</Link>
          <Link to='/add'>Add New</Link>
        </ul>
      </nav>
  )
}

export default Navbar
