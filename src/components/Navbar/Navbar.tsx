import './Navbar.scss';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { DefaultProps } from './types';

export const Navbar: React.FC<DefaultProps> = ({
  icon,
  title,
  darkTheme,
  setDarkTheme,
}) => {
  const navbarTabs = [
    { name: 'Cases', href: '/cases' },
    { name: 'About', href: '/about' },
  ];

  return (
    <main className="navbar">
      <h1>
        {icon} {title}
      </h1>
      <ul>
        {navbarTabs.map((tab) => (
          <li key={tab.name} className="navbar-li">
            <NavLink
              className={(navData) =>
                navData.isActive ? 'navbar-link-active' : 'navbar-link'
              }
              to={tab.href}
            >
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <label className="switch">
        <input type="checkbox" />
        <div
          className="slider"
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        ></div>
      </label>
    </main>
  );
};

Navbar.defaultProps = {
  title: 'COVID-19 info',
  icon: <FontAwesomeIcon icon={faVirus} />,
};
