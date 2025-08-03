import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProjectsSectionProps, Project } from '@/types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="dark:bg-gray-800 bg-white rounded-xl p-6 dark:hover:bg-gray-800/80 hover:bg-gray-50 transition-all group shadow-lg print:shadow-none print:bg-white print:border print:border-gray-300">
      <div className="flex items-start gap-4">
        <div className="text-4xl flex-shrink-0">{project.image}</div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 print:text-gray-900">
            {project.name}
            {project.link !== '#' && (
              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity print:hidden" />
            )}
          </h3>
          <p className="dark:text-gray-400 text-gray-600 mb-4 print:text-gray-700">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 dark:bg-purple-600/20 bg-purple-100 dark:text-purple-400 text-purple-700 rounded text-xs print:bg-gray-200 print:text-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, className = '' }) => {
  return (
    <section id="projects" className={`mb-20 scroll-mt-20 ${className}`}>
      <h2 className="text-3xl font-bold mb-8 flex items-center gap-3 print:text-gray-900">
        <span className="w-2 h-8 bg-purple-500 rounded-full print:bg-gray-400"></span>
        Projetos
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;