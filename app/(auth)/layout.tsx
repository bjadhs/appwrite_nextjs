import React from 'react';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col items-center  h-screen bg-indigo-300'>
      <h1 className='text-3xl py-4'>Authentication</h1>
      <div className='flex justify-center items-center w-1/3  my-6 p-6 border border-red-800 rounded-lg bg-gray-100 shadow-lg'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
