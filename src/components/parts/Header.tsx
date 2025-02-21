import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Header = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

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

          {/* Header Title */}
          <h1 className="text-2xl font-bold">Ride-Hailing Dashboard</h1>
        </div>

        {/* Desktop Navigation Links */}
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

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="text-white"
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;
