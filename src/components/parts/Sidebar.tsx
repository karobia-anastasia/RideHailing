import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar= ({
  isSidebarOpen,
  toggleSidebar,
}) => {
  const navItems = [
    { path: "/available-rides", label: "Available Rides" },
    { path: "/history", label: "Ride History" },
  ];

  return (
    <aside
      className={`bg-emerald-500 text-white w-64 h-screen p-4 transition-transform duration-300 ease-in-out
        lg:sticky lg:top-0 lg:h-[calc(100vh-4rem)] 
        fixed top-1 left-0 bottom-0 z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 dark:bg-emerald-700`}
    >
      <nav className="mt-8 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block py-2 px-4 rounded transition-colors ${
                isActive
                  ? "bg-emerald-600 dark:bg-emerald-800"
                  : "hover:bg-emerald-600 dark:hover:bg-emerald-800"
              }`
            }
            onClick={() => {
              if (!window.matchMedia("(min-width: 1024px)").matches) {
                toggleSidebar();
              }
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
