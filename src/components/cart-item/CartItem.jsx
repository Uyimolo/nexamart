/* eslint-disable react/prop-types */
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';
import style from './cartItem.module.css';
import Quantity from '../quantity/Quantity';
import { useCartSelectors } from '../../store/cartStore';
import { Link } from 'react-router-dom';

const CartItem = ({ product }) => {
  const removeFromCart = useCartSelectors.use.removeFromCart();

  return (
    <div className={style.cart_item} key={product.id}>
      <Link to={`/products/${product.id}`} className={style.cart_item_image}>
        <img src={product.image} alt={product.name} className={style.image} />
      </Link>
      <div className={style.cart_item_info}>
        <p className={style.cart_item_name}>{product.title}</p>
        <div className={style.price_available}>
          <p className={style.cart_item_price}>
            {`$${product.price}`}
            <span className={style.available}>In Stock</span>
          </p>
        </div>
      </div>
      <div className={style.cart_actions}>
        <Icon
          icon={faTrash}
          title='Delete'
          size='large'
          onClick={() => removeFromCart(product.id)}
        />
        <Quantity quantity={product.quantity} productId={product.id} />
      </div>
    </div>
  );
};

export default CartItem;
