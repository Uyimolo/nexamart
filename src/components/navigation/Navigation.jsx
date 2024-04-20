/* eslint-disable react/prop-types */
import Logo from '../logo/Logo';
import style from './navigation.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Navigation = ({ showMenu, setShowMenu }) => {
  const navList = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Cart', path: '/cart' },
    { name: 'Contact', path: '/contact' },
  ];

  const location = useLocation();

  return (
    <nav className={`${showMenu && style.active}`}>
      <div className={style.logo_container}>
        <Logo />
      </div>
      <div className={style.navlink_container}>
        {navList.map((nav) => (
          <NavLink
            key={nav.name}
            className={`${style.navlink} ${
              location.pathname === nav.path ? style.active : ''
            }`}
            to={nav.path}
            onClick={() => setShowMenu(false)}>
            {nav.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
