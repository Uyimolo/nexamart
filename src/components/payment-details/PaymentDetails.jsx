import style from './paymentDetails.module.css';
import { useCartSelectors } from '../../store/cartStore';
import { useState } from 'react';
import Button from '../button/Button';
import CreditCardDetails from '../credit-card-details/CreditCardDetails';
const PaymentDetails = () => {
  const cart = useCartSelectors.use.cart();
  const [paymentOption, setPaymentOption] = useState('cash');
  const subTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className={style.payment_details}>
      <div className={style.payment_options}>
        <p>Select payment method</p>

        <div className={style.select_container}>
          <div
            className={`${style.select} ${
              paymentOption === 'cash' ? style.active : ''
            }`}
            onClick={() => setPaymentOption('cash')}>
            <div className=''></div>
          </div>

          <p
            className={paymentOption === 'cash' && style.cash}
            onClick={() => setPaymentOption('cash')}>
            Cash on delivery
          </p>
        </div>

        <div className={style.select_container}>
          <div
            className={`${style.select} ${
              paymentOption === 'credit card' ? style.active : ''
            }`}
            onClick={() => setPaymentOption('credit card')}>
            <div className=''></div>
          </div>

          <p
            className={paymentOption === 'credit card' && style.credit_card}
            onClick={() => setPaymentOption('credit card')}>
            Credit card
          </p>
        </div>

        {paymentOption === 'credit card' && <CreditCardDetails />}
      </div>

      <div className={style.purchase_items}>
        <div className={style.total_price}>
          <p>Total</p>
          <div className={style.price_info}>
            <p>Subtotal</p>
            <p className={style.price}>${subTotal}</p>
          </div>
          <div className={style.price_info}>
            <p>Shipping</p>
            <p className={style.shipping}>Free</p>
          </div>
          <div className={style.price_info}>
            <p>Total</p>
            <p className={style.total_amount}>${subTotal}</p>
          </div>
        </div>
        <div className={style.complete_order_button}>
          <Button text='Complete Order' color='secondary' width='full' />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
