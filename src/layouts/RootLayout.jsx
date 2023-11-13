import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const SidebarNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div class="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <aside class="w-64 bg-gray-800 p-4 text-white">
          {/* Sidebar Content Goes Here */}
          <div class="mb-4">
            <h2 class="text-xl font-semibold">Sidebar Title</h2>
          </div>
          <ul>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-300">
                Link 1
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-300">
                Link 2
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="hover:text-gray-300">
                Link 3
              </a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </aside>

        {/* Main Content */}
        <div class="flex-1 flex flex-col overflow-hidden">
          {/* Page Content Goes Here */}
          <header class="bg-white shadow">
            <div class="p-4">
              <h1 class="text-xl font-semibold">Page Title</h1>
            </div>
          </header>
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
            {/* Page Content Goes Here  */}
            <p>Your main content goes here.</p>
            <Outlet />
          </main>
        </div>
      </div>
    </>
    // <div className={`sidebar-navbar ${isOpen ? 'open' : ''}`}>
    //     <div className="sidebar-toggle" onClick={toggleSidebar}>
    //         <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
    //     </div>
    //     <ul className="nav-items">
    //         <li className="nav-item">Home</li>
    //         <li className="nav-item">About</li>
    //         <li className="nav-item">Services</li>
    //         <li className="nav-item">Contact</li>
    //     </ul>
    // </div>
  );
};

export default SidebarNavbar;
