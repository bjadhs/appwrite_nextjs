'use client';

import { createUserAccount } from '@/config/api';
import { INewUser } from '@/types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(email, password);
    const newUser: INewUser = { email, password };
    createUserAccount(newUser);
    router.push('/todos');
  };

  return (
    <div>
      <h1> Sign Up</h1>
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

export default SignUp;
