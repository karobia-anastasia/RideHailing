import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Outlet } from "react-router-dom"; 
import Header from "../components/parts/Header";
import Sidebar from "../components/parts/Sidebar";
import Footer from "../components/parts/Footer";

const Layout = () => {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === "dark" ? "dark" : ""}`}>
      <Header toggleSidebar={toggleSidebar} />

      <div className="flex ">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        
        <main
          className={`flex-1 overflow-y-auto p-4 h-[calc(100vh-4rem)] ${
            isSidebarOpen ? "lg:ml-64" : "lg:ml-0"
          }`}
        >
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
