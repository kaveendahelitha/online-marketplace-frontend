import React from 'react';

const AdminSidebar = ({ onButtonClick }) => {


  return (
    <div className="bg-gray-200 p-4 w-64 md:w-1/4 lg:w-1/5 xl:w-1/6 min-h-screen">
    <button
      className="w-full block mb-2 border border-gray-400 rounded-md p-2 hover:bg-gray-300"
      onClick={() => onButtonClick('category')}
    >
       Category
    </button>
    <button
      className="w-full block mb-2 border border-gray-400 rounded-md p-2 hover:bg-gray-300"
      onClick={() => onButtonClick('item')}
    >
      Add Product
    </button>
    <button
      className="w-full block mb-2 border border-gray-400 rounded-md p-2 hover:bg-gray-300"
      onClick={() => onButtonClick('customize')}
    >
      Customize Product
    </button>
  </div>
  );
};

export default AdminSidebar;
