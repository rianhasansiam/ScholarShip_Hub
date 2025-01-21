







// import React, { useEffect, useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
// import '../Pages/form.css';
// import axios from 'axios';

// const CheckoutForm = ({ _id }) => {
//   const [clientSecret, setClientSecret] = useState('');
//   console.log(clientSecret);
//   console.log(_id);

//   useEffect(() => {
//     if (_id) {
//       getPaymentIntent();
//     }
//   }, [_id]);

//   const getPaymentIntent = async () => {
//     try {
//       const { data } = await axios.post('/create-payment', { _id });
//       setClientSecret(data.client_secret);  // Corrected
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const stripe = useStripe();
//   const elements = useElements();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     const card = elements.getElement(CardElement);

//     if (!card) {
//       return;
//     }

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card,
//     });

//     if (error) {
//       console.log('[error]', error);
//     } else {
//       console.log('[PaymentMethod]', paymentMethod);
//     }

//     // Confirm payment with clientSecret
//     if (!clientSecret) {
//       console.log('No client secret available');
//       return;
//     }

//     try {
//       const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: card,
//           billing_details: {
//             name: 'Jenny Rosen',  // Optionally, replace with user's real name
//           },
//         },
//       });

//       if (error) {
//         console.log('[Payment Error]', error);
//       } else if (paymentIntent.status === 'succeeded') {
//         console.log('Payment succeeded:', paymentIntent);

//         // Post user data and payment information to your database
//         const userData = {
//           userId: 'exampleUserId',  // Replace with actual userId
//           scholarshipId: _id,
//           paymentIntentId: paymentIntent.id,
//           // Add more user data fields if needed
//         };

//         await axios.post('/your-server-api/post-payment-info', userData);
//         console.log('User data posted successfully');
//       }
//     } catch (error) {
//       console.log('Error confirming payment:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <CardElement
//         options={{
//           style: {
//             base: {
//               fontSize: '16px',
//               color: '#424770',
//               '::placeholder': {
//                 color: '#aab7c4',
//               },
//             },
//             invalid: {
//               color: '#9e2146',
//             },
//           },
//         }}
//       />
//       <button className='btn bg-red-500' type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default CheckoutForm;




import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ _id, application_fees }) => {
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  // console.log(clientSecret)
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
// console.log(application_fees, _id)
  useEffect(() => {
    // Fetch client secret when component mounts
 
      axios
        .post('http://localhost:5000/create-payment-intent', {
          _id,
          application_fees,
        })
        .then((response) => {
          setClientSecret(response.data.clientSecret);
          // console.log('onekbar render hoise 1')
        })
        .catch((error) => {
          console.error('Error fetching client secret:', error);
        });

  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      return;
    }

    setIsLoading(true);
    setErrorMessage('');

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: 'Your Name',
        },
      },
    });

    if (error) {
      setErrorMessage(error.message);
      setIsLoading(false);
    } else if (paymentIntent.status === 'succeeded') {
      // Payment succeeded
      console.log('Payment succeeded:', paymentIntent);
      setIsLoading(false);
      navigate(`/application-form/${_id}`)
      // You can now handle post-payment actions, like storing payment info in the database
    }
  };


  const showConfirmationDialog = (event) => {
    event.preventDefault();

    Swal.fire({
      title: 'Are you sure?',
      text: `You are about to pay $${application_fees}.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, pay now!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // If the user confirms the payment, submit the form
        handleSubmit(event);
      } else {
        // Handle cancelation if needed
        console.log('Payment canceled');
      }
    });
  };



//  console.log('render hoise 2')
  return (
    <form onSubmit={showConfirmationDialog}>
      <CardElement options={{ style: { base: { fontSize: '16px' } } }} />


      
      <button type="submit" disabled={!stripe || !clientSecret || isLoading} className="btn bg-black text-white mt-4 border-black px-10 ">
        {isLoading ? 'Processing...' : `Pay $${application_fees}`}
      </button>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </form>
  );
};

export default CheckoutForm;

