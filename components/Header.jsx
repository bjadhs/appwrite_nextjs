'use client'
import React from 'react'
import { Button } from './ui/button'
import { logoutUser } from '@/config/api';
import Link from 'next/link';

const Header = () => {
  const signOut = async () => {
    console.log('signing out');
    await logoutUser;
  }
  return (
    <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
    <h1 className='text-3xl font-bold'>Todo App</h1>
    <Button variant='outline' onClick={signOut} asChild>
    <Link href='/login'>
    Sign Out
    </Link>
    </Button>
    </div>
  )
}

export default Header