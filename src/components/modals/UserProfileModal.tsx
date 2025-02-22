import React from 'react';
import { useTheme } from '../../context/ThemeContext';  // Assuming useTheme is available

const UserProfileModal = ({ user, onClose }: { user: any, onClose: () => void }) => {
  const { theme } = useTheme();  // Get the current theme
  const { name, email, phone, address } = user || {}; 

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className={`p-6 rounded-lg shadow-md max-w-sm w-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>User Profile</h3>

        <p><strong>Name:</strong> {name || 'N/A'}</p>
        <p><strong>Email:</strong> {email || 'N/A'}</p>
        <p><strong>Phone:</strong> {phone || 'N/A'}</p>

        <div className="mt-4">
          <p><strong>Address:</strong> {address || 'N/A'}</p> 
        </div>

        <div className="mt-4 text-right">
          <button 
            onClick={onClose} 
            className={`px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ${theme === 'dark' ? 'bg-red-600 text-white' : 'bg-red-500 text-white'}`}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileModal;
