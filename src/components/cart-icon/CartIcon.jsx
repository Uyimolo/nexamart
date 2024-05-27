import style from './cartIcon.module.css';
import Icon from '../icon/Icon';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useCartSelectors } from '../../store/cartStore';
import { Link } from 'react-router-dom';

const CartIcon = () => {
  const cart = useCartSelectors.use.cart();

  return (
    <Link to='/cart' className={style.cart_icon}>
      <Icon icon={faCartShopping} size='large' title='Cart' />
      {cart && <p className={style.cart_volume}>{cart.length}</p>}
    </Link>
  );
};

export default CartIcon;
