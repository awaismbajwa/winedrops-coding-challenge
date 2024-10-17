import React, { useState } from 'react';
import './SortComponent.css'; 

interface SortComponentProps {
  onSort: (criteria: string) => void;
}

const SortComponent: React.FC<SortComponentProps> = ({ onSort }) => {
  const [activeTab, setActiveTab] = useState('');

  const handleSortClick = (criteria: string) => {
    setActiveTab(criteria);
    onSort(criteria);
  };

  return (
    <div className="sort-tab-container">
      <button
        className={`sort-tab ${activeTab === 'revenue' ? 'active' : ''}`}
        onClick={() => handleSortClick('revenue')}
      >
        By Revenue
      </button>
      <button
        className={`sort-tab ${activeTab === 'bottlesSold' ? 'active' : ''}`}
        onClick={() => handleSortClick('bottlesSold')}
      >
        By Bottles Sold
      </button>
      <button
        className={`sort-tab ${activeTab === 'orders' ? 'active' : ''}`}
        onClick={() => handleSortClick('orders')}
      >
        By Orders
      </button>
    </div>
  );
};

export default SortComponent;
