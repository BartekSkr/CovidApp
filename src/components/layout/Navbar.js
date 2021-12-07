import React from 'react'
import { NavLink } from 'react-router-dom'
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
        <li className='navbar-li'>
          <NavLink
            className={navData => navData.isActive ? 'navbar-link-active' : 'navbar-link'}
            to='/'>
            Home
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            className={navData => navData.isActive ? 'navbar-link-active' : 'navbar-link'}
            to='about'>
            About
          </NavLink>
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
