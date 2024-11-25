import React, { useState } from "react"
import SideNav from "./SideNav"
import { Outlet } from "react-router-dom"

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Toggle Button for Mobile */}
      <button
        className="lg:hidden p-4 bg-gray-800 text-white fixed top-4 left-4 z-50 rounded-md"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close" : "Menu"}
      </button>

      {/* SideNav */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transform transition-transform duration-300 fixed lg:relative z-40 h-full lg:h-screen w-3/4 sm:w-2/4 lg:w-2/12 bg-white shadow-lg`}
      >
        <SideNav onClose={() => setIsSidebarOpen(false)} />
      </div>

      {/* Main Content */}
      <div className="w-full lg:w-10/12 p-4 pt-20 lg:p-8">
        <Outlet />
      </div>
    </div>
  )
}
