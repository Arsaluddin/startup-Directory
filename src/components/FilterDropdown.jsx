// src/components/FilterDropdown.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterDropdown = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('');
  const [industryOptions, setIndustryOptions] = useState([]);

  useEffect(() => {
    // Fetch unique industry values from the server
    axios.get('http://localhost:3001/startups')
      .then(response => {
        const uniqueIndustries = [...new Set(response.data.map(startup => startup.IndustryVertical))];
        setIndustryOptions(['', ...uniqueIndustries]); // Include an option for "All Industries"
      })
      .catch(error => console.error('Error fetching startup data:', error));
  }, []);

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedFilter(selectedValue);
    onFilterChange(selectedValue);
  };

  return (
    <div className="my-4">
      <label htmlFor="IndustryVertical" className="block text-sm font-medium text-gray-700">
        Filter by Industry Type
      </label>
      <select
        id="IndustryVertical"
        name="IndustryVertical"
        onChange={handleFilterChange}
        value={selectedFilter}
        className="mt-1 p-2 border rounded-md"
      >
        {industryOptions.map(option => (
          <option key={option} value={option}>{option || 'All Industries'}</option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
