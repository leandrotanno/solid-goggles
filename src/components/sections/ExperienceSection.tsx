import React from 'react';
import { ExperienceSectionProps, Experience } from '@/types';

const ExperienceCard: React.FC<{ job: Experience }> = ({ job }) => {
  return (
    <div className="relative pl-8 border-l-2 dark:border-gray-700 border-gray-300 dark:hover:border-purple-500 hover:border-purple-400 transition-colors print:border-gray-400">
      <div className="absolute -left-2 top-0 w-4 h-4 dark:bg-gray-800 bg-white border-2 border-purple-500 rounded-full print:bg-white print:border-gray-400"></div>
      <div className="dark:bg-gray-800 bg-white rounded-lg p-6 dark:hover:bg-gray-800/80 hover:bg-gray-50 transition-all shadow-lg print:shadow-none print:bg-white print:border print:border-gray-300">
        <div className="flex flex-wrap justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400 print:text-gray-900">
              {job.title}
            </h3>
            <p className="dark:text-gray-300 text-gray-700 print:text-gray-800">
              {job.company} • {job.location}
            </p>
          </div>
          <span className="dark:text-gray-500 text-gray-600 text-sm print:text-gray-700">
            {job.period}
          </span>
        </div>
        <p className="dark:text-gray-400 text-gray-600 mb-4 print:text-gray-700">
          {job.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skill) => (
            <span 
              key={skill} 
              className="px-3 py-1 dark:bg-purple-600/20 bg-purple-100 dark:text-purple-400 text-purple-700 rounded-full text-sm print:bg-gray-200 print:text-gray-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experience, className = '' }) => {
  return (
    <section id="experience" className={`mb-20 scroll-mt-20 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 print:text-gray-900">
        <span className="w-2 h-8 bg-purple-500 rounded-full print:bg-gray-400"></span>
        Experiência
      </h2>
      <div className="space-y-8">
        {experience.map((job) => (
          <ExperienceCard key={job.id} job={job} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;