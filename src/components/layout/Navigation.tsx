import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationProps } from '@/types';

const Navigation: React.FC<NavigationProps> = ({ sections, activeSection, onSectionClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId as any);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-40 dark:bg-gray-800/95 bg-white/95 backdrop-blur-sm border-b dark:border-gray-700 border-gray-200 print:hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile menu button */}
        <div className="md:hidden flex justify-between items-center py-4">
          <span className="text-lg font-semibold">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 dark:hover:bg-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {sections.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSectionClick(item.id)}
              className={`py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                activeSection === item.id
                  ? 'border-purple-500 text-purple-500 dark:text-purple-400'
                  : 'border-transparent dark:text-gray-400 text-gray-600 dark:hover:text-gray-200 hover:text-gray-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {sections.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-purple-600 text-white'
                    : 'dark:text-gray-400 text-gray-600 dark:hover:bg-gray-700 hover:bg-gray-200 dark:hover:text-gray-200 hover:text-gray-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;