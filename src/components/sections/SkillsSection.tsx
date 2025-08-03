import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SkillsSectionProps } from '@/types';

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, className = '' }) => {
  return (
    <section id="skills" className={`mb-20 scroll-mt-20 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 print:text-gray-900">
        <span className="w-2 h-8 bg-purple-500 rounded-full print:bg-gray-400"></span>
        Competências
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div 
            key={category} 
            className="dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg print:shadow-none print:bg-white print:border print:border-gray-300"
          >
            <h3 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400 print:text-gray-900">
              {category}
            </h3>
            <ul className="space-y-2">
              {items.map((skill) => (
                <li 
                  key={skill} 
                  className="flex items-center gap-2 dark:text-gray-300 text-gray-700 print:text-gray-800"
                >
                  <ChevronRight className="w-4 h-4 text-purple-500 print:text-gray-500 flex-shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;