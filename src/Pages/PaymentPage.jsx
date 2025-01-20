// // import React, { useState } from 'react';
// // import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// // import { loadStripe } from '@stripe/stripe-js';
// // import { Elements } from '@stripe/react-stripe-js';
// // import Swal from 'sweetalert2';
// // import axios from 'axios';

// // import './form.css'

// // // Load Stripe with the test API key (you can replace with live key in production)
// // const stripePromise = loadStripe(import.meta.env.VITE_Public_key);

// // const CheckoutForm = () => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setLoading(true);

// //     if (!stripe || !elements) return;

// //     const cardElement = elements.getElement(CardElement);

// //     const { error, paymentMethod } = await stripe.createPaymentMethod({
// //       type: 'card',
// //       card: cardElement,
// //     });

// //     if (error) {
// //       Swal.fire({
// //         icon: 'error',
// //         title: 'Payment Error',
// //         text: error.message,
// //       });
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       // Send payment details to the server (for processing)
// //       const { data } = await axios.post('/your-server-api/create-payment-intent', {
// //         paymentMethodId: paymentMethod.id,
// //       });

// //       // Handle response from the server (i.e. successful payment)
// //       if (data.success) {
// //         Swal.fire({
// //           icon: 'success',
// //           title: 'Payment Successful',
// //           text: 'Your payment was successful!',
// //         });

// //         // Call the success callback after payment
// //         // onPaymentSuccess();
// //       }
// //     } catch (error) {
// //       Swal.fire({
// //         icon: 'error',
// //         title: 'Payment Error',
// //         text: 'There was an error processing your payment.',
// //       });
// //     }

// //     setLoading(false);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <CardElement />
// //       <button disabled={loading} className="pay-btn">
// //         {loading ? 'Processing...' : 'Pay Now'}
// //       </button>
// //     </form>
// //   );
// // };

// // const PaymentPage = () => (
// //   <Elements stripe={stripePromise}>
// //     <CheckoutForm  />
// //   </Elements>
// // );

// // export default PaymentPage;








// import React from 'react'
// import CheckoutForm from '../Components/CheckoutForm'
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js';
// const stripePromise = loadStripe(import.meta.env.VITE_Public_key || 'your_fallback_stripe_key');

// const PaymentPage = ({_id}) => {
//   return (
//     <div>
      

//       <Elements stripe={stripePromise}>
//       <CheckoutForm _id={_id} />
//     </Elements>
   

//     </div>
//   )
// }

// export default PaymentPage




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





   
