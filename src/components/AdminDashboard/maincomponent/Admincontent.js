import React from 'react';
import CategoryPage from './CategoryPage'; 
import ItemPage  from './ItemPage';
import CustomizePage from './CustomizePage';

const MainContent = ({ currentSelection }) => {
  return (
    <div className=" flex-1 p-4">
      {/* Display content based on currentSelection */}
      {currentSelection === 'category' && <CategoryPage />}
      {currentSelection === 'item' && <ItemPage />}
      {currentSelection === 'customize' && <CustomizePage />}
    </div>
  );
};

// Separate components for CategoryPage, ItemPage, and CustomizePage go here...

export default MainContent;