import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus } from '@fortawesome/free-solid-svg-icons'

export const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar'>
      <h1>
        {icon} {title}
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'COVID-19 Info',
  icon: <FontAwesomeIcon icon={faVirus} />
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}
