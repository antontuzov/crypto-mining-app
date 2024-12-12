import React, { useState } from 'react';

const MiningForm: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Mining started for wallet: ${walletAddress}`);
  };

  const connectWallet = () => {
    if (window.Telegram?.WebApp) {
      // Ensure the wallet address is a string
      const walletAddress = window.Telegram.WebApp.initDataUnsafe?.user?.id?.toString() || '';
      setWalletAddress(walletAddress);
    } else {
      alert('Telegram WebApp is not available.');
    }
  };

  return (
    <section id="mining" className="p-8 bg-gray-200 dark:bg-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Start Mining</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <div className="mb-4">
          <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Wallet Address
          </label>
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
            placeholder="Enter your wallet address"
            required
          />
        </div>
        <button
          type="button"
          onClick={connectWallet}
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mb-4"
        >
          Connect Wallet via Telegram
        </button>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Start Mining
        </button>
      </form>
    </section>
  );
};

export default MiningForm;