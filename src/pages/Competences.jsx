import { StarfieldBackground } from '../components/Background'
import { Skills } from '../components/Skills'
import { Tools } from '../components/Tools'

const languagesAndFrameworks = [
  'JavaScript',
  'TypeScript',
  'HTML5',
  'CSS3',
  'React',
  'Next.js',
  'Node.js',
  'Express.js',
  'Tailwind CSS',
  'MongoDB',
]

const tools = ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Vite', 'npm', 'Docker']

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
