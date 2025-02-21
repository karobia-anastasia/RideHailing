// import React, { createContext, useState, useContext, useEffect } from 'react';
// import axios from 'axios';

// // Types
// interface Ride {
//   id: string;
//   rideName: string;
//   driver: string;
//   availableSeats: number;
//   price: string;
// }

// // Context Type
// interface RideContextType {
//   availableRides: Ride[];
//   bookedRides: Ride[];
//   isLoading: boolean;
//   bookRide: (ride: Ride) => void;
//   fetchBookedRides: () => void;
// }

// const RideContext = createContext<RideContextType | undefined>(undefined);

// export const useRideContext = () => {
//   const context = useContext(RideContext);
//   if (!context) {
//     throw new Error("useRideContext must be used within a RideProvider");
//   }
//   return context;
// };

// export const RideProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [availableRides, setAvailableRides] = useState<Ride[]>([]);
//   const [bookedRides, setBookedRides] = useState<Ride[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     axios.get('http://localhost:5000/rides')
//       .then((response) => {
//         setAvailableRides(response.data.rides);
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching available rides:', error);
//         setIsLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     const storedBookedRides = JSON.parse(localStorage.getItem('bookedRides') || '[]');
//     setBookedRides(storedBookedRides);
//   }, []);

//   // Book ride
//   const bookRide = (ride: Ride) => {
//     const updatedBookedRides = [...bookedRides, ride];
//     setBookedRides(updatedBookedRides);
//     localStorage.setItem('bookedRides', JSON.stringify(updatedBookedRides));
//   };

//   // Fetch booked rides (for Ride History page)
//   const fetchBookedRides = () => {
//     const storedBookedRides = JSON.parse(localStorage.getItem('bookedRides') || '[]');
//     setBookedRides(storedBookedRides);
//     setIsLoading(false);
//   };

//   return (
//     <RideContext.Provider value={{ availableRides, bookedRides, isLoading, bookRide, fetchBookedRides }}>
//       {children}
//     </RideContext.Provider>
//   );
// };
