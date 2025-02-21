import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RideCard from '../../components/cards/RideCard';
import ConfirmationModal from '../../components/modals/ConfirmationModal';

const AvailableRides: React.FC = () => {
  const [availableRides, setAvailableRides] = useState<any[]>([]); // Ride data
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [selectedRide, setSelectedRide] = useState<any>(null); // Selected ride for booking

  useEffect(() => {
    axios
      .get('http://localhost:5000/rides') // API endpoint for rides
      .then((response) => {
        console.log('Fetched data:', response.data); // Debug log
        setAvailableRides(response.data); // Directly set response data (it is already an array of rides)
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching available rides:', error);
        setIsLoading(false);
      });
  }, []);

  const handleBookRide = (ride: any) => {
    setSelectedRide(ride); // Set the selected ride for confirmation
  };

  const confirmBooking = () => {
    if (selectedRide) {
      console.log('Booking confirmed for ride:', selectedRide);
      setSelectedRide(null); // Clear selected ride after booking
    }
  };

  const cancelBooking = () => {
    setSelectedRide(null); // Close modal and clear selected ride
  };

  if (isLoading) {
    return <div className="text-center">Loading available rides...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Available Rides</h2>
      {availableRides.length === 0 ? (
        <p>No rides available at the moment.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableRides.map((ride: any) => (
            <div key={ride.id} className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition duration-200">
              <h3 className="font-bold text-xl mb-2">{ride.rideName}</h3>
              <p className="text-gray-600 mb-2">Driver: {ride.driver}</p>
              <p className="text-gray-600 mb-2">Available Seats: {ride.availableSeats}</p>
              <p className="text-gray-700 font-semibold">Price: {ride.price}</p>
              <button
                onClick={() => handleBookRide(ride)}
                className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300"
              >
                Book Ride
              </button>
            </div>
          ))}
        </div>
      )}
      {selectedRide && (
        <ConfirmationModal
          ride={selectedRide}
          onConfirm={confirmBooking}
          onCancel={cancelBooking}
        />
      )}
    </div>
  );
};

export default AvailableRides;
