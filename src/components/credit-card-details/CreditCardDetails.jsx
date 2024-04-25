import { useState } from 'react';
import style from './creditCardDetails.module.css';
import Button from '../button/Button';

const CreditCardDetails = () => {
  const [cardDetails, setCardDetails] = useState({
    nameOnCard: '',
    cardNumber: '',
    month: '',
    year: '',
    cvv: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value.replace(/[^\d]/g, ''); // Remove non-digit characters
    if (name === 'cardNumber') {
      // Format card number with spaces and hyphens
      formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, '$1-');
    }
    setCardDetails({ ...cardDetails, [name]: formattedValue });
    validateInput(name, formattedValue);
  };
  const validateInput = (name, value) => {
    let error = '';
    switch (name) {
      case 'nameOnCard':
        error =
          value.trim() === ''
            ? 'Name on card is required'
            : !/^[a-zA-Z ]+$/.test(value)
            ? 'Name can only include alphabets and spaces'
            : '';
        break;
      case 'cardNumber':
        error =
          value.trim() === '' || !/^\d{16}$/.test(value)
            ? 'Card number must be 16 digits'
            : !luhnCheck(value)
            ? 'Invalid card number (Luhn Algorithm check failed)'
            : '';
        break;
      case 'month':
        error =
          value.trim() === '' ||
          !/^\d{1,2}$/.test(value) ||
          parseInt(value) < 1 ||
          parseInt(value) > 12
            ? 'Invalid month'
            : '';
        break;
      case 'year':
        error =
          value.trim() === '' ||
          !/^\d{4}$/.test(value) ||
          parseInt(value) < new Date().getFullYear()
            ? 'Invalid year'
            : '';
        break;
      case 'cvv':
        error =
          value.trim() === '' || !/^\d{3,4}$/.test(value)
            ? 'CVV must be 3 or 4 digits'
            : '';
        break;
      default:
        break;
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValid = Object.values(errors).every((error) => error === '');
    if (formValid) {
      // Submit the form or proceed with further actions
      console.log('Form submitted successfully');
    } else {
      // Form contains validation errors
      console.log('Form has validation errors');
    }
  };

  // Luhn Algorithm check function
  const luhnCheck = (cardNumber) => {
    let sum = 0;
    let isSecondDigit = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber[i]);
      if (isSecondDigit) {
        digit = digit * 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      isSecondDigit = !isSecondDigit;
    }
    return sum % 10 === 0;
  };

  return (
    <div className={style.credit_card_details}>
      <form onSubmit={handleSubmit}>
        <div className={style.form_group}>
          <label htmlFor='nameOnCard'>Name on card</label>
          <input
            type='text'
            className={style.input}
            name='nameOnCard'
            value={cardDetails.nameOnCard}
            onChange={handleChange}
          />
          <span className={style.error}>{errors.nameOnCard}</span>
        </div>

        <div className={style.form_group}>
          <label htmlFor='cardNumber'>Card number</label>
          <input
            type='text'
            className={style.input}
            name='cardNumber'
            value={cardDetails.cardNumber}
            onChange={handleChange}
          />
          <span className={style.error}>{errors.cardNumber}</span>
        </div>

        <div className={style.group_flex}>
          <div className={style.form_group}>
            <label htmlFor='month'>Month</label>
            <input
              type='text'
              className={style.input}
              name='month'
              value={cardDetails.month}
              onChange={handleChange}
            />
            <span className={style.error}>{errors.month}</span>
          </div>

          <div className={style.form_group}>
            <label htmlFor='year'>Year</label>
            <input
              type='text'
              className={style.input}
              name='year'
              value={cardDetails.year}
              onChange={handleChange}
            />
            <span className={style.error}>{errors.year}</span>
          </div>

          <div className={`${style.form_group} ${style.cvv}`}>
            <label htmlFor='cvv'>CVV</label>
            <input
              type='text'
              className={style.input}
              name='cvv'
              value={cardDetails.cvv}
              onChange={handleChange}
            />
            <span className={style.error}>{errors.cvv}</span>
          </div>
        </div>
        <div className={style.complete_order_button}>
          <Button text='Submit Card Details' color='secondary' />
        </div>
      </form>
    </div>
  );
};

export default CreditCardDetails;
