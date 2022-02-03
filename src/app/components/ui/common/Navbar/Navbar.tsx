import './Navbar.scss'
import { faVirus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

interface DefaultProps { icon?: JSX.Element, title?: string }

export const Navbar: React.FC<DefaultProps> = ({ icon, title }) => {
  return (
    <div className='navbar'>
      <h1>{icon} {title}</h1>
      <ul>
        <li className='navbar-li'>
          <NavLink
            className={navData => navData.isActive ? 'navbar-link-active' : 'navbar-link'}
            to='/home'
          >
            Home</NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            className={navData => navData.isActive ? 'navbar-link-active' : 'navbar-link'}
            to='/about'
          >
            About</NavLink>
        </li>
      </ul>
    </div>
  )
}

Navbar.defaultProps = {
  title: 'COVID-19 info',
  icon: <FontAwesomeIcon icon={faVirus} />
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
}
