"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const SignupPage = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
        credentials: 'include'
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful login, e.g., store adminAuthToken in a secure way
        console.log('Admin registered successfully', data);

        toast.success('Admin Registered Successfully!!!', {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          window.location.href = '/pages/movie/createmovie';
        }, 3000);


      } else {
        // Handle login error
        console.error('Admin registration was failed', response.statusText);
        toast.error('Admin registraton was failed', {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    }
    catch (error) {
      toast.error('An error occurred during registration'), {
        position: toast.POSITION.TOP_CENTER
      };
      console.error('An error occurred during registration', error);
    }
  }
  return (
    <div className='formpage'>
      <input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleSignup}>Sign up</button>
    </div>
  )
}

export default SignupPage