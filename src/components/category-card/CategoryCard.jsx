import React from 'react';
import style from './categoryCard.module.css';
import LazyLoad from 'react-lazyload';
import LazyImage from '../lazy-image/LazyImage'
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
  return (
    <Link to={`categories/${category.id}`} className={style.category_container}>
      <div className={style.image}>
        <LazyLoad placeholder={<LazyImage />}>
          <img src={category.image} alt={category.name} />
        </LazyLoad>
      </div>
      <p>{category.name}</p>
    </Link>
  );
};

export default CategoryCard;
