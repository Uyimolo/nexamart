import React from 'react';
import style from './featuredProduct.module.css';
import image from '../../assets/images/earphone.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';

const FeaturedProduct = () => {
  return (
    <div className={style.large_header}>
      <div className={style.header_details}>
        <p className={style.title}>Nexapod A4</p>
        <h1>Enhance Your Music Experience</h1>

        <div className={style.cta}>
          <Button text='Buy Now' icon={faArrowRight} />
        </div>
      </div>
      <div className={style.header_image}>
        <img src={image} alt='' />
      </div>
    </div>
  );
};

export default FeaturedProduct;
