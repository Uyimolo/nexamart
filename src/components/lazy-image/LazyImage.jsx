import React from 'react';
import style from './lazyImage.module.css';
import Spinner from '../spinner/Spinner';

const LazyImage = () => {
  return (
    <div className={style.lazy_image}>
      <Spinner />
    </div>
  );
};

export default LazyImage;
