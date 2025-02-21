import React from 'react';
import { useTheme } from '../../context/ThemeContext'; 

const RideHistory = () => {
  const { theme } = useTheme(); 
  const bookedRides = JSON.parse(localStorage.getItem('bookedRides') || '[]');

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className="text-2xl font-bold mb-4">Ride History</h2>
      {bookedRides.length === 0 ? (
        <p>No rides booked yet.</p>
      ) : (
        <div className="space-y-4">
          {bookedRides.map((ride: any, index: number) => (
            <div
              key={index}
              className={`shadow-md rounded-md p-4 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
              >
              <h3 className="font-bold text-xl mb-2">{ride.rideName}</h3>
              <p className="text-gray-600 mb-2">Driver: {ride.driver}</p>
              <p className="text-gray-600 mb-2">Available Seats: {ride.availableSeats}</p>
              <p className="text-gray-700 font-semibold">Price: {ride.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RideHistory;
