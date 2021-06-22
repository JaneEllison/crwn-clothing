import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessageContainer,
  CartDropdownButton,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);

  const redirectToCheckoutPage = () => {
    history.push('/checkout');
    dispatch(toggleCartHidden());
  };

  const renderCartDropdownList = cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} item={cartItem} />
  ));

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          renderCartDropdownList
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton onClick={redirectToCheckoutPage}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
