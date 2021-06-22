import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const stripe = require('stripe')(process.env.REACT_APP_PAYMENT_KEY);

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((responce) => {
        alert('Payment successful');
      })
      .catch((error) => {
        console.error("Payment error: ", error);
        alert(
          'There was an issue with your payment. Please sure you use the provider credit cart.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/en/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={stripe}
    />
  );
};

export default StripeCheckoutButton;
