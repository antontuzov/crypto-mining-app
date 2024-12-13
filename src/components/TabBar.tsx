import React from 'react';
import MiniIcon from '../icons/MiniIcon';
import TopIcon from '../icons/TopIcon';
import TaskIcon from '../icons/TaskIcon';
import EarnIcon from '../icons/EarnIcon';
import GameIcon from '../icons/GameIcon';
import ProfileIcon from '../icons/ProfileIcon';

interface TabBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md">
      <div className="flex justify-around items-center py-2">
        <button
          onClick={() => onTabChange('top')}
          className={`flex flex-col items-center text-white ${
            activeTab === 'top' ? 'text-yellow-300' : ''
          }`}
        >
          <TopIcon />
          <span className="text-xs mt-1">Top</span>
        </button>
        <button
          onClick={() => onTabChange('task')}
          className={`flex flex-col items-center text-white ${
            activeTab === 'task' ? 'text-yellow-300' : ''
          }`}
        >
          <TaskIcon />
          <span className="text-xs mt-1">Task</span>
        </button>
        <button
          onClick={() => onTabChange('earn')}
          className={`flex flex-col items-center text-white ${
            activeTab === 'earn' ? 'text-yellow-300' : ''
          }`}
        >
          <EarnIcon />
          <span className="text-xs mt-1">Earn</span>
        </button>
        <button
          onClick={() => onTabChange('game')}
          className={`flex flex-col items-center text-white ${
            activeTab === 'game' ? 'text-yellow-300' : ''
          }`}
        >
          <GameIcon />
          <span className="text-xs mt-1">Game</span>
        </button>
        <button
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center text-white ${
            activeTab === 'profile' ? 'text-yellow-300' : ''
          }`}
        >
          <ProfileIcon />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default TabBar;