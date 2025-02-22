import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { FaUserCircle, FaSignOutAlt, FaMoon, FaSun } from "react-icons/fa"; 
import UserProfileModal from "../modals/UserProfileModal"; // Adjust import to UserProfileModal

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);  

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Elm Street, Springfield"
  };

  const toggleProfileMenu = () => setProfileMenuOpen(!isProfileMenuOpen);
  const openProfileModal = () => setModalOpen(true); 
  const closeProfileModal = () => setModalOpen(false);

  const handleLogout = () => {
    console.log("Logged out");
  };

  const navItems = [
    { path: "/", label: "Available Rides" },
    { path: "/history", label: "Ride History" },
  ];

  return (
    <header className="bg-emerald-600 text-white shadow-md dark:bg-emerald-800 sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <button
            className="lg:hidden mr-2 text-white focus:outline-none"
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            ☰
          </button>

        </div>
        <nav className="hidden lg:flex items-center space-x-4">
  <div className="text-white font-semibold text-xl">
    Welcome to <span className="text-2xl font-bold mr-4">Ride-Hailing Dashboard</span>  <span className="text-emerald-500 ml-4"> & Get a Rider</span>
  </div>
</nav>


        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-white"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <div className="flex justify-end items-center">
            <div className="relative">
              <button
                onClick={toggleProfileMenu}
                className="text-white focus:outline-none flex items-center"
                aria-label="Profile menu"
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white cursor-pointer transition-all duration-200 ease-in-out">
                  <FaUserCircle size={32} />
                </div>
                
                <span className={`ml-0 text-white transition-transform ${isProfileMenuOpen ? "rotate-180" : "rotate-0"}`}>
                  {isProfileMenuOpen ? "▲" : "▼"}
                </span>
              </button>

              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                  <ul className="py-2">
                    <li>
                      <button
                        onClick={openProfileModal}  
                        className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                      >
                        <div className="flex items-center">
                          <FaUserCircle className="mr-2" />
                          View Profile
                        </div>
                      </button>
                    </li>

                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                      >
                        <div className="flex items-center">
                          <FaSignOutAlt className="mr-2" />
                          Logout
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <UserProfileModal
          user={user} 
          onClose={closeProfileModal} 
        />
      )}
    </header>
  );
};

export default Header;
