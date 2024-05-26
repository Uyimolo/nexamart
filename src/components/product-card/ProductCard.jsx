/* eslint-disable react/prop-types */
import LazyLoad from 'react-lazyload';
import ProductCardStars from '../product-card-stars/ProductCardStars';
import style from './productCard.module.css';
import LazyImage from '../lazy-image/LazyImage';
import { Link } from 'react-router-dom';
const ProductCard = ({ product, purpose }) => {
  return (
    <div
      className={`${style.product_card} ${
        purpose === 'carousel' ? style.carousel : ''
      }`}>
      <LazyLoad height='100%' offset={-200} placeholder={<LazyImage />}>
        <Link to={`/products/${product.id}`} className={style.product_card_top}>
          <div className={style.product_image}>
            <img src={product.images[0]} alt={product?.title} />
          </div>
          <div className={style.discount}>
            -{product?.discountPercentage.toFixed()}%
          </div>
        </Link>
      </LazyLoad>

      <div className={style.product_info}>
        <Link to={`/products/${product.id}`} className={style.name}>
          {product?.title}
        </Link>
        <div className={style.product_price_and_rating}>
          <p className={style.price}>{`$${product?.price}`}</p>
          <p className={style.original_price}>
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </p>
        </div>
        <ProductCardStars rating={product.rating} />
      </div>
    </div>
  );
};

export default ProductCard;
