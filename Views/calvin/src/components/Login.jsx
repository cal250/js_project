import React from 'react';

const Login = () => {
  return (
    <div className="flex h-screen bg-gray-900 fixed inset-0 z-30">
      <div className="flex flex-col justify-center items-center flex-1 bg-gray-800 text-white p-10">
        <div className="flex items-center mb-6">
          <div className="text-5xl font-bold text-white">HERMES</div>
        </div>
        <p className="max-w-md text-center leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis nisl vitae leo sagittis mattis. Fusce id lacus sit amet eros tincidunt aliquet. Quisque at magna quis nisi ultrices ullamcorper.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center flex-1 p-10">
        <div className="text-2xl text-blue-500 mb-2">WELCOME</div>
        <p className="mb-6 text-white">Create your account to continue</p>
        <form className="flex flex-col w-full max-w-sm">
          <div className="relative mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-3 text-gray-400">👁</span>
          </div>
          <div className="relative mb-4">
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute right-3 top-3 text-gray-400">👁</span>
          </div>
          <div className="mb-6 text-right text-blue-500 cursor-pointer">Forgot password?</div>
          <button 
            type="submit" 
            className="w-full py-3 bg-blue-500 rounded text-white hover:bg-blue-600 transition duration-200"
          >
            SIGN UP
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
