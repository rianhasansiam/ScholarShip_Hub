


import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../Components/CheckoutForm';


// Load Stripe with your public key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const PaymentPage = ({ _id, application_fees }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm _id={_id} application_fees={application_fees} />
      </Elements>
    </div>
  );
};

export default PaymentPage;






