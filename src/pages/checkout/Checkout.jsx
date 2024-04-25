import { useRef, useState } from 'react';
import BillingForm from '../../components/billing-form/BillingForm';
import SubHeading from '../../components/sub-heading/SubHeading';
import style from './checkout.module.css';
import PaymentDetails from '../../components/payment-details/PaymentDetails';

const Checkout = () => {
  const [buyerData, setBuyerData] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const checkoutRef = useRef();

  const steps = [
    {
      name: 'Billing Form',
      id: 1,
      content: (
        <BillingForm
          setBuyerData={setBuyerData}
          handleStepsNavigation={handleStepsNavigation}
        />
      ),
    },
    {
      name: 'Payment Details',
      id: 2,
      content: (
        <PaymentDetails
          setPaymentDetails={setPaymentDetails}
          handleStepsNavigation={handleStepsNavigation}
        />
      ),
    },
  ];

  function handleStepsNavigation(mode) {
    if (mode === 'next') {
      setCurrentStep((prevStep) => prevStep + 1);
    } else if (mode === 'prev') {
      if (currentStep > 1) setCurrentStep((prevStep) => prevStep - 1);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className={`page ${style.checkout}`} ref={checkoutRef}>
      <div className={style.header}>
        <SubHeading text='Checkout' />
      </div>

      <div className={style.checkout_steps}>
        {steps[currentStep - 1].content}
      </div>
    </div>
  );
};

export default Checkout;
