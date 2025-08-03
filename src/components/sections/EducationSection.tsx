import React from 'react';
import { EducationSectionProps, Education } from '@/types';

const EducationCard: React.FC<{ education: Education }> = ({ education }) => {
  return (
    <div className="dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg print:shadow-none print:bg-white print:border print:border-gray-300">
      <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 print:text-gray-900">
        {education.degree}
      </h3>
      <p className="dark:text-gray-300 text-gray-700 print:text-gray-800">
        {education.institution}
      </p>
      <p className="dark:text-gray-500 text-gray-600 print:text-gray-700">
        {education.period}
      </p>
      {education.description && (
        <p className="mt-2 dark:text-gray-400 text-gray-600 print:text-gray-700">
          {education.description}
        </p>
      )}
    </div>
  );
};

const EducationSection: React.FC<EducationSectionProps> = ({ education, className = '' }) => {
  return (
    <section id="education" className={`mb-20 scroll-mt-20 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 print:text-gray-900">
        <span className="w-2 h-8 bg-purple-500 rounded-full print:bg-gray-400"></span>
        Formação
      </h2>
      <div className="space-y-6">
        {education.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </section>
  );
};

export default EducationSection;