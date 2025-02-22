import React from 'react';
import { useTheme } from '../../context/ThemeContext';  

const DriverProfileModal = ({ driver, onClose }) => {
  const { theme } = useTheme(); 
  
  if (!driver) return null;  

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className={`p-6 rounded-lg shadow-md max-w-sm w-full ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Driver Profile</h3>

        <p><strong>Name:</strong> {driver.driver}</p>
        <p><strong>Phone:</strong> {driver.phoneNumber}</p>

        <div className="mt-4">
          <p><strong>Vehicle Model:</strong> {driver.vehicle.model}</p>
          <p><strong>Vehicle Type:</strong> {driver.vehicle.type}</p>
          <p><strong>Seats Available:</strong> {driver.availableSeats}</p>
          <p><strong>Vehicle Color:</strong> {driver.vehicle.color}</p>
          <p><strong>Vehicle Number Plate:</strong> {driver.vehicle.numberPlate}</p>
        </div>

        <div className="mt-4">
          <p><strong>Experience:</strong> 5 years</p>  
          <p><strong>Rating:</strong> 4.5 / 5</p>  
        </div>

        {/* Close Button */}
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

export default DriverProfileModal;
