import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

const SignIn = () => {
  const dispatch = useDispatch();

  const [signInValues, setSignInValues] = useState({
    email: '',
    password: '',
  });

  const onGoogleSignInStart = useCallback(
    () => dispatch(googleSignInStart()),
    [dispatch]
  );
  const onEmailSignInStart = useCallback(
    (email, password) => dispatch(emailSignInStart({ email, password })),
    [dispatch]
  );

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = signInValues;
      onEmailSignInStart(email, password);
    },
    [signInValues, onEmailSignInStart]
  );

  const handleChange = useCallback(
    (event) => {
      event.preventDefault();
      const { name, value } = event.target;
      setSignInValues({ ...signInValues, [name]: value });
    },
    [signInValues]
  );

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={signInValues.email}
          label='email'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={signInValues.password}
          label='password'
          handleChange={handleChange}
          required
        />
        <ButtonsBarContainer>
          <CustomButton type='submit'> Sign in </CustomButton>
          <CustomButton
            type='button'
            onClick={onGoogleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
