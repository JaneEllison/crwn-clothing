import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

const SignIn = () => {
  const [signInValues, setSignInValues] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    setSignInValues({ email: '', password: '' });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setSignInValues({ ...signInValues, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
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
        <CustomButton type='submit'> Sign in </CustomButton>
        <CustomButton onClick={signInWithGoogle}>
          {' '}
          Sign in with Google{' '}
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
