import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'
const index = () => {
  return (
    <nav className='menu-nav'>
      <h1>
        <Link to="/">HealthOn</Link>
      </h1>

      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>

  )
}

export default index