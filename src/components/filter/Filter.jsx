import style from './filter.module.css';
import Categories from '../categories/Categories';
import Icon from '../icon/Icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretDown,
  faLessThanEqual,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Filter = () => {
  const [toggleIcon, setToggleIcon] = useState(faCaretDown);
  const [showFilter, setShowFilter] = useState(faLessThanEqual);
  return (
    <div className={style.filter_container}>
      <div className={style.toggle_filter}></div>
      <p onClick={() => setShowFilter(true)}>Filter Products</p>
     
      <Categories /> 
    </div>
  );
};

export default Filter;
