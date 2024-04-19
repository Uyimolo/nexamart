/* eslint-disable react/prop-types */
import style from './quantity.module.css';
import Icon from '../icon/Icon';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useCartSelectors } from '../../store/cartStore';

const Quantity = ({ quantity, productId }) => {
  const increaseQuantity = useCartSelectors.use.increaseQuantity();
  const decreaseQuantity = useCartSelectors.use.decreaseQuantity();
  return (
    <div className={style.quantity_container}>
      <div
        className={style.decrease}
        // onClick={() => handleSetQuantity('decrease')}
      >
        <Icon
          color='white'
          icon={faMinus}
          onClick={() => decreaseQuantity(productId)}
        />
      </div>
      <p>{quantity}</p>
      <div
        className={style.increase}
        onClick={() => increaseQuantity(productId)}>
        <Icon color='white' icon={faPlus} />
      </div>
    </div>
  );
};

export default Quantity;
