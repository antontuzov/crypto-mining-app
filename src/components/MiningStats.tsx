import React, { useEffect, useState } from 'react';
import { fetchCryptoStats, fetchHistoricalData } from '../services/api';
import Chart from'./Chart';

const MiningStats: React.FC = () => {
  const [stats, setStats] = useState<{ [key: string]: { usd: number } } | null>(null);
  const [currency, setCurrency] = useState('usd');
  const [bitcoinData, setBitcoinData] = useState<number[][] | null>(null);
  const [ethereumData, setEthereumData] = useState<number[][] | null>(null);

  useEffect(() => {
    const getStats = async () => {
      const data = await fetchCryptoStats();
      setStats(data);
    };

    const getHistoricalData = async () => {
      const bitcoin = await fetchHistoricalData('bitcoin');
      const ethereum = await fetchHistoricalData('ethereum');
      setBitcoinData(bitcoin);
      setEthereumData(ethereum);
    };

    getStats();
    getHistoricalData();
  }, []);

  return (
    <section id="stats" className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mining Stats</h2>
      <div className="mb-4">
        <label htmlFor="currency" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Currency
        </label>
        <select
          id="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Bitcoin Price</h3>
          <p className="text-2xl text-gray-900 dark:text-white">
            {stats?.bitcoin ? new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(stats.bitcoin.usd) : 'Loading...'}
          </p>
          {bitcoinData && <Chart data={bitcoinData} label="Bitcoin" />}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Ethereum Price</h3>
          <p className="text-2xl text-gray-900 dark:text-white">
            {stats?.ethereum ? new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(stats.ethereum.usd) : 'Loading...'}
          </p>
          {ethereumData && <Chart data={ethereumData} label="Ethereum" />}
        </div>
      </div>
    </section>
  );
};

export default MiningStats;