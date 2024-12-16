import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';

interface PrizeType {
  id: string; // Add the 'id' property
  option: string;
  style?: { backgroundColor?: string; textColor?: string };
}

const GameTab: React.FC = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const prizes: PrizeType[] = [
    { id: '1', option: 'Prize 1', style: { backgroundColor: '#FF5733', textColor: 'white' } },
    { id: '2', option: 'Prize 2', style: { backgroundColor: '#33FF57', textColor: 'black' } },
    { id: '3', option: 'Prize 3', style: { backgroundColor: '#3357FF', textColor: 'white' } },
    { id: '4', option: 'Prize 4', style: { backgroundColor: '#FF33A1', textColor: 'white' } },
    { id: '5', option: 'Prize 5', style: { backgroundColor: '#A133FF', textColor: 'white' } },
    { id: '6', option: 'Prize 6', style: { backgroundColor: '#33FFF5', textColor: 'black' } },
    { id: '7', option: 'Prize 7', style: { backgroundColor: '#FFC300', textColor: 'black' } },
    { id: '8', option: 'Prize 8', style: { backgroundColor: '#C70039', textColor: 'white' } },
    { id: '9', option: 'Prize 9', style: { backgroundColor: '#900C3F', textColor: 'white' } },
    { id: '10', option: 'Prize 10', style: { backgroundColor: '#581845', textColor: 'white' } },
  ];

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * prizes.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  const handleStopSpinning = () => {
    setMustSpin(false);
    alert(`Congratulations! You won ${prizes[prizeNumber].option}`);
  };

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Game</h2>
      <div className="flex justify-center items-center">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={prizes}
          onStopSpinning={handleStopSpinning}
          backgroundColors={['#3e3e3e', '#df3428']}
          textColors={['#ffffff']}
          outerBorderColor="#111111"
          outerBorderWidth={5}
          innerRadius={10}
          innerBorderColor="#000000"
          innerBorderWidth={5}
          radiusLineColor="#000000"
          radiusLineWidth={3}
          fontFamily="Arial"
          fontSize={18}
          fontWeight="bold"
          perpendicularText={true}
          textDistance={65}
          spinDuration={1}
        />
      </div>
      <button
        onClick={handleSpinClick}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Spin Wheel
      </button>
    </div>
  );
};

export default GameTab;