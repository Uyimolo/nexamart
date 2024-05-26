/* eslint-disable react/prop-types */
import Logo from '../logo/Logo';
import Icon from '../icon/Icon';
import Button from '../button/Button'
import style from './navigation.module.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

const Navigation = ({ showMenu, setShowMenu }) => {
  const [showCategories, setShowCategories] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const navList = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Cart', path: '/cart' },
  ];

  const location = useLocation();

  const url = `https://dummyjson.com/products/categories`;
  const fetchCategories = async () => {
    const response = await fetch(url);
    return await response.json();
  };

  const { data: categories } = useReactQuery(
    ['categories', url],
    fetchCategories
  );

  const handleClickNavlink = () => {
    setShowMenu(false);
    setShowCategories(false);
  };

  return (
    <nav className={`${showMenu && style.active}`}>
      <div className={style.logo_container}>
        <Logo />
      </div>

      {/* ---NAVLIST ITEMS */}
      <div className={style.navlink_container}>
        {navList.map((nav) => (
          <NavLink
            key={nav.name}
            className={`${style.navlink} ${
              location.pathname === nav.path ? style.active : ''
            }`}
            to={nav.path}
            onClick={handleClickNavlink}>
            {nav.name}
          </NavLink>
        ))}
        {/* --- CATEGORY ------ */}
        <div
          className={style.categories_navigation}
          onMouseEnter={() => isDesktop && setShowCategories(true)}
          onMouseLeave={() => isDesktop && setShowCategories(false)}>
          <div
            className={`${style.navlink} ${style.categories_header}`}
            onClick={() =>
              !isDesktop && setShowCategories((prevState) => !prevState)
            }>
            <p className={style.category}>Categories</p>
            <div className={showCategories ? style.caret_up : style.caret_down}>
              <Icon icon={faCaretDown} />
            </div>
          </div>
          {showCategories && categories && (
            <div className={style.category_navigation_content}>
              {categories?.map((category) => (
                <Link
                  className={`${style.category_navlink} ${style.navlink} ${
                    location.pathname === `/categories/${category.slug}`
                      ? style.active
                      : ''
                  }`}
                  to={`/categories/${category.slug}`}
                  key={category}
                  onClick={handleClickNavlink}>
                  {category.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className={style.nav_btn}>
        <Button width='full' text='Get started' color='secondary' />
      </div>
    </nav>
  );
};

export default Navigation;
