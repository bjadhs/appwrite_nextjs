'use client';
import { createUserAccount } from '@/config/api';
import { IUser } from '@/types';
import { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    // const newUser: IUser = { email, password };
    // createUserAccount(newUser);
  };

  return (
    <div>
      <h1> Sign In</h1>
      <form onSubmit={submitHandler}>
        <input
          type='email'
          value={email}
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
