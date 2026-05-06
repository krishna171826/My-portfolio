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
      'Une application simple de to-do développée avec React, Express.js et MongoDB. Elle permet aux utilisateurs de créer, modifier et supprimer des tâches grâce à une interface claire et intuitive. J’ai réalisé ce projet comme une introduction à la stack MERN.',
    githubUrl: 'https://github.com/krishna171826/MERN-Todo',
    demoUrl: 'https://merntodo-beta.vercel.app/',
    status: 'Active',
    image: mernTodoImage,
    competences: ['React', 'Node.js', 'Express', 'MongoDB', 'Typescript', 'Taliwind CSS', 'DiasyUI '],
  },
  {
    title: 'Amour De Dieu',
    description:
      'En tant que responsable IT de l’association “Amour de Dieu”, j’ai développé un site web pour répondre à leurs besoins. J’ai réalisé ce site avec Next.js, NestJS et MongoDB, et j’ai également intégré Stripe pour la gestion des dons.',
    githubUrl: '',
    demoUrl: 'https://amour-de-dieu.org/',
    status: 'En cours',
    image: amourDeDieuImage,
    competences: ['Nest.js','Next.js', 'Tailwind CSS', 'Stripe API', 'Figma', 'MongoDB', 'Postman'],
  },
  {
    title: 'Real-Time App',
    description:
      'Pendant ma période de stage, j’ai réalisé une application de chat en temps réel afin de me familiariser avec les technologies utilisées par l’équipe de l’entreprise. C’était ma première expérience avec NestJS et Socket.IO.',
    githubUrl: '',
    demoUrl: '',
    status: 'En cours',
    image: heroImage,
    competences: ['React', 'JavaScript', 'Socket.IO', 'Nest.js'],
  },
    {
    title: 'Voiture Électrique',
    description:
      'Lors de ma dernière année en STI2D, nous avons réalisé une voiture électrique à l’aide d’Arduino et de SolidWorks dans le cadre de mon projet de fin d’année.',
    githubUrl: 'https://github.com',
    demoUrl: '',
    status: 'Terminé',
    image: voitureElectriqueImage,
    competences: ['Arduino', 'SolidWorks '],
  },
    {
    title: 'Maison Connectée',
    description:
      'En première STI2D, nous avons réalisé un projet de maison connectée à l’aide d’Arduino et de SolidWorks. J’étais chargé de la conception de la maison avec SolidWorks.',
    githubUrl: 'https://github.com',
    demoUrl: '',
    status: 'Terminé',
    image: maisonConnecteeImage,
    competences: ['SolidWorks', 'Arduino'],
  },
]

export default function Project() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent pt-28 text-white">
      <StarfieldBackground />

      <section className="relative z-10 mx-auto w-full max-w-7xl px-5 mb-20 sm:px-8">


        <section>

          <h2 className="mt-5 text-center font-mono text-3xl font-semibold tracking-tight text-white sm:text-5xl pt-10">
            <span className="text-slate-300">Mes Récents</span> <span className="text-white">projets</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center font-mono text-sm leading-7 text-zinc-300/80">
            Voici quelques projets sur lesquels j'ai travaillé récemment.
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