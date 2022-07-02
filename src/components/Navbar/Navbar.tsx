import { faVirus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import { DefaultProps } from './types';

export const Navbar: React.FC<DefaultProps> = ({ icon, title }) => {
  const navbarTabs = [
    { name: 'Cases', href: '/cases' },
    { name: 'About', href: '/about' },
  ];

  return (
    <main className="block justify-center text-center py-8 mb-8 text-white relative transition-all bg-navbar-background">
      <h1 className="text-3xl font-bold mb-2">
        {icon} {title}
      </h1>
      <ul className="list-none flex justify-center">
        {navbarTabs.map((tab) => (
          <li
            key={tab.name}
            className="duration-0.5 hover:scale-1.2 ease-in-out transition-all"
          >
            <NavLink
              className={(navData) =>
                navData.isActive
                  ? 'my-0 mx-4 duration-0.5 border-b-2'
                  : 'my-0 mx-4 duration-0.5'
              }
              to={tab.href}
            >
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </main>
  );
};

Navbar.defaultProps = {
  title: 'COVID-19 info',
  icon: <FontAwesomeIcon icon={faVirus} />,
};
