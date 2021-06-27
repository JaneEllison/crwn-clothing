import { takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';

import { CartActionsTypes } from './cart.types';

export function* tokenPayment({ payload: { token, priceForStripe } }) {
  try {
    yield axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    });
    yield alert('Payment successful');
  } catch (error) {
    console.error('Payment error: ', error);
    alert(
      'There was an issue with your payment. Please sure you use the provider credit cart.'
    );
  }
}

export function* onTokenPaymentStart() {
  yield takeLatest(CartActionsTypes.TOKEN_PAYMENT_START, tokenPayment);
}

export function* cartSagas() {
  yield all([call(onTokenPaymentStart)]);
}
