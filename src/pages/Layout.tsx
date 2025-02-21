"use client";

import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Outlet } from "react-router-dom";  // Import Outlet to render nested routes
import Header from "../components/parts/Header";
import Sidebar from "../components/parts/Sidebar";
import Footer from "../components/parts/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme(); // Get the current theme
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar open/close state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar open state
  };

  return (
    // Apply the theme to the root div to control overall styling
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <div className="bg-white text-gray-900 dark:bg-gray-800 dark:text-white flex flex-col grow">
        {/* Header component */}
        <Header toggleSidebar={toggleSidebar} />

        <div className="flex flex-grow">
          {/* Sidebar component */}
          <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Main content area */}
          <main className="flex-1 p-4">
            {/* Render nested route content here */}
            <Outlet />  {/* This will render the child routes */}
          </main>
        </div>

        {/* Footer component */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
