import { StarfieldBackground } from '../components/Background'
import { ProjectCard } from '../components/ProjectCard'
import heroImage from '../assets/hero.png'

const projects = [
  {
    title: 'Chatify',
    description:
      'Personal chat room and workspace to share resources and hang out with friends. Built with React, Material UI, and Firebase. Supports realtime messaging, image sharing, and reactions.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    image: heroImage,
    competences: ['React', 'Material UI', 'Firebase'],
    tools: ['VS Code', 'GitHub', 'Postman'],
  },
  {
    title: 'Bits-Of-Code',
    description:
      'A personal blog built with Next.js and Tailwind CSS. It reads markdown content and renders it as a clean dark-mode article experience.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    image: heroImage,
    competences: ['Next.js', 'Tailwind CSS', 'Markdown'],
    tools: ['VS Code', 'GitHub', 'Vite'],
  },
  {
    title: 'Editor.io',
    description:
      'Online code and markdown editor with instant preview, HTML/CSS/JS support, local storage, and custom toolbar actions.',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    image: heroImage,
    competences: ['React', 'JavaScript', 'HTML/CSS'],
    tools: ['VS Code', 'GitHub', 'Figma'],
  },
]

export default function Project() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent px-5 pb-16 pt-28 text-white sm:px-8">
      <StarfieldBackground />

      <section className="relative z-10 mx-auto w-full max-w-7xl">


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
    </main>
  )
}