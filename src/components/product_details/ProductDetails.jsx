/* eslint-disable react/prop-types */
import style from './productDetails.module.css';
import ProductCardStars from '../product-card-stars/ProductCardStars';
import Icon from '../icon/Icon';
import Button from '../button/Button';
import { faHeart, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
const ProductDetails = ({ product, handleSetQuantity, quantity , setQuantity}) => {
  return (
    <div className={style.details}>
      <div className={style.product_info}>
        <h1>{product.title}</h1>
        <div className={style.rating_price}>
          <ProductCardStars />
          <p className={style.available}>In stock</p>
        </div>

        <p className={style.price}>{`$${product.price}`}</p>

        <p>{product.description}</p>
      </div>
      <div className={style.purchase_info}>
        <div className={style.quantity_container}>
          <div
            className={style.decrease}
            onClick={() => handleSetQuantity('decrease')}>
            <Icon color='white' icon={faMinus} size='large' />
          </div>
          <input
            type='number'
            name='quantity'
            id='quantity'
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <div
            className={style.increase}
            onClick={() => handleSetQuantity('increase')}>
            <Icon color='white' icon={faPlus} size='large' />
          </div>
        </div>
        <Button text='Buy Now' color='primary' />

        <Icon icon={faHeart} color='primary' size='large' />
      </div>
      <div className={style.delivery_info}></div>
    </div>
  );
};

export default ProductDetails;
