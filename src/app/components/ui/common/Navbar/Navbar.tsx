import './Navbar.scss';
import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

interface DefaultProps {
  icon?: JSX.Element;
  title?: string;
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Navbar: React.FC<DefaultProps> = ({
  icon,
  title,
  darkTheme,
  setDarkTheme,
}) => {
  return (
    <main className='navbar'>
      <h1>
        {icon} {title}
      </h1>
      <ul>
        <li className='navbar-li'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'navbar-link-active' : 'navbar-link'
            }
            to='/home'
          >
            Home
          </NavLink>
        </li>
        <li className='navbar-li'>
          <NavLink
            className={(navData) =>
              navData.isActive ? 'navbar-link-active' : 'navbar-link'
            }
            to='/about'
          >
            About
          </NavLink>
        </li>
      </ul>
      <label className='switch'>
        <input type='checkbox' />
        <div
          className='slider'
          onClick={() => {
            setDarkTheme(!darkTheme);
            darkTheme === true
              ? (document.body.style.backgroundColor = 'rgb(41, 40, 40)')
              : (document.body.style.backgroundColor = 'white');
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
