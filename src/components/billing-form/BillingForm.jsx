/* eslint-disable react/prop-types */
import { useState } from 'react';
import style from './billingForm.module.css';
import Button from '../button/Button';
import { toast } from 'react-toastify';
import { billingForm } from '../../custom-hooks-and-arrays/billingFormData';

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/;

const BillingForm = ({ setBuyerData, handleStepsNavigation}) => {
  const [billingFormGroups, setBillingFormGroups] = useState(billingForm);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setBillingFormGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === id
          ? { ...group, value, error: validateInput(id, value) }
          : group
      )
    );
  };

  const validateInput = (id, value) => {
    switch (id) {
      case 'billing-email':
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address.';
        }
        return '';
      case 'billing-name':
      case 'billing-address':
      case 'billing-city':
        if (value.trim() === '') {
          return 'This field is required.';
        }
        return '';
      default:
        return '';
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation error check
    const hasErrors = billingFormGroups.some((group) => group.error !== '');
    if (hasErrors) {
      toast.error('Please fix all errors before submitting the form.');
      return;
    }

    setBuyerData(billingFormGroups);
    handleStepsNavigation('next')
  };

  return (
    <div>
      <form action='' onSubmit={handleSubmit} className={style.billing_form}>
        <p>Please provide your delivery details.</p>

        <div className={style.form_group_container}>
          {billingFormGroups.map((formGroup) => (
            <div className={style.form_group} key={formGroup.id}>
              <label className={style.label} htmlFor={formGroup.id}>
                {formGroup.label}
              </label>
              <input
                className={`${style.input} ${
                  formGroup.error ? `${style.error}` : ''
                } `}
                type={formGroup.type}
                id={formGroup.id}
                value={formGroup.value}
                onChange={handleChange}
              />

              <p className={style.error_message}>
                {formGroup.error && formGroup.error}
              </p>
            </div>
          ))}
        </div>
        <Button onClick={handleSubmit} text='Submit Order' color='secondary' />
      </form>
    </div>
  );
};

export default BillingForm;
