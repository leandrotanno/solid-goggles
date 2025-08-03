import { ProfileData, Experience, Project, Education, NavItem } from '@/types';

export const profileData: ProfileData = {
  name: 'Leandro Tanno',
  title: 'Full Stack Developer | Especialista em IA',
  email: 'falae@tanno.online',
  phone: '(11) 99999-9999',
  location: 'Lucas do Rio Verde, MT',
  website: 'tanno.online',
  github: 'https://github.com/leandrotanno',
  linkedin: 'https://www.linkedin.com/in/tanno-leandro-33124323/',
  about: [
    'Sou um desenvolvedor Full Stack apaixonado por tecnologia e inovação. Com mais de X anos de experiência, tenho trabalhado em projetos desafiadores que envolvem desde o desenvolvimento de aplicações web modernas até a implementação de soluções de inteligência artificial.',
    'Minha expertise abrange todo o ciclo de desenvolvimento de software, desde a concepção e design até a implementação e deploy. Tenho experiência sólida em arquitetura de microserviços, desenvolvimento cloud-native e práticas DevOps.',
    'Atualmente, estou focado em projetos que combinam desenvolvimento web com inteligência artificial, especialmente em áreas como computer vision e processamento de linguagem natural. Acredito no poder da tecnologia para resolver problemas reais e impactar positivamente a vida das pessoas.'
  ]
};

export const experience: Experience[] = [
  {
    id: 'exp-1',
    title: 'Senior Full Stack Developer',
    company: 'Empresa Tech Solutions',
    location: 'São Paulo, SP',
    period: 'Jan 2022 - Presente',
    description: 'Desenvolvimento de aplicações web modernas utilizando React, Node.js e Python. Liderança técnica de projetos e mentoria de desenvolvedores júnior. Implementação de soluções de IA e machine learning.',
    skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'GraphQL', 'TypeScript']
  },
  {
    id: 'exp-2',
    title: 'Desenvolvedor Full Stack',
    company: 'Startup Inovação Digital',
    location: 'São Paulo, SP',
    period: 'Mar 2020 - Dez 2021',
    description: 'Criação de MVPs e produtos digitais from scratch. Trabalho com metodologias ágeis e deploy em cloud. Desenvolvimento de APIs RESTful.',
    skills: ['Vue.js', 'Express', 'MongoDB', 'REST APIs', 'Sass', 'Webpack', 'JavaScript']
  },
  {
    id: 'exp-3',
    title: 'Desenvolvedor Frontend',
    company: 'Agência Criativa Web',
    location: 'São Paulo, SP',
    period: 'Jun 2018 - Fev 2020',
    description: 'Desenvolvimento de interfaces responsivas e interativas. Otimização de performance e SEO. Trabalho direto com clientes e UX/UI designers.',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Wordpress', 'SEO', 'UI/UX']
  }
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    name: 'MilhoMetrics',
    description: 'Sistema de detecção de doenças em plantações usando computer vision e ML',
    link: 'https://github.com/leandrotanno/milhometrics',
    image: '🌽',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'AWS', 'Docker']
  },
  {
    id: 'proj-2',
    name: 'E-commerce Platform',
    description: 'Plataforma escalável com suporte a 100k+ usuários simultâneos',
    link: '#',
    image: '🛒',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Kubernetes']
  },
  {
    id: 'proj-3',
    name: 'Virtual Fit AR',
    description: 'App mobile de realidade aumentada para experimentar roupas virtualmente',
    link: '#',
    image: '👔',
    tech: ['React Native', 'Three.js', 'TensorFlow.js', 'AR Core', 'Firebase']
  }
];

export const skills: Record<string, string[]> = {
  'Frontend': ['React / Next.js', 'Vue.js / Nuxt.js', 'TypeScript', 'Tailwind CSS', 'HTML5 / CSS3'],
  'Backend': ['Node.js', 'Python / Django', 'PostgreSQL', 'GraphQL', 'Microservices'],
  'DevOps & Cloud': ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform'],
  'IA & Data Science': ['TensorFlow', 'OpenCV', 'NLP', 'Pandas', 'MLOps']
};

export const education: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bacharelado em Ciência da Computação',
    institution: 'Universidade de São Paulo (USP)',
    period: '2014 - 2018'
  },
  {
    id: 'edu-2',
    degree: 'Especialização em Inteligência Artificial',
    institution: 'Coursera - Stanford University',
    period: '2021'
  }
];

export const navItems: NavItem[] = [
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Experiência' },
  { id: 'projects', label: 'Projetos' },
  { id: 'skills', label: 'Competências' },
  { id: 'education', label: 'Formação' }
];