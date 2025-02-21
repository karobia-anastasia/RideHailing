// components/cards/RideCard.tsx
import React from 'react';

interface RideCardProps {
  ride: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
  onBook: () => void;
}

const RideCard: React.FC<RideCardProps> = ({ ride, onBook }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition duration-200">
      <h3 className="font-bold text-xl mb-2">{ride.name}</h3>
      <p className="text-gray-600 mb-2">{ride.description}</p>
      <p className="text-gray-700 font-semibold">Price: ${ride.price}</p>
      <button
        onClick={onBook}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Book Ride
      </button>
    </div>
  );
};

export default RideCard;
