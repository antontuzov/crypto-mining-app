import React, { useState } from 'react';
import StarIcon from '../icons/StarIcon';

const EarnTab: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const handleMining = () => {
    setCounter(counter + 1);
    console.log('Mining successful! New counter:', counter + 1);
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Earn</h2>
      <div className="flex items-center space-x-4">
        <StarIcon />
        <span className="text-2xl text-gray-900 dark:text-white">{counter}</span>
      </div>
      <button
        onClick={handleMining}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Mine Currency
      </button>
    </div>
  );
};

export default EarnTab;