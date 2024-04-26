/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Logo from '../logo/Logo';
import style from './header.module.css';
import Icon from '../icon/Icon';
import CartIcon from '../cart-icon/CartIcon';
import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons';
import Navigation from '../navigation/Navigation';
import SearchInput from '../search-input/SearchInput';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
import SearchResults from '../search-results/SearchResults';
import { useLocation } from 'react-router';
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  // const [showResults, setShowResults] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation()
  const threshold = 300;
  const handleDisplayMenu = (val) => {
    setShowMenu(val);
  };

  useEffect(() => {
    setSearchTerm('')
  }, [location])

  const url =
    searchTerm.trim().length > 0 &&
    `https://dummyjson.com/products/search?q=${searchTerm.trim()}`;
  const search = async () => {
    const response = await fetch(url);
    return await response.json();
  };

  const { data, isLoading, error, isSuccess } = useReactQuery(
    ['search', url],
    search
  );

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
      className={`${isScrolledDown && !showMenu ? style.scrolled_down : style.scrolled_up}`}>
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
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className={style.icons}>
          <Icon icon={faHeart} size='large' />
          <CartIcon />
        </div>
      </div>
      {searchTerm.length > 0 && (
        <SearchResults
          results={data?.products}
          isLoading={isLoading}
          isSuccess={isSuccess}
          error={error}
          setSearchTerm={setSearchTerm}
        />
      )}
    </header>
  );
};

export default Header;
