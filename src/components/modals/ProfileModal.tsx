import React, { useState } from 'react';

const ProfileModal = ({ ride, onCancel }) => {
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-bold mb-4">PROFILE</h2>
          <p className="text-gray-700 mb-4">Name:Anastasia Karobia</p>
          <div className="mb-4">
            <strong>{ride.name}</strong>
            <p className="text-gray-600">Number:0710708505</p>
            <p className="text-gray-700 font-semibold">Age:24</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-300"
            >
              Cancel
            </button>
        
          </div>
        </div>
      </div>
    );
  };
export default ProfileModal;
