import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { signOutStart } from '../../redux/user/user.actions';

import { ReactComponent as Logo } from '../../assets/images/crown-icon.svg';

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';

const Header = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);
  const isCartHidden = useSelector(selectCartHidden);

  const signOutStartOn = useCallback(
    () => dispatch(signOutStart()),
    [dispatch]
  );

  const renderSignComponent = currentUser ? (
    <OptionLink as='div' onClick={signOutStartOn}>
      SIGN OUT
    </OptionLink>
  ) : (
    <OptionLink to='/signin'>SIGN IN</OptionLink>
  );

  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contacts'>CONTACTS</OptionLink>
        {renderSignComponent}
        <CartIcon />
      </OptionsContainer>
      {!isCartHidden && <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
