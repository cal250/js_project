import React, { useState } from 'react';

const Schedule = () => {
  const [formadata, setformData] = useState({
    name: '',
    shop: '',
    Meeting: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setformData({ ...formadata, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:5600/api/adduser', {
      headers: {
        'Content-Type': 'application/json' // Corrected typo
      },
      body: JSON.stringify(formadata),
      method: 'POST'
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error occurred');
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <form className="bg-white p-8 rounded-lg shadow-lg space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formadata.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="shop" className="block text-sm font-medium text-gray-700">Shop</label>
          <input
            type="text"
            id="shop"
            name="shop"
            value={formadata.shop}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="meeting" className="block text-sm font-medium text-gray-700">Meeting</label>
          <input
            type="text"
            id="meeting"
            name="Meeting"
            value={formadata.Meeting}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Schedule;
