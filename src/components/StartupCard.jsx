// src/components/StartupCard.js
import React from 'react';

const StartupCard = ({ startup, onCardClick }) => {
  return (
    <div
      className="bg-white p-6 m-4 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105"
      onClick={() => onCardClick(startup)}
    >
      <h2 className="text-2xl font-bold mb-2">{startup.StartupName}</h2>
      <p className="text-gray-600">{startup.CityLocation}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-lg">Starting Year: {startup.Date.split('/')[2]}</p>
        <p className="text-2xl text-green-600">Funding: {startup.AmountInUSD}</p>
      </div>
    </div>
  );
};

export default StartupCard;
