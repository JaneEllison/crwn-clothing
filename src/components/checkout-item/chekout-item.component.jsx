import React from 'react';
import { useDispatch } from 'react-redux';

import {
  clearItemFromCart,
  removeItemFromCart,
  addItem,
} from '../../redux/cart/cart.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();

  const removeCartItem = () => dispatch(removeItemFromCart(cartItem));
  const clearCartItem = () => dispatch(clearItemFromCart(cartItem));
  const addCartItem = () => dispatch(addItem(cartItem));

  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={removeCartItem}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={addCartItem}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={clearCartItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
