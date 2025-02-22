import React from 'react';
import { useTheme } from '../../context/ThemeContext'; 

const RideHistory = () => {
  const { theme } = useTheme(); 
  const bookedRides = JSON.parse(localStorage.getItem('bookedRides') || '[]');

  return (
    <div className={`p-4 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
      <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Ride History</h2>
      {bookedRides.length === 0 ? (
        <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>No rides booked yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {bookedRides.map((ride: any, index: number) => (
            <div
              key={index}
              className={`shadow-md rounded-md p-4 ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'}`}
            >
              <h3 className={`font-bold text-xl mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>{ride.rideName}</h3>
              <p className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>Driver: {ride.driver}</p>
              <p className={`mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>Available Seats: {ride.availableSeats}</p>
              <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Price: {ride.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RideHistory;
