import React from 'react';
import style from './productDetails.module.css';
import ProductCardStars from '../product-card-stars/ProductCardStars';

const ProductDetails = ({ product }) => {
  return (
    <div className={style.details}>
      <div className={style.product_info}>
        <h1>{product.title}</h1>
        <div className={style.rating_price}>
          <ProductCardStars />
          <p>In stock</p>
        </div>
        <p>{`$${product.price}`}</p>
        <p>{product.description}</p>
      </div>
      <div className={style.purchase_info}></div>
      <div className={style.delivery_info}></div>
    </div>
  );
};

export default ProductDetails;
