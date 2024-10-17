import React, { useEffect, useState } from 'react';
import SortComponent from './components/SortComponent';
import SearchComponent from './components/SearchComponent';
import WineList from './components/WineList';
import { Wine } from './types/Wine';

import './App.css';
import './components/SortComponent.css';
import axios from 'axios';



const App: React.FC = () => {
  const [wines, setWines] = useState<Wine[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchWines = async () => {
      try {
        const response = await axios.get('/customer_orders/best_selling');
        
        const tenPercent = Math.round(response.data.length*0.10);
        // Ensure response matches Wine[] structure
        const transformedData: Wine[] = response.data.map((item: Wine, index: number) => {
          return {
            id: item.id,
            name: item.name,
            vintage: item.vintage,
            revenue: item.revenue,
            bottlesSold: item.bottlesSold,
            orders: item.orders,
            sortIndex: index+1,
            isTop: index<tenPercent,
            isBottom: index>=(response.data.length - tenPercent)
          };
        });
        setWines(transformedData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch data'+error);
        setLoading(false);
      }
    };

    fetchWines();
  }, []);

  const handleSort = (criteria: string) => {
    let sortedWines = [...wines];
    if (criteria === 'revenue') {
      sortedWines.sort((a, b) => b.revenue - a.revenue);
    } else if (criteria === 'bottlesSold') {
      sortedWines.sort((a, b) => b.bottlesSold - a.bottlesSold);
    } else if (criteria === 'orders') {
      sortedWines.sort((a, b) => b.orders - a.orders);
    }
            
    const tenPercent = Math.round(sortedWines.length*0.10);
    sortedWines = sortedWines.map<Wine>((wine,index)=>{
      wine.sortIndex = index+1
      wine.isTop = index<tenPercent
      wine.isBottom = index>=(sortedWines.length - tenPercent)
      return wine;
    });
    setWines(sortedWines);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredWines = wines.filter((wine) =>
    wine.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    wine.vintage.toString().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="app-container">
      <h1>Best Selling Wine</h1>
      <SearchComponent onSearch={handleSearch} />
      <SortComponent onSort={handleSort} />
      <WineList wines={filteredWines} />
    </div>
  );
};

export default App;
