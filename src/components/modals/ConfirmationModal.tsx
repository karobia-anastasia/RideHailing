import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ConfirmationModal = ({ ride, onConfirm, onCancel }) => {
  const { theme } = useTheme();  

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className={`p-6 rounded-lg shadow-lg w-80 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Confirm Your Booking</h2>
        <p className={`text-gray-700 mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Are you sure you want to book the ride?</p>
        <div className="mb-4">
          <strong className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>{ride.name}</strong>
          <p className={`text-gray-600 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{ride.description}</p>
          <p className={`text-gray-700 font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Price: ${ride.price}</p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className={`px-4 py-2 rounded-md hover:bg-gray-500 transition duration-300 ${theme === 'dark' ? 'bg-gray-600 text-white hover:bg-gray-700' : 'bg-gray-400 text-white hover:bg-gray-500'}`}
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ${theme === 'dark' ? 'bg-green-600 text-white' : 'bg-green-500 text-white'}`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
