import React, { useState } from 'react';
import SunIcon from '../icons/SunIcon';
import MoonIcon from '../icons/MoonIcon';

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Crypto Mining App</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#stats" className="hover:underline">Stats</a></li>
          <li><a href="#mining" className="hover:underline">Mining</a></li>
          <li>
            <button onClick={toggleDarkMode}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;