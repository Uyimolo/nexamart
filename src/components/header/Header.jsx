/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import style from './header.module.css';
import Icon from '../icon/Icon';
import CartIcon from '../cart-icon/CartIcon';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../navigation/Navigation';
import SearchInput from '../search-input/SearchInput';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const threshold = 300;
  const handleDisplayMenu = (val) => {
    setShowMenu(val);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY; // Use window.scrollY instead

      // Improved scroll direction detection (prevents flickering)
      const isScrollingUp =
        currentScrollPos < window.prevScrollY || currentScrollPos < threshold;
      const isScrollingDown =
        currentScrollPos > window.prevScrollY && currentScrollPos > threshold;

      if (isScrollingUp) {
        setIsScrolledDown(false);
      } else if (isScrollingDown) {
        setIsScrolledDown(true);
      }

      window.prevScrollY = currentScrollPos;
    };

    // Add event listener on component mount
    window.addEventListener('scroll', handleScroll);

    // Cleanup function: remove event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`${isScrolledDown ? style.scrolled_down : style.scrolled_up}`}>
      <div className={style.top}>
        <Logo />

        <div>
          <Navigation showMenu={showMenu} setShowMenu={setShowMenu} />
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
