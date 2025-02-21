import React from 'react';

const AuthButton = ({ type, text, onClick }) => {
  return (
    <button
      type={type}
      className="w-full p-3 text-white bg-emerald-600 rounded-md hover:bg-emerald-700 focus:outline-none"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default AuthButton;
