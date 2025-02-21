import React from 'react';


const ConfirmationModal = ({ ride, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-4">Confirm Your Booking</h2>
        <p className="text-gray-700 mb-4">Are you sure you want to book the ride?</p>
        <div className="mb-4">
          <strong>{ride.name}</strong>
          <p className="text-gray-600">{ride.description}</p>
          <p className="text-gray-700 font-semibold">Price: ${ride.price}</p>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
