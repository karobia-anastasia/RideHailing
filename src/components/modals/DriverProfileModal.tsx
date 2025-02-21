import React from 'react';

const DriverProfileModal = ({ driver, onClose }: { driver: any, onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
        <h3 className="text-xl font-bold mb-4">Driver Profile</h3>

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

export default DriverProfileModal;
