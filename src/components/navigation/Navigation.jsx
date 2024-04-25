/* eslint-disable react/prop-types */
import Logo from '../logo/Logo';
import Icon from '../icon/Icon';
import style from './navigation.module.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
import { useState } from 'react';

const Navigation = ({ showMenu, setShowMenu }) => {
  const [showCategories, setShowCategories] = useState(false);

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

  const { data: categories, isLoading } = useReactQuery(
    ['categories', url],
    fetchCategories
  );

  const handleClickNavlink = () => {
    setShowMenu(false);
    setShowCategories(false);
  }

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
            onClick={handleClickNavlink}>
            {nav.name}
          </NavLink>
        ))}
        <div className={style.categories_navigation}>
          <div
            className={`${style.navlink} ${style.categories_header}`}
            onClick={() => setShowCategories((prevState) => !prevState)}>
            <p className={style.category}>Categories</p>
            <Icon icon={faCaretDown} />
          </div>
          {showCategories && (
            <div className={style.category_navigation_content}>
              {!isLoading &&
                categories.map((category) => (
                  <Link
                    className={`${style.category_navlink} ${style.navlink} ${
                      location.pathname === `/categories/${category.id}`
                        ? style.active
                        : ''
                    }`}
                    to={`/categories/${category}`}
                    key={category}
                    onClick={handleClickNavlink}>
                    {category}
                  </Link>
                ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
