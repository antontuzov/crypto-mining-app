import React, { useEffect, useState } from 'react';
import { fetchHistoricalData } from '../services/api';
import Chart from './Chart';

const MiningStats: React.FC = () => {
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

  return (
    <section id="stats" className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mining Stats</h2>
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
    </section>
  );
};

export default MiningStats;