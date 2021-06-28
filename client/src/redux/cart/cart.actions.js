import { CartActionsTypes } from './cart.types';

export const toggleCartHidden = () => ({
  type: CartActionsTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionsTypes.ADD_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionsTypes.CLEAR_ITEM,
  payload: item,
});

export const removeItemFromCart = (item) => ({
  type: CartActionsTypes.REMOVE_ITEM,
  payload: item,
});

export const clearCart = () => ({
  type: CartActionsTypes.CLEAR_CART,
});

export const tokenPaymentStart = ({ token, priceForStripe }) => ({
  type: CartActionsTypes.TOKEN_PAYMENT_START,
  payload: { token, priceForStripe },
});
