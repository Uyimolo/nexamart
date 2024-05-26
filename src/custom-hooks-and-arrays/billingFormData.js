export const billingForm = [
  {
    id: 'billing-name',
    title: 'Full Name',
    type: 'text',
    label: 'Full Name',
    value: 'John Doe',
    error: '',
    required: true,
  },
  {
    id: 'billing-email',
    title: 'Email Address',
    type: 'email',
    label: 'Email Address',
    value: 'johndoe@example.com',
    error: '',
    required: true,
  },
  {
    id: 'billing-address',
    title: 'Billing Address',
    type: 'text',
    label: 'Street Address',
    value: '123 Main Street',
    error: '',
    required: true,
  },
  {
    id: 'billing-city',
    title: 'City',
    type: 'text',
    label: 'Town/City',
    value: 'Anytown',
    error: '',
    required: true,
  },
  {
    id: 'billing-state',
    title: 'State',
    type: 'select',
    label: 'State',
    value: 'CA',
    error: '',
    required: true,
  },
  {
    id: 'billing-country',
    title: 'Country',
    type: 'select',
    label: 'Country',
    value: 'US',
    error: '',
    required: true,
  },
];