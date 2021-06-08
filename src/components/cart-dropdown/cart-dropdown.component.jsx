import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

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
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          renderCartDropdownList
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={redirectToCheckoutPage}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default CartDropdown;
