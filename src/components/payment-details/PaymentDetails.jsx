/* eslint-disable react/prop-types */
import style from './paymentDetails.module.css';
import { useCartSelectors } from '../../store/cartStore';
import { useState } from 'react';
import Button from '../button/Button';
import CreditCardDetails from '../credit-card-details/CreditCardDetails';
import americanExpress from '../../assets/images/american-express.svg';
import visa from '../../assets/images/visa.svg';
import masterCard from '../../assets/images/mastercard.svg';
import { toast } from 'react-toastify';
const PaymentDetails = ({ handleStepsNavigation }) => {
  const cart = useCartSelectors.use.cart();
  const [paymentOption, setPaymentOption] = useState('cash');
  const [cardDetails, setCardDetails] = useState({
    nameOnCard: 'John Doe',
    cardNumber: '4242-4242-4242-4242',
    month: '5',
    year: '2050',
    cvv: '123',
  });
  const [errors, setErrors] = useState({});

  const subTotal = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const clearCart = useCartSelectors.use.clearCart();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentOption === 'cash') {
      handleStepsNavigation('next');
      clearCart();
    } else {
      const formValid = Object.values(errors).every((error) => error === '');
      if (cardDetails.cardNumber !== '' && formValid) {
        toast.success('Payment processed successfully');
        handleStepsNavigation('next');
        clearCart();
      } else {
        toast.error('Please review your credit card information');
      }
    }
  };

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

        <div
          className={`${style.select_container} ${style.credit_card_container}`}>
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

          <div className={style.credit_card_logos}>
            <img src={masterCard} alt='' />
            <img src={visa} alt='' />
            <img src={americanExpress} alt='' />
          </div>
        </div>

        {paymentOption === 'credit card' && (
          <CreditCardDetails
            errors={errors}
            setErrors={setErrors}
            cardDetails={cardDetails}
            setCardDetails={setCardDetails}
          />
        )}
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
          <Button
            text='Complete Order'
            color='secondary'
            width='full'
            onClick={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
