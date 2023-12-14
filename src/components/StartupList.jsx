// src/components/StartupList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StartupCard from './StartupCard';

const StartupList = ({ onCardClick, filter }) => {
  const [startups, setStartups] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/startups')
      .then(response => setStartups(response.data))
      .catch(error => console.error('Error fetching startups:', error));
  }, []);

  const filteredStartups = filter
    ? startups.filter(startup => startup.IndustryVertical === filter)
    : startups;

  const handleCardClick = (startup) => {
    onCardClick(startup);
  };

  return (
    <div className="flex flex-wrap justify-center">
      {filteredStartups.map(startup => (
        <StartupCard key={startup.SNo} startup={startup} onCardClick={handleCardClick} />
      ))}
    </div>
  );
};

export default StartupList;
