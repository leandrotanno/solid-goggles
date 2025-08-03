import React, { useState } from 'react';
import { ThemeToggleProps } from '@/types';

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, setDarkMode }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    setIsAnimating(true);
    setDarkMode(!darkMode);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="fixed top-4 right-[190px] z-50 p-1 transition-all duration-300 print:hidden overflow-hidden flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <span
          className={`text-2xl inline-block transition-all duration-500 ${
            isAnimating ? 'animate-theme-switch' : ''
          }`}
        >
          {darkMode ? '☀️' : '🌙'}
        </span>
      </button>

      <style jsx>{`
        @keyframes theme-switch {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(180deg); }
          50% { transform: scale(1.2) rotate(360deg); }
          75% { transform: scale(1.1) rotate(540deg); }
          100% { transform: scale(1) rotate(720deg); }
        }
       
        .animate-theme-switch {
          animation: theme-switch 0.6s ease-in-out;
        }
      `}</style>
    </>
  );
};

export default ThemeToggle;