import React from 'react';
import style from './lazyCategoryCard.module.css';

const LazyCategoryCard = () => {
  return (
    
      <div className={style.category_container}>
        <div className={style.image}></div>
        <p className={style.name}></p>
      </div>
    
  );
};

export default LazyCategoryCard;
