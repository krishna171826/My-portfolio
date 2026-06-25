import { useState, useEffect } from 'react'
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
    description: 'Une application simple de to-do développée avec React, Express.js et MongoDB. Elle permet aux utilisateurs de créer, modifier et supprimer des tâches grâce à une interface claire et intuitive. J’ai réalisé ce projet comme une introduction à la stack MERN.',
    detailedDescription: [
      'Une application simple de to-do développée avec React, Express.js et MongoDB. Elle permet aux utilisateurs de créer, modifier et supprimer des tâches grâce à une interface claire et intuitive. J’ai réalisé ce projet comme une introduction à la stack MERN.',
      'Au cours de ce projet, j’ai mis en place une API RESTful avec Node.js et Express pour gérer les requêtes HTTP. Côté front-end, React m’a permis de créer des composants réutilisables et de gérer l’état de l’application efficacement avec des Hooks.',
      'La base de données MongoDB assure la persistance des données, me permettant d\'appréhender le fonctionnement du format NoSQL.'
    ],
    githubUrl: 'https://github.com/krishna171826/MERN-Todo',
    demoUrl: 'https://todo.sureshgopi.me/',
    status: 'Active',
    image: mernTodoImage,
    competences: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript', 'Tailwind CSS', 'DaisyUI'],
    conception: ["Réaliser", 'Optimiser', 'Bases de données', 'Réseaux'],
  },
  {
    title: 'SAE : Suive de colis',
    description: "L'objectif de ce projet était de concevoir une application web permettant d'améliorer le suivi ds colis au sein de L'IUT de Villetaneuse. L'application devait centraliser les différentes étapes du processus.",
    detailedDescription: [
      "L'objectif de ce projet était de concevoir une application web permettant d'améliorer le suivi des colis au sein de l'IUT de Villetaneuse. L'application devait centraliser les différentes étapes du processus de réception et de distribution.",
      "Développée en équipe avec PHP et le framework Laravel, cette plateforme permet aux étudiants et à l'administration de suivre l'état de livraison en temps réel. Nous avons utilisé Tailwind CSS pour garantir une interface responsive et moderne.",
      "Ce projet universitaire m'a permis de renforcer mes compétences en travail collaboratif (Git/GitHub) et en modélisation de bases de données relationnelles."
    ],
    githubUrl: 'https://github.com/Nostres25/suivi-colis-iutv-v2',
    status: 'En cours',
    image: heroImage,
    competences: ['PHP', 'Laravel', 'Blade', 'Tailwind CSS'],
    conception: ["Réaliser", 'Optimiser', 'Bases de données', 'Collaborer'],
  },
  {
    title: 'Amour De Dieu',
    description: 'En tant que responsable IT de l’association “Amour de Dieu”, j’ai développé un site web pour répondre à leurs besoins. J’ai réalisé ce site avec Next.js, NestJS et MongoDB, et j’ai également intégré Stripe pour la gestion des dons.',
    detailedDescription: [
      'En tant que responsable IT de l’association “Amour de Dieu”, j’ai développé un site web complet pour répondre à leurs besoins de visibilité et de collecte de fonds.',
      'J’ai réalisé le front-end avec Next.js pour le rendu côté serveur (SSR) et le back-end avec NestJS couplé à une base de données MongoDB. J’ai également intégré l\'API Stripe pour sécuriser et automatiser la gestion des dons.',
      'L’interface a été intégralement pensée et maquettée sur Figma avant le développement, garantissant une expérience utilisateur fluide et accessible.'
    ],
    githubUrl: '',
    demoUrl: 'https://amour-de-dieu.org/',
    status: 'Active',
    image: amourDeDieuImage,
    competences: ['Nest.js', 'Next.js', 'Tailwind CSS', 'Stripe API', 'Figma', 'MongoDB', 'Postman'],
    conception: ["Réaliser", 'Optimiser', 'Bases de données', 'Réseaux'],
  },
  {
    title: 'Real-Time App',
    description: 'Pendant ma période de stage, j’ai réalisé une application de chat en temps réel afin de me familiariser avec les technologies utilisées par l’équipe de l’entreprise. C’était ma première expérience avec NestJS et Socket.IO.',
    detailedDescription: [
      'Pendant ma période de stage, j’ai réalisé une application de chat en temps réel afin de me familiariser avec les technologies de pointe utilisées par l’équipe de développement de l’entreprise.',
      'L’application gère les connexions simultanées, la création de salons de discussion et l’historique des messages. C’était un excellent défi pour comprendre le fonctionnement des WebSockets et la communication bidirectionnelle.',
      'Ce fut ma toute première expérience concrète avec le framework NestJS et la librairie Socket.IO en environnement professionnel.'
    ],
    githubUrl: 'https://github.com/krishna171826/chat-realtime-1',
    demoUrl: '',
    status: 'Terminé',
    image: heroImage,
    competences: ['React', 'JavaScript', 'Socket.IO', 'Nest.js'],
    conception: ["Réaliser", 'Optimiser', 'Bases de données', 'Réseaux', 'Collaborer'],
  },
  {
    title: 'Voiture Électrique',
    description: 'Lors de ma dernière année en STI2D, nous avons réalisé une voiture électrique à l’aide d’Arduino et de SolidWorks dans le cadre de mon projet de fin d’année.',
    detailedDescription: [
      'Lors de ma dernière année en STI2D, nous avons conçu et réalisé une voiture électrique miniature fonctionnelle à l’aide d’Arduino et de SolidWorks dans le cadre de notre projet de fin d’année.',
      'J’ai principalement travaillé sur l\'écriture du code embarqué C/C++ pour contrôler les moteurs et interpréter les différents signaux des capteurs.',
      'La modélisation 3D du châssis a été réalisée sur SolidWorks pour optimiser l’intégration mécanique des composants électroniques et de la batterie.'
    ],
    githubUrl: 'https://github.com/krishna171826/Voiture_-lectrique',
    demoUrl: '',
    status: 'Terminé',
    image: voitureElectriqueImage,
    competences: ['Arduino', 'SolidWorks'],
    conception: ["Réaliser", 'Collaborer'],
  },
  {
    title: 'Maison Connectée',
    description: 'En première STI2D, nous avons réalisé un projet de maison connectée à l’aide d’Arduino et de SolidWorks. J’étais chargé de la conception de la maison avec SolidWorks.',
    detailedDescription: [
      'En première STI2D, nous avons réalisé un projet complet de maison connectée en couplant la modélisation CAO et l\'électronique programmable (Arduino).',
      'J’étais principalement en charge de la conception architecturale de la maison avec le logiciel SolidWorks. Il a fallu modéliser la maquette de manière intelligente pour prévoir le passage des câbles et l\'intégration des capteurs.',
      'Ce projet intégrait des fonctionnalités telles que la gestion automatique de l’éclairage et le contrôle de la température ambiante.'
    ],
    githubUrl: 'https://github.com/krishna171826/Maison-connect',
    demoUrl: '',
    status: 'Terminé',
    image: maisonConnecteeImage,
    competences: ['SolidWorks', 'Arduino'],
    conception: ["Réaliser", 'Collaborer'],
  },
]

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [selectedProject])

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
            <div className="h-px w-80 bg-gradient-to-r from-transparent via-zinc-300/70 to-transparent sm:w-[200px]" />
          </div>

          <div className="mx-auto mt-12 grid max-w-7xl gap-8 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard 
                key={project.title} 
                {...project} 
                onClick={() => setSelectedProject(project)} 
              />
            ))}
          </div>
        </section>
      </section>
      <Footer />

      {/* --- POP-UP MODAL --- */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-[#0c1018] shadow-2xl max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-white/20 transition backdrop-blur-md border border-white/10"
            >
              ✕
            </button>

            <div className="overflow-y-auto p-6 sm:p-8 custom-scrollbar">
              <div className="mb-6 overflow-hidden rounded-2xl border border-white/10 bg-[#151b2a]">
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="h-64 w-full object-cover object-top" />
                ) : (
                  <div className="flex h-64 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_32%,rgba(0,0,0,0.85)_100%)]" />
                )}
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <h3 className="font-mono text-3xl font-bold text-white">{selectedProject.title}</h3>
                {selectedProject.status && (
                  <span className="inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 font-mono text-xs font-medium text-zinc-100">
                    {selectedProject.status}
                  </span>
                )}
              </div>

              <div className="mb-8 space-y-4 text-justify font-mono text-base leading-8 text-zinc-200/90">
                {(selectedProject.detailedDescription || [selectedProject.description]).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {(selectedProject.githubUrl || selectedProject.demoUrl) && (
                <div className="mb-10 flex flex-wrap gap-4">
                  {selectedProject.githubUrl && (
                    <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 font-mono text-sm text-zinc-100 transition hover:border-white/35 hover:bg-white/18">
                      <span className="text-base">⌁</span> GitHub
                    </a>
                  )}
                  {selectedProject.demoUrl && (
                    <a href={selectedProject.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-6 py-3 font-mono text-sm text-zinc-100 transition hover:border-white/35 hover:bg-white/18">
                      <span className="text-base">▣</span> Demo
                    </a>
                  )}
                </div>
              )}

              <div className="space-y-4">
                {selectedProject.competences && selectedProject.competences.length > 0 && (
                  <div>
                    <h4 className="mb-3 font-mono text-sm text-zinc-400">Compétences techniques</h4>
                    <ul className="flex flex-wrap gap-2">
                      {selectedProject.competences.map((item) => (
                        <a 
                          href={`/competences?tech=${item.toLowerCase()}`} // Lien vers la page about (avec paramètre optionnel)
                          key={`pop-${item}`} 
                          onClick={(e) => e.stopPropagation()} // Empêche la modale de se fermer
                          className="rounded-full border border-white/15 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300 transition hover:bg-blue-500/30 hover:text-white hover:scale-105 cursor-pointer inline-block"
                        >
                          {item}
                        </a>
                      ))}
                    </ul>
                  </div>
                )}
                
                {selectedProject.conception && selectedProject.conception.length > 0 && (
                  <div className="pt-2">
                    <h4 className="mb-3 font-mono text-sm text-zinc-400">Conception & Gestion</h4>
                    <ul className="flex flex-wrap gap-2">
                      {selectedProject.conception.map((item) => (
                        <li key={`pop-conc-${item}`} className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-300 font-mono">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}