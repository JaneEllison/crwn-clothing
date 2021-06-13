import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  removeItemFromCart,
  addItem,
} from '../../redux/cart/cart.actions';

// import './checkout-item.styles.scss';
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

  const removeCartItem = () => dispatch(removeItemFromCart(cartItem));
  const clearCartItem = () => dispatch(clearItemFromCart(cartItem));
  const addCartItem = () => dispatch(addItem(cartItem));

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
