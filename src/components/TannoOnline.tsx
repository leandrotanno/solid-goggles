import React, { useState } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const TannoOnline: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const sendEmail = () => {
    window.location.href = "mailto:falae@tanno.online?subject=Contato%20via%20tanno.online&body=Olá,%20gostaria%20de%20entrar%20em%20contato.";
  };

  const socialLinks = [
    { 
      href: 'https://github.com/leandrotanno', 
      icon: Github, 
      label: 'GitHub' 
    },
    { 
      href: 'https://www.linkedin.com/in/tanno-leandro-33124323/', 
      icon: Linkedin, 
      label: 'LinkedIn' 
    },
    { 
      href: 'mailto:falae@tanno.online', 
      icon: Mail, 
      label: 'Email' 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black animate-gradient-shift"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 blur-3xl rounded-full"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <h1 
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-wider cursor-pointer select-none transition-all duration-300 hover:scale-105"
          onClick={sendEmail}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            textShadow: isHovered ? '0 0 30px rgba(255,255,255,0.8), 0 0 60px rgba(255,255,255,0.4)' : 'none',
            fontFamily: "'Arial Black', Arial, sans-serif"
          }}
        >
          tanno.online
        </h1>
      </div>

      {/* Social icons */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 flex gap-4 md:gap-5">
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a 
              key={link.label}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
              aria-label={link.label}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-white/80 hover:text-white transition-all duration-300 hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
            </a>
          );
        })}

        <Link 
          to="/curriculo" 
          className="group"
          aria-label="Ver currículo"
        >
          <FileText className="w-8 h-8 md:w-10 md:h-10 text-white/80 hover:text-white transition-all duration-300 hover:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </Link>
      </div>

      {/* Copyright */}
      <div className="fixed bottom-6 left-6 md:bottom-8 md:left-8">
        <p className="text-sm text-white/50 hover:text-white/80 transition-colors">
          © 2025 Leandro Tanno
        </p>
      </div>
    </div>
  );
};

export default TannoOnline;