import { faBagShopping, faCheck } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';
import style from './successfulPurchase.module.css';
import Button from '../button/Button';
import { Link } from 'react-router-dom';
import { useCartSelectors } from '../../store/cartStore';

const SuccessfulPurchase = () => {
  const clearCart = useCartSelectors.use.clearCart();

  return (
    <div className={style.successful_purchase}>
      <div className={style.check}>
        <Icon icon={faCheck} color='white' size='large' />
      </div>
      <h1 className={style.order_number_text}>
        Thank you for shopping with us
      </h1>
      <p className={style.order_number_text}>Your order has been placed.</p>
      <p className={style.order_number_text}>
        Your order number is <span>NEXA1234567890</span>.
      </p>
      <p className={style.order_number_text}>
        Please check your email for more details.
      </p>

      <Link to='/' className={style.continue_shopping} onClick={clearCart}>
        <Button
          color='secondary'
          text='Continue Shopping'
          icon={faBagShopping}
          iconColor='white'
          width='full'
        />
      </Link>
    </div>
  );
};

export default SuccessfulPurchase;
