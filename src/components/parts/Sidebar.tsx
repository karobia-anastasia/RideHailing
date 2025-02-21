import React from "react"
import { NavLink, useLocation } from "react-router-dom" 

const Sidebar: React.FC<{ isSidebarOpen: boolean; toggleSidebar: () => void }> = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation()

  const navItems = [
    { path: "available-rides", label: "Available Rides" },
    { path: "history", label: "Ride History" },
  ]

  return (
    <aside
      className={`bg-emerald-500 text-white w-64 min-h-screen p-4 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out fixed lg:relative lg:translate-x-0 z-20 dark:bg-emerald-700`}
    >
      <nav className="mt-8">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `block py-2 px-4 rounded ${isActive ? "bg-emerald-600 dark:bg-emerald-800" : "hover:bg-emerald-600 dark:hover:bg-emerald-800"}`
            }
            onClick={toggleSidebar}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
