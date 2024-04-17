import React from 'react';
import style from './largeHeader.module.css';
import headerImage from '../../assets/images/shirt_1.png';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';

const LargeHeader = () => {
  return (
    <div className={style.large_header}>
      <div className={style.header_details}>
        <p className={style.title}>Innoson Caris Jet</p>
        <h1>Up to 10% off Voucher</h1>

        <div className={style.cta}>
          <Button text='Shop Now' icon={faArrowRight} />
        </div>
      </div>
      <div className={style.header_image}>
        <img src={headerImage} alt='' />
      </div>
    </div>
  );
};

export default LargeHeader;
