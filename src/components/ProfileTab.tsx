import React from 'react';

const ProfileTab: React.FC = () => {
  const connectWallet = () => {
    if (window.Telegram?.WebApp) {
      const walletAddress = window.Telegram.WebApp.initDataUnsafe?.user?.id?.toString() || '';
      alert(`Wallet connected: ${walletAddress}`);
    } else {
      alert('Telegram WebApp is not available.');
    }
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Profile</h2>
      <button
        onClick={connectWallet}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default ProfileTab;