import React, { useState } from 'react';
import AdminNavbar from '../components/AdminDashboard/AdminNavbar';
import AdminSidebar from '../components/AdminDashboard/AdminSidebar';
import Admincontent from '../components/AdminDashboard/maincomponent/Admincontent';

const AdminDashboard = () => {
  const [currentSelection, setCurrentSelection] = useState('');

  const handleButtonClick = (selection) => {
    setCurrentSelection(selection);
  };

  return (
    <>
       <div className="flex">
      <AdminNavbar />
      </div>
      <div className="flex-1 flex">
        <AdminSidebar onButtonClick={handleButtonClick} />
        <Admincontent currentSelection={currentSelection} />
      </div>
    
    </>
  );
};

export default AdminDashboard;
