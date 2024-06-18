import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Schedule from './Schedule';
import Login from './Login';

const headerData = ["Home", "Services", "Portfolio", "Blog", "Product", "Contact", "Sign In"];

const LinkComponent = ({ name, onClick }) => {
  return (
    <p className='text-lg font-medium hover:underline cursor-pointer' onClick={onClick}>
      {name}
    </p>
  );
};

const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  function handleShowForm() {
    setShowForm((prev) => !prev);
  }

  function handleShowLogin() {
    setShowLogin(true);
  }

  return (
    <div className='bg-gray-50 flex gap-[400px] items-center px-20 shadow-sm fixed top-0 right-0 left-0 z-20'>
      <img src='/logo.png' className='w-40 h-20' alt='Logo' />
      <div className='flex gap-16 pr-10 items-center'>
        <div className='flex gap-5'>
          {headerData.map((data, idx) => (
            <LinkComponent 
              name={data} 
              key={idx} 
              onClick={data === 'Sign In' ? handleShowLogin : null} 
            />
          ))}
        </div>
        {showForm && <Schedule />}

        <button onClick={handleShowForm}>
          <div className='flex gap-5'>Schedule</div>
        </button>

        <label className='flex border rounded-3xl bg-white px-2 py-2'>
          <MagnifyingGlassIcon className='w-6 text-gray-500' />
          <input type="text" className='w-48 outline-none ml-4' placeholder='Search here...' />
        </label>
      </div>
      {showLogin && <Login />}
    </div>
  );
};

export default Header;
