import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Styles
import '@/styles/print.css';

// Hooks
import { useTheme } from '@/hooks/useTheme';
import { useScrollspy } from '@/hooks/useScrollspy';

// Components
import ThemeToggle from '@/components/common/ThemeToggle';
import PrintButton from '@/components/common/PrintButton';
import ScrollToTop from '@/components/common/ScrollToTop';
import Header from '@/components/layout/Header';
import Navigation from '@/components/layout/Navigation';
import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';
import EducationSection from '@/components/sections/EducationSection';

// Data
import { 
  profileData, 
  experience, 
  projects, 
  skills, 
  education, 
  navItems 
} from '@/utils/constants';

// Types
import { SectionId } from '@/types';

const Curriculo: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();
  const sections: SectionId[] = navItems.map(item => item.id);
  const { activeSection, scrollToSection } = useScrollspy(sections);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      <div className="dark:bg-gray-900 bg-white dark:text-gray-100 text-gray-900 min-h-screen">
        {/* Back button */}
        <Link 
          to="/" 
          className="fixed top-4 left-4 z-50 p-2 transition-all duration-300 print:hidden"
          aria-label="Voltar para página inicial"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        {/* Theme toggle */}
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Print button */}
        <PrintButton />

        {/* Header */}
        <Header profileData={profileData} />

        {/* Navigation */}
        <Navigation 
          sections={navItems} 
          activeSection={activeSection} 
          onSectionClick={scrollToSection} 
        />

        {/* Main content */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          <AboutSection about={profileData.about} />
          <ExperienceSection experience={experience} />
          <ProjectsSection projects={projects} />
          <SkillsSection skills={skills} />
          <EducationSection education={education} />
        </main>

        {/* Scroll to top */}
        <ScrollToTop />

        {/* Print styles */}
        <style jsx>{`
          @media print {
            * {
              background-color: white !important;
              color: black !important;
              box-shadow: none !important;
              text-shadow: none !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Curriculo;