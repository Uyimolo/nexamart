import CartItem from '../../components/cart-item/CartItem';
import SubHeading from '../../components/sub-heading/SubHeading';
import Button from '../../components/button/Button';
import { useCartSelectors } from '../../store/cartStore';
import style from './cart.module.css';
import { Link } from 'react-router-dom';
import emptyCart from '../../assets/images/empty-cart.svg';

const Cart = () => {
  const cart = useCartSelectors.use.cart();
  let subTotal, totalItems;
  if (cart) {
    subTotal = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    ).toFixed(2);

    totalItems = cart.reduce((total, product) => total + product.quantity, 0);
  }

  return (
    <div className={`${style.cart} page`}>
      <SubHeading text='Cart' />
      {cart.length > 0 && (
        <div className={style.cart_container}>
          <div className={style.cart_items}>
            {[...cart].reverse().map((product) => (
              <CartItem product={product} key={product.id} />
            ))}
          </div>

          <div className={style.cart_summary}>
            <div className={style.overview}>
              <p>Cart Total</p> <p>{totalItems} items</p>
            </div>
            <div className={style.sub_total}>
              <p>Sub-total</p> <p>${subTotal}</p>
            </div>
            <div className={style.shipping}>
              <p>Shipping</p> <p>Free</p>
            </div>
            <div className={style.total}>
              <p>Total</p> <p className={style.total_price}>${subTotal}</p>
            </div>
            <div className={style.cart_checkout_desktop}>
              <Link className={style.checkout_button} to='/checkout'>
                <Button
                  text={`${'Proceed to checkout'} ($${subTotal})`}
                  color='secondary'
                  width='full'
                />
              </Link>
            </div>
          </div>
          <div className={style.cart_checkout}>
            <Link className={style.checkout_button} to='/checkout'>
              <Button
                text={`${'Proceed to checkout'} ($${subTotal})`}
                color='secondary'
                width='full'
              />
            </Link>
          </div>
        </div>
      )}
      {cart.length === 0 && (
        <div className={style.empty_cart}>
          <img className={style.empty_cart_image} src={emptyCart} alt='' />
          <p>
            Looks like you have not added anything to your cart. Go ahead and
            explore top categories and products.
          </p>
          <Link className={style.empty_cart_link} to='/products'>
            <Button text='Explore Products' color='secondary' width='full' />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
