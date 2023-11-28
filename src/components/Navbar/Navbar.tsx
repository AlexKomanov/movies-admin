"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {

  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);


  return (
    <div className='navbar'>
      <Image src={logo} alt="Logo" width={100} className='logo' />
      <div className="adminlinks">
        {isAdminAuthenticated ? (
          <>
            {/* Show links for authenticated admin */}
            <Link href='/pages/movie/createmovie'>Add Movie</Link>
            <Link href='/pages/screen'>Add Screen</Link>
            <Link href='/pages/schedule'>Add Schedule</Link>
            <Link href='/pages/movie/addceleb'>Add Celebrity</Link>
          </>
        ) : (
          <>
            {/* Show links for not authenticated admin */}
            <Link href='/pages/auth/signin'>Login</Link>
            <Link href='/pages/auth/signup'>Signup</Link>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar;