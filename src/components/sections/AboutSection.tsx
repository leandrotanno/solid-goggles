import React from 'react';
import { SectionProps } from '@/types';

interface AboutSectionProps extends SectionProps {
  about: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({ about, className = '' }) => {
  return (
    <section id="about" className={`mb-20 scroll-mt-20 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 print:text-gray-900">
        <span className="w-2 h-8 bg-purple-500 rounded-full print:bg-gray-400"></span>
        Sobre Mim
      </h2>
      <div className="dark:bg-gray-800 bg-white rounded-lg p-8 shadow-lg print:shadow-none print:bg-white print:border print:border-gray-300">
        {about.map((paragraph, index) => (
          <p 
            key={index} 
            className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4 last:mb-0 print:text-gray-800"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;