


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
 
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Fetch client secret when component mounts

    axios
      .post('https://assignment-12-server-802u2ppq0-rian-hasan-siams-projects.vercel.app/create-payment-intent', {
        _id,
        application_fees,
      })
      .then((response) => {
        setClientSecret(response.data.clientSecret);
        
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
    
      Swal.fire({
        icon: 'success',
        title: 'Payment succeeded',
        text: 'You have been Payment succeeded..!',
        confirmButtonText: 'OK',
      });
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
      
        Swal.fire({
          icon: 'error',
          title: 'Payment canceled',
          text: 'You have been Payment canceled...!',
          confirmButtonText: 'OK',
        });
      }
    });
  };




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

