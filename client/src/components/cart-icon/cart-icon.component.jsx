import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartIconContainer,
  ShoppingIconContainer,
  ItemCountContainer,
} from './cart-icon.styles';

const CartIcon = () => {
  const dispatch = useDispatch();

  const сartItemsCount = useSelector(selectCartItemsCount);
  const handleCartIconClick = () => dispatch(toggleCartHidden());

  return (
    <CartIconContainer onClick={handleCartIconClick}>
      <ShoppingIconContainer />
      <ItemCountContainer>{сartItemsCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
