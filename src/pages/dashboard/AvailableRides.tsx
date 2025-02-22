import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTheme } from '../../context/ThemeContext'; 
import ConfirmationModal from '../../components/modals/ConfirmationModal';
import DriverProfileModal from '../../components/modals/DriverProfileModal'; 
import { dummyRides } from '../../data/rideData';

const mapImage = "./assets/maps.jpeg";

const AvailableRides = () => {
  const { theme } = useTheme(); 
  const [availableRides, setAvailableRides] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRide, setSelectedRide] = useState<any>(null);
  const [bookedRides, setBookedRides] = useState<any[]>(() => {
    const savedRides = localStorage.getItem('bookedRides');
    return savedRides ? JSON.parse(savedRides) : [];
  });

  const [pickupLocation, setPickupLocation] = useState<string>('');
  const [dropOffLocation, setDropOffLocation] = useState<string>('');
  const [locationConfirmed, setLocationConfirmed] = useState<boolean>(false);  
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);  
  const [selectedDriver, setSelectedDriver] = useState<any>(null);

  useEffect(() => {
    const fetchRides = () => {
      if (pickupLocation && dropOffLocation) {
        setIsLoading(true);
        axios
          .get('http://localhost:5000/rides', {
            params: {
              pickupLocation,
              dropOffLocation,
            },
          })
          .then((response) => {
            setAvailableRides(response.data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching available rides:', error);
            setAvailableRides(dummyRides); 
            setIsLoading(false);
          });
      } else {
        setAvailableRides([]); 
      }
    };

    fetchRides();
  }, [pickupLocation, dropOffLocation]); 

  const handleBookRide = (ride: any) => {
    setSelectedRide(ride);
  };

  const confirmBooking = () => {
    if (selectedRide) {
      const updatedBookedRides = [...bookedRides, selectedRide];
      setBookedRides(updatedBookedRides);
      localStorage.setItem('bookedRides', JSON.stringify(updatedBookedRides));
      setSelectedRide(null);
    }
  };

  const cancelBooking = () => {
    setSelectedRide(null);
  };

  const handleSubmit = () => {
    if (pickupLocation && dropOffLocation) {
      setLocationConfirmed(true);
    }
  };

  const handleViewDriverProfile = (ride: any) => {
    setSelectedDriver(ride); 
    setIsProfileModalOpen(true); 
  };

  return (
    <div className={`flex flex-col md:flex-row  ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
      <div className={`w-full md:w-2/5 p-4  ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
        <h2 className={`text-xl font-bold mb-4  ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Input Location to Get a Rider</h2>

        <div className="mb-4">
          <label className={`block mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Pickup Location</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter pickup location"
          />
        </div>

        <div className="mb-4">
          <label className={`block mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Drop-off Location</label>
          <input
            type="text"
            value={dropOffLocation}
            onChange={(e) => setDropOffLocation(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter drop-off location"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-emerald-500 text-white rounded-md w-full hover:bg-emerald-600 "
        >
          Confirm Location
        </button>
      </div>

      <div className={`w-full md:w-3/5 p-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <h2 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Map of the Area</h2>
        <div className="mb-6">
          <img
            src={mapImage}
            alt="Map"
            className="w-5/6 h-auto"
          />
        </div>

        <h2 className={`text-2xl font-bold mt-8 mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Available Rides</h2>
        {isLoading ? (
          <div className="text-center">Loading available rides...</div>
        ) : availableRides.length === 0 ? (
          <p>No rides available at the moment.</p>
        ) : (
          <div className= {` space-y-4 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
            {availableRides.map((ride: any, index: number) => (
       <div key={index} className={`shadow-md rounded-md p-4 flex items-center justify-between ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'}`}>
       <div className="w-3/4">
         <div className="mt-4">
           <p className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><strong>Model:</strong> {ride.vehicle.model}</p>
           <p className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><strong>Seats:</strong> {ride.vehicle.seats}</p>
           <p className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><strong>Type:</strong> {ride.vehicle.type}</p>
           <p className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><strong>Color:</strong> {ride.vehicle.color}</p>
           <p className={`text-gray-700 font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>Plate: {ride.vehicle.numberPlate}</p>
         </div>
     
         <button
           onClick={() => handleBookRide(ride)}
           className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition duration-300"
         >
           Request Ride
         </button>
       </div>
     
       <div className="w-1/4 text-center flex flex-col items-center justify-start">
         <div className="mb-4">
           <p className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}><strong>Amount:</strong> {ride.price}</p>
           <p className={`mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-600'}`}>Driver: {ride.driver}</p>
         </div>
         <button
           onClick={() => handleViewDriverProfile(ride)}  
           className={`px-2 py-2 border border-gray-300 text-gray-700 rounded-3xl text-sm hover:border-emerald-500 hover:text-emerald-500 transition duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-700'}`}
         >
           View Driver
         </button>
       </div>
     </div>
     
            ))}
          </div>
        )}
      </div>

      {selectedRide && (
        <ConfirmationModal
          ride={selectedRide}
          onConfirm={confirmBooking}
          onCancel={cancelBooking}
        />
      )}

      {isProfileModalOpen && selectedDriver && (
        <DriverProfileModal 
          driver={selectedDriver} 
          onClose={() => setIsProfileModalOpen(false)} 
        />
      )}
    </div>
  );
};

export default AvailableRides;
