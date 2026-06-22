import { StarfieldBackground } from '../components/Background'
import { Skills } from '../components/Skills'
import { Tools } from '../components/Tools'
import { Footer } from '../components/Footer'

const languagesAndFrameworks = [
  {
    language: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'Développement web interactif, scripting côté client et serveur',
    frameworks: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        tags: ['Frontend', 'Components', 'Hooks'],
        level: 90
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
        tags: ['Full-stack', 'SSR', 'API Routes'],
        level: 85
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        tags: ['Backend', 'Runtime', 'Async'],
        level: 80
      },
      {
        name: 'Express.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
        tags: ['Web Framework', 'API', 'Middleware'],
        level: 75
      },
      {
        name: 'Socket.io',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg',
        tags: ['Realtime', 'WebSockets', 'Events'],
        level: 65
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
        tags: ['Typed Components', 'Props', 'Strict'],
        level: 85
      },
      {
        name: 'Nest.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
        tags: ['Backend', 'Decorators', 'Enterprise'],
        level: 75
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
        tags: ['Microframework', 'Lightweight', 'API'],
        level: 80
      },
      {
        name: 'Jinja',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tags: ['Templating', 'Server-side Rendering', 'Python-based'],
        level: 70
      },
      {
        name: 'Matplotlib',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tags: ['Data Visualization', 'Charts', 'Plots'],
        level: 60
      },
      {
        name: 'Pandas',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        tags: ['Data Analysis', 'DataFrames', 'Python-based'],
        level: 65 
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
        tags: ['NoSQL', 'Documents', 'Flexible'],
        level: 85
      },
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        tags: ['SQL', 'Relationnel', 'Robust'],
        level: 80
      },
      {
        name: 'MySQLlite',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        tags: ['SQL', 'Relationnel', 'Lightweight'],
        level: 75
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
        tags: ['Utility-first', 'Responsive', 'Dark Mode'],
        level: 95
      },
      {
        name: 'HTML5 & CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
        tags: ['Semantic', 'Standards', 'Responsive'],
        level: 95
      },
      { 
        name: 'Bootstrap',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
        tags: ['CSS Framework', 'Responsive', 'Components'],
        level: 80
      },
      {
        name: 'Shadcn UI',
        icon: 'https://shadcn.com/favicon-96x96.png',
        tags: ['Component Library', 'Tailwind-based', 'Accessible'],
        level: 85 
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
        tags: ['Backend', 'Microservices', 'Enterprise'],
        level: 70
      },
      {
        name: 'OOP',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
        tags: ['Classes', 'Heritage', 'Polymorphism'],
        level: 80
      }
    ]
  },
  {
    language: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    description: 'Langage de programmation pour le développement backend',
    frameworks: [
      {
        name: 'Laravel',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
        tags: ['Framework', 'MVC', 'Web Applications'],
        level: 75
      },
      {
        name: 'Blade',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
        tags: ['Templating', 'Server-side Rendering', 'PHP-based'],
        level: 80
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
        tags: ['Mobile', 'UI', 'Development'],
        level: 70
      },
    ]
  },
]

const tools = [
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
  { name: 'Arduino IDE', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
  { name: 'SolidWorks', icon: 'https://img.icons8.com/color/96/solidworks.png' },
  { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
  { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg' },
]

export default function Competences() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent pt-28 text-white">
      <StarfieldBackground />

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 mb-20 sm:px-8">
        <header className="mb-16 text-center sm:mb-20">
          <h1 className="mt-15 font-mono text-4xl font-medium tracking-tight text-white sm:text-6xl">
            <span className="text-white">Mes </span>
            <span className="text-slate-300">Compétences</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-zinc-300/80 sm:text-base">
            Les langages, frameworks et outils que j’utilise pour créer des expériences web performantes.
          </p>
        </header>

        <Skills items={languagesAndFrameworks} />
        <Tools items={tools} index="02" />
      </section>
      <Footer />
    </main>
  )
}