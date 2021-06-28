import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';

import { tokenPaymentStart } from '../../redux/cart/cart.actions';

const publishableKey = process.env.REACT_APP_PAYMENT_KEY;

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;

  const dispatch = useDispatch();

  const onToken = useCallback(
    (token) => {
      dispatch(tokenPaymentStart({ token, priceForStripe }));
    },
    [dispatch, priceForStripe]
  );

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
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
