import React, { useState } from 'react';
import Logo from '../logo/Logo';
import style from './header.module.css';
import Icon from '../icon/Icon';
import CartIcon from '../cart-icon/CartIcon';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../navigation/Navigation';
import SearchInput from '../search-input/SearchInput';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleDisplayMenu = (val) => {
    setShowMenu(val);
  };

  return (
    <header>
      <div className={style.top}>
        <Logo />

        <div>
          <Navigation showMenu={showMenu} />
          <div
            className={`${style.curtain} ${!showMenu ? '' : style.active}`}
            onClick={() => handleDisplayMenu(false)}></div>
        </div>

        <div className={style.menu_button}>
          {!showMenu && (
            <Icon
              icon={faBars}
              onClick={() => handleDisplayMenu(true)}
              size='medium'
            />
          )}
        </div>
      </div>

      <div className={style.bottom}>
        <div className={style.search}>
          <SearchInput />
        </div>
        <div className={style.icons}>
          <Icon icon={faHeart} size='large' />
          <CartIcon />
        </div>
      </div>
    </header>
  );
};

export default Header;
