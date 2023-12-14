// src/App.js
import React, { useState } from 'react';
import StartupList from './components/StartupList';
import DetailedView from './components/DetailedView';
import FilterDropdown from './components/FilterDropdown';

const App = () => {
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [filter, setFilter] = useState('');

  const handleCardClick = (startup) => {
    setSelectedStartup(startup);
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  const handleCloseDetailedView = () => {
    setSelectedStartup(null);
  };

  return (
    <div className="container mx-auto my-8">
      <FilterDropdown onFilterChange={handleFilterChange} />
      <StartupList onCardClick={handleCardClick} filter={filter} />
      {selectedStartup && (
        <DetailedView startup={selectedStartup} onClose={handleCloseDetailedView} />
      )}
    </div>
  );
};

export default App;
