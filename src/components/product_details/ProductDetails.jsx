/* eslint-disable react/prop-types */
import style from './productDetails.module.css';
import ProductCardStars from '../product-card-stars/ProductCardStars';
import Icon from '../icon/Icon';
import { faRecycle, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import AddToCart from '../add-to-cart/AddToCart';
const ProductDetails = ({ product }) => {
  return (
    <div className={style.details}>
      <div className={style.product_info}>
        <h2>{product.title}</h2>
        <p className={style.price}>{`$${product.price}`}</p>

        <div className={style.rating_price}>
          <ProductCardStars rating={product.rating} />
          <p
            className={style.available}>{`${product.stock ? `In stock (${product.stock})` : 'Out of stock'}`}</p>
        </div>

        <p>{product.description}</p>
      </div>

      <div className={style.delivery_info}>
        <div className={style.delivery}>
          <Icon icon={faTruckFast} size='large' />
          <div className={style.delivery_details}>
            <h4>Free Delivery</h4>
            <p>Enter your postal code for delivery availablity</p>
          </div>
        </div>
        <div className={style.delivery}>
          <Icon icon={faRecycle} size='large' />
          <div className={style.delivery_details}>
            <h4>Return Delivery</h4>
            <p>Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
      <div className={style.add_to_cart}>
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
