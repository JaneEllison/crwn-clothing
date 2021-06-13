import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

const SignUp = () => {
  const [signUpValues, setSignUpValues] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = signUpValues;

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setSignUpValues({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setSignUpValues({ ...signUpValues, [name]: value });
  };

  const { displayName, email, password, confirmPassword } = signUpValues;

  return (
    <SignUpContainer>
      <SignUpTitle>I do not have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='displayName'
          type='text'
          value={displayName}
          label='Display Name'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='email'
          type='email'
          value={email}
          label='email'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          label='password'
          handleChange={handleChange}
          required
        />
        <FormInput
          name='confirmPassword'
          type='password'
          value={confirmPassword}
          label='Confirm Password'
          handleChange={handleChange}
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </SignUpContainer>
  );
};

export default SignUp;
