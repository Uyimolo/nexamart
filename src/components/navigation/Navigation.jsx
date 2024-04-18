/* eslint-disable react/prop-types */
import Logo from '../logo/Logo';
import style from './navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({ showMenu, setShowMenu }) => {
  const navList = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/' },
    { name: 'Products', path: '/' },
    { name: 'Blog', path: '/' },
    { name: 'Contact', path: '/' },
  ];
  return (
    <nav className={`${showMenu && style.active}`}>
      <div className={style.logo_container}>
        <Logo />
      </div>
      <div className={style.navlink_container}>
        {navList.map((nav) => (
          <NavLink
            key={nav.name}
            className={style.navlink}
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
