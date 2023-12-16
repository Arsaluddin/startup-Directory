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
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <header className="bg-blue-500 text-white py-4 w-full">
        <h1 className="text-3xl font-semibold text-center">Startup Directory</h1>
      </header>
      <main className="container mx-auto my-8 flex-grow">
        <div className="flex justify-center space-x-4">
          <FilterDropdown onFilterChange={handleFilterChange} />
        </div>
        <StartupList onCardClick={handleCardClick} filter={filter} />
        {selectedStartup && (
          <DetailedView startup={selectedStartup} onClose={handleCloseDetailedView} />
        )}
      </main>
      <footer className="bg-blue-500 text-white py-2 w-full text-center">
        <p>&copy; 2023 Startup Directory</p>
      </footer>
    </div>
  );
};

export default App;
