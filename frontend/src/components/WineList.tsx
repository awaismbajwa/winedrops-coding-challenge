import React from 'react';
import { Wine } from '../types/Wine';
import './WineList.css';

interface WineListProps {
  wines: Wine[];
}

const WineList: React.FC<WineListProps> = ({ wines }) => {
  return (
    <div className="wine-list">
      {wines.map((wine) => (
        <div key={wine.id} className={`wine-card ${wine.isTop ? 'topTen':''} ${wine.isBottom ? 'bottomTen':''}`}>
          <span className="wine-attribute">{wine.sortIndex+"-   "+wine.name + "  -  "+wine.vintage}</span>
          
          <span className="wine-attribute">Revenue: ${wine.revenue}</span>
          <span className="wine-attribute">Bottles Sold: {wine.bottlesSold}</span>
          <span className="wine-attribute">Orders: {wine.orders}</span>
        </div>
      ))}
    </div>
  );
};

export default WineList;
