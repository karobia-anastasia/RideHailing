import React from 'react';

const UserProfileModal = ({ user, onClose }: { user: any, onClose: () => void }) => {
  const { name, email, phone, address } = user || {}; 
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h3 className="text-xl font-bold mb-4">User Profile</h3>

        <p><strong>Name:</strong> {name || 'N/A'} Anastasia Karobia</p>
        <p><strong>Email:</strong> {email || 'N/A'}</p>
        <p><strong>Phone:</strong> {phone || 'N/A'}</p>

        <div className="mt-4">
          <p><strong>Address:</strong> {address || 'N/A'}</p> 
        </div>

        <div className="mt-4 text-right">
          <button 
            onClick={onClose} 
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
