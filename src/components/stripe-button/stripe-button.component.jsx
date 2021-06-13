import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J0vJrBIbQqBCa9jR9ur1cpSO17UCNOekXKkVQ7CAAOseFrSWyCRtobBhLorS7Fer1JhF2gByT2Cv5GcvjB7Aqmi00MSzMy5hs';

  const onToken = () => {
    alert('Payment Succsessful');
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
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
