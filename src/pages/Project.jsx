import { StarfieldBackground } from '../components/Background'
import { ProjectCard } from '../components/ProjectCard'
import { Footer } from '../components/Footer'
import heroImage from '../assets/hero.png'
import mernTodoImage from '../assets/mern-todo.jpg'
import amourDeDieuImage from '../assets/amour-de-dieu.jpg'
import maisonConnecteeImage from '../assets/maison_connectee.jpg'
import voitureElectriqueImage from '../assets/voiture_ele.jpg'


const projects = [
  {
    title: 'To-do App',
    description:
      'A simple to-do app built with React and Firebase. Allows users to create, update, and delete tasks with a clean and intuitive interface.',
    githubUrl: 'https://github.com/krishna171826/MERN-Todo',
    demoUrl: 'https://merntodo-beta.vercel.app/',
    status: 'Active',
    image: mernTodoImage,
    competences: ['React', 'Node.js', 'Express', 'MongoDB', 'Typescript', 'Taliwind CSS', 'DiasyUI '],
  },
  {
    title: 'Amour De Dieu',
    description:
      'A personal blog built with Next.js and Tailwind CSS. It reads markdown content and renders it as a clean dark-mode article experience.',
    githubUrl: 'https://amour-de-dieu.org/',
    demoUrl: 'https://amour-de-dieu.org/',
    status: 'En cours',
    image: amourDeDieuImage,
    competences: ['Nest.js','Next.js', 'Tailwind CSS', 'Stripe API', 'Figma', 'MongoDB', 'Postman'],
  },
  {
    title: 'Real-Time App',
    description:
      'Online code and markdown editor with instant preview, HTML/CSS/JS support, local storage, and custom toolbar actions.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    status: 'En cours',
    image: heroImage,
    competences: ['React', 'JavaScript', 'Socket.IO', 'Nest.js'],
  },
    {
    title: 'Voiture Électrique',
    description:
      'Online code and markdown editor with instant preview, HTML/CSS/JS support, local storage, and custom toolbar actions.',
    githubUrl: 'https://github.com',
    demoUrl: '',
    status: 'Terminé',
    image: voitureElectriqueImage,
    competences: ['Arduino', 'SolidWorks '],
  },
    {
    title: 'Maison Connectée',
    description:
      'Online code and markdown editor with instant preview, HTML/CSS/JS support, local storage, and custom toolbar actions.',
    githubUrl: 'https://github.com',
    demoUrl: '',
    status: 'Terminé',
    image: maisonConnecteeImage,
    competences: ['SolidWorks', 'Arduino'],
  },
]

export default function Project() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent pb-16 pt-28 text-white">
      <StarfieldBackground />

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8">


        <section>

          <h2 className="mt-5 text-center font-mono text-3xl font-semibold tracking-tight text-white sm:text-5xl pt-10">
            <span className="text-slate-300">My Recent</span> <span className="text-white">Works</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-mono text-sm leading-7 text-zinc-300/80">
            Here are a few projects I&apos;ve worked on recently.
          </p>

                    <div className="flex items-center justify-center gap-4 py-15">
            
            <div className="h-px w-80 bg-linear-to-r from-transparent via-zinc-300/70 to-transparent sm:w-200" />
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-8 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </main>
  )
}