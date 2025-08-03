import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';
import { ProfileData } from '@/types';

interface HeaderProps {
  profileData: ProfileData;
}

const Header: React.FC<HeaderProps> = ({ profileData }) => {
  return (
    <header className="relative dark:bg-gradient-to-br dark:from-gray-800 dark:via-gray-900 dark:to-black bg-gradient-to-br from-purple-50 via-white to-gray-50 overflow-hidden print:bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent dark:opacity-100 opacity-50"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 sm:py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* Profile Photo */}
          <div className="relative group">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 p-1">
              <img 
                src="/avatar.jpg" 
                alt="Leandro Tanno" 
                className="w-full h-full rounded-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Leandro+Tanno&size=160&background=7c3aed&color=fff';
                }}
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl group-hover:bg-purple-500/30 transition-all duration-300"></div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent print:text-gray-900">
              {profileData.name}
            </h1>
            <p className="text-xl md:text-2xl dark:text-gray-300 text-gray-700 mb-4 print:text-gray-800">
              {profileData.title}
            </p>
            <p className="dark:text-gray-400 text-gray-600 mb-6 max-w-2xl print:text-gray-700">
              {profileData.about[0]}
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
              <a 
                href={`mailto:${profileData.email}`} 
                className="flex items-center gap-2 dark:hover:text-purple-400 hover:text-purple-600 transition-colors print:text-gray-700"
              >
                <Mail className="w-4 h-4" />
                {profileData.email}
              </a>
              <a 
                href={`tel:${profileData.phone.replace(/\D/g, '')}`} 
                className="flex items-center gap-2 dark:hover:text-purple-400 hover:text-purple-600 transition-colors print:text-gray-700"
              >
                <Phone className="w-4 h-4" />
                {profileData.phone}
              </a>
              <span className="flex items-center gap-2 print:text-gray-700">
                <MapPin className="w-4 h-4" />
                {profileData.location}
              </span>
              <a 
                href={`https://${profileData.website}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 dark:hover:text-purple-400 hover:text-purple-600 transition-colors print:text-gray-700"
              >
                <Globe className="w-4 h-4" />
                {profileData.website}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-4 mt-6">
              <a 
                href={profileData.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 dark:bg-gray-800 bg-gray-200 rounded-lg dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors print:bg-gray-100"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={profileData.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 dark:bg-gray-800 bg-gray-200 rounded-lg dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors print:bg-gray-100"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;