// src/components/DetailedView.js
import React from 'react';

const DetailedView = ({ startup, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{startup.StartupName}</h2>
        <p className="text-gray-600">City: {startup.CityLocation}</p>
        <p className="text-gray-600">Starting Year: {startup.Date.split('/')[2]}</p>
        <p className="text-gray-600">Industry: {startup.IndustryVertical}</p>
        <p className="text-gray-600">Sub-Industry: {startup.SubVertical}</p>
        <p className="text-gray-600">Investors: {startup.InvestorsName}</p>
        <p className="text-gray-600">Investment Type: {startup.InvestmentType}</p>
        <p className="text-gray-600">Amount in USD: {startup.AmountInUSD}</p>
        {/* Add more details as needed */}
        <button
  className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md"
  onClick={onClose}
>
  Close
</button>
      </div>
    </div>
  );
};

export default DetailedView;
