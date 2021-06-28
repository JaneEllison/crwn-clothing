import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  removeItemFromCart,
  addItem,
} from '../../redux/cart/cart.actions';

import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  const removeCartItem = useCallback(
    () => dispatch(removeItemFromCart(cartItem)),
    [cartItem, dispatch]
  );
  const clearCartItem = useCallback(
    () => dispatch(clearItemFromCart(cartItem)),
    [cartItem, dispatch]
  );
  const addCartItem = useCallback(
    () => dispatch(addItem(cartItem)),
    [cartItem, dispatch]
  );

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt='item' />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={removeCartItem}>&#10094;</div>
        <TextContainer>{quantity}</TextContainer>
        <div onClick={addCartItem}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={clearCartItem}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
