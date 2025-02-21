
import React from "react";
import { useTheme } from "../../context/ThemeContext";


const RideCard = ({ ride }: { ride: any }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      } shadow-md rounded-md p-4 hover:shadow-lg transition duration-200`}
    >
      <h3 className="font-bold text-xl mb-2">{ride.rideName}</h3>
      <p className="text-gray-600 mb-2">Driver: {ride.driver}</p>
      <p className="text-gray-600 mb-2">Available Seats: {ride.availableSeats}</p>
      <p className="text-gray-700 font-semibold">Price: ${ride.price}</p>
    </div>
  );
};

export default RideCard;
