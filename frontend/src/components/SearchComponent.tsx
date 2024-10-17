import React, { useState } from 'react';

interface SearchComponentProps {
  onSearch: (term: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for a wine..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchComponent;
