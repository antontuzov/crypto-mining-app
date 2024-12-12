import React from 'react';
import Navbar from './components/Navbar';
import MiningStats from './components/MiningStats';
import MiningForm from './components/MiningForm';

const App: React.FC = () => {
  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to Crypto Mining App</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">Start mining cryptocurrencies and track your earnings!</p>
        <MiningStats />
        <MiningForm />
      </div>
    </div>
  );
};

export default App;
