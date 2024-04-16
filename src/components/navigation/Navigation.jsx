import Logo from '../logo/Logo';
import style from './navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = ({ showMenu }) => {
  return (
    <nav className={`${showMenu && style.active}`}>
      <div className={style.logo_container}>
        <Logo />
      </div>
      <div className={style.navlink_container}>
        <NavLink className={style.navlink} to='/'>
          Home
        </NavLink>
        <NavLink className={style.navlink} to='/contact'>
          Contact
        </NavLink>
        <NavLink className={style.navlink} to='/about'>
          About
        </NavLink>
        <NavLink className={style.navlink} to='/signup'>
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
