import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import TabBar from './components/TabBar';
import Animation from './components/Animation';
import Chart from './components/Chart';
import EarnTab from './components/EarnTab';
import GameTab from './components/GameTab';
import ProfileTab from './components/ProfileTab';
import { fetchHistoricalData } from './services/api';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('top');
  const [bitcoinData, setBitcoinData] = useState<number[][] | null>(null);
  const [ethereumData, setEthereumData] = useState<number[][] | null>(null);

  useEffect(() => {
    const getHistoricalData = async () => {
      const bitcoin = await fetchHistoricalData('bitcoin');
      const ethereum = await fetchHistoricalData('ethereum');
      setBitcoinData(bitcoin);
      setEthereumData(ethereum);
    };

    getHistoricalData();
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to Crypto Mining App</h1>
        {activeTab === 'top' && (
          <div className="p-8 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Top</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bitcoin Price</h3>
                {bitcoinData && <Chart data={bitcoinData} label="Bitcoin" />}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ethereum Price</h3>
                {ethereumData && <Chart data={ethereumData} label="Ethereum" />}
              </div>
            </div>
          </div>
        )}
        {activeTab === 'task' && (
          <div className="p-8 bg-gray-100 dark:bg-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Task</h2>
            <Animation />
          </div>
        )}
        {activeTab === 'earn' && <EarnTab />}
        {activeTab === 'game' && <GameTab />}
        {activeTab === 'profile' && <ProfileTab />}
      </div>
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
};

export default App;