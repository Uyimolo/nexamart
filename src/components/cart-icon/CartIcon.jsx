import style from './cartIcon.module.css'
import Icon from '../icon/Icon';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartIcon = () => {
  return (
    <div className={style.cart_icon}>
      <Icon icon={faCartShopping} size='large' />
      {/* <p className={style.cart_volume}>1347</p> */}
    </div>
  );
}

export default CartIcon
