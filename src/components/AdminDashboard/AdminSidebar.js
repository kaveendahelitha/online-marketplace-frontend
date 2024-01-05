import React, { useState } from 'react';

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen mt-4 bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white overflow-y-auto transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-semibold">Admin Panel</h1>
          <button
            className="text-white focus:outline-none lg:hidden"
            onClick={toggleSidebar}
          >
            {isOpen ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="p-4">
          {/* Your sidebar links go here */}
          <ul>
            <li className="mb-2">
              <a href="" className="text-white hover:text-gray-300">
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="" className="text-white hover:text-gray-300">
                Products
              </a>
            </li>
            <li className="mb-2">
              <a href="" className="text-white hover:text-gray-300">
                Orders
              </a>
            </li>
            {/* Add more links */}
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="ml-0 lg:ml-64 transition-all duration-300 ease-in-out">
        {/* Your main content goes here */}
        <h1>Main Content Area</h1>
      </div>
    </div>
  );
};

export default AdminSidebar;
