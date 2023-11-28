"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SigninPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include' // e.g. getting cookies from the backend
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login, e.g., store adminAuthToken in a secure way
        console.log('Admin loggged in successfully', data);

        toast.success('Welcome back!', {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          window.location.href = '/pages/movie/createmovie';
        }, 3000);


      } else {
        // Handle login error
        console.error('Admin login was failed', response.statusText);
        toast.error('Admin login was failed', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
    catch (error) {
      toast.error('An error occurred during login'), {
        position: toast.POSITION.TOP_CENTER
      };
      console.error('An error occurred during login', error);
    }
  }
  return (
    <div className='formpage'>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignin}>Login</button>
    </div>
  )
}

export default SigninPage