import CartItem from '../../components/cart-item/CartItem';
// import Quantity from '../../components/quantity/Quantity';
import SubHeading from '../../components/sub-heading/SubHeading';
import { useCartSelectors } from '../../store/cartStore';
import style from './cart.module.css';

const Cart = () => {
  const cart = useCartSelectors.use.cart();

  return (
    <div className={`${style.cart} page`}>
      <SubHeading text='Cart' />
      <div className={style.cart_items}>
        {cart.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
