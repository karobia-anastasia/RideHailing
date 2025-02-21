import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const toggleProfileMenu = () => setProfileMenuOpen(!isProfileMenuOpen);
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

          <h1 className="text-2xl font-bold">Ride-Hailing Dashboard</h1>
        </div>

        <nav className="hidden lg:flex space-x-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-white hover:text-emerald-300 ${location.pathname === item.path ? "font-bold" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="text-white"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
          <div className="relative">
            <button
              onClick={toggleProfileMenu}
              className="text-white focus:outline-none"
              aria-label="Profile menu"
            >
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-emerald-600">
               <span className="ml-4">                👤
               </span>
                <span className="ml-2 text-white">
                {isProfileMenuOpen ? "▲" : "▼"}
              </span>
              </div>

            </button>

            {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg">
                <ul className="py-2">
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      View Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useTheme } from "../../context/ThemeContext";

// const Header = ({ toggleSidebar }) => {
//   const { theme, toggleTheme } = useTheme();
//   const location = useLocation();

//   const navItems = [
//     { path: "/", label: "Available Rides" },
//     { path: "/history", label: "Ride History" },
//   ];

//   return (
//     <header className="bg-emerald-600 text-white shadow-md dark:bg-emerald-800 sticky top-0 z-30">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <div className="flex items-center">
//           <button
//             className="lg:hidden mr-2 text-white focus:outline-none"
//             onClick={toggleSidebar}
//             aria-label="Toggle Sidebar"
//           >
//             ☰
//           </button>

//           <h1 className="text-2xl font-bold">Ride-Hailing Dashboard</h1>
//         </div>

//         <nav className="hidden lg:flex space-x-4">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`text-white hover:text-emerald-300 ${location.pathname === item.path ? "font-bold" : ""}`}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </nav>

//         <button
//           onClick={toggleTheme}
//           className="text-white"
//           aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
//         >
//           {theme === "light" ? "🌙" : "☀️"}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
