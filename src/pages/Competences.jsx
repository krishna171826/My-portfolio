import { StarfieldBackground } from '../components/Background'
import { Skills } from '../components/Skills'
import { Tools } from '../components/Tools'

const languagesAndFrameworks = [
  {
    language: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Développement web interactif, scripting côté client et serveur',
    frameworks: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        tags: ['Frontend', 'Components', 'Hooks']
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        tags: ['Full-stack', 'SSR', 'API Routes']
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        tags: ['Backend', 'Runtime', 'Async']
      },
      {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        tags: ['Web Framework', 'API', 'Middleware']
      },
      {
        name: 'Socket.io',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
        tags: ['Realtime', 'WebSockets', 'Events']  
      },
    ]
  },
  {
    language: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    description: 'Types statiques, applications robustes et maintenables',
    frameworks: [
      {
        name: 'React + TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        tags: ['Typed Components', 'Props', 'Strict']
      },
      {
        name: 'Nest.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
        tags: ['Backend', 'Decorators', 'Enterprise']
      }
    ]
  },
  {
    language: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    description: 'Langage versatile pour backend et data science',
    frameworks: [
      {
        name: 'Flask',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
        tags: ['Microframework', 'Lightweight', 'API']
      },
      {
        name: 'Jinja',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tags: ['Templating', 'Server-side Rendering', 'Python-based']
      },
      {
        name: 'Matplotlib',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tags: ['Data Visualization', 'Charts', 'Plots']
      },
      {
        name: 'Pandas',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tags: ['Data Analysis', 'DataFrames', 'Python-based']   
      },
      

    ]
  },
  {
    language: 'Databases',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    description: 'Solutions de stockage de données relationnelles et NoSQL',
    frameworks: [
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        tags: ['NoSQL', 'Documents', 'Flexible']
      },
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        tags: ['SQL', 'Relationnel', 'Robust']
      },
      {
        name: 'MySQLlite',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        tags: ['SQL', 'Relationnel', 'Lightweight']
      },

    ]
  },
  {
    language: 'Styling',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    description: 'Frameworks CSS pour designs modernes et responsifs',
    frameworks: [
      {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
        tags: ['Utility-first', 'Responsive', 'Dark Mode']
      },
      {
        name: 'HTML5 & CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        tags: ['Semantic', 'Standards', 'Responsive']
      },
      { 
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        tags: ['CSS Framework', 'Responsive', 'Components']
      },
      {
        name: 'Shadcn UI',
        icon: 'https://shadcn.com/favicon-96x96.png',
        tags: ['Component Library', 'Tailwind-based', 'Accessible'] 
      },
    ]
  },
  {
    language: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    description: 'Programmation orientee objet et developpement backend robuste',
    frameworks: [
      {
        name: 'Spring Boot',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
        tags: ['Backend', 'Microservices', 'Enterprise']
      },
      {
        name: 'OOP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        tags: ['Classes', 'Heritage', 'Polymorphism']
      }
    ]
  },
  {
    language: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    description: 'Langage de programmation pour le développement backend',
    frameworks: [
      {
        name: 'Symfony',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
        tags: ['Framework', 'MVC', 'Enterprise']
      },
      {
        name: 'Laravel',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
        tags: ['Framework', 'MVC', 'Web Applications']
      }
    ]
  },
  {
    language: 'Application Mobile',
    icon: 'https://cdn.simpleicons.org/android/3DDC84',
    description: "Développement d'applications mobiles Android",
    frameworks: [
      {
        name: 'Android',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
        tags: ['Mobile', 'UI', 'Development']
      },
    ]
  },

]

const tools = [
  { 
    name: 'Git', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  { 
    name: 'GitHub', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  { 
    name: 'VS Code', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  { 
    name: 'Postman', 
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
  { 
    name: 'Figma', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  { 
    name: 'npm', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
  },
  { 
    name: 'Docker', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'Android Studio',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg',
  },
  {
    name: 'Arduino IDE',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',    
  },
  { 
    name: 'SolidWorks', 
    icon: 'https://img.icons8.com/color/96/solidworks.png',
  },
  {
    name: 'Bash',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg',  
  },
  {
    name: 'Canva',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg',
  },

]


export default function Competences() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent px-5 pb-16 pt-28 text-white sm:px-8">
      <StarfieldBackground />

      <section className="relative z-10 mx-auto w-full max-w-7xl">
        <header className="mb-16 text-center sm:mb-20">
          <p className="font-mono text-sm tracking-[0.35em] text-zinc-400 uppercase">Professional Profile</p>
          <h1 className="mt-4 font-mono text-4xl font-medium tracking-tight text-white sm:text-6xl">
            <span className="text-white">My </span>
            <span className="text-slate-300">Competences</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-300/80 sm:text-base">
            The languages, frameworks, and tools I use to build modern web experiences.
          </p>
        </header>

        <Skills items={languagesAndFrameworks} index="01" />
        <Tools items={tools} index="02" />
      </section>
    </main>
  )
}
