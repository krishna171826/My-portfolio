import { StarfieldBackground } from '../components/Background'




export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <StarfieldBackground />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-6 px-3 text-center sm:px-6 lg:px-10">
        <h1 className="max-w-5xl text-balance text-3xl font-semibold text-white/90 pt-35 sm:text-4xl md:pt-10 md:text-5xl">
          <span className="inline-block bg-linear-to-r from-zinc-200 via-slate-300 to-zinc-500 bg-size-[220%_100%] bg-clip-text font-extrabold tracking-wide text-transparent drop-shadow-[0_0_20px_rgba(226,232,240,0.35)] animate-[silverFlow_7s_linear_infinite]">
            SURESH Gopi
          </span>
          <br />
          <span className="text-slate-300/60 text-xl">Étudiant en informatique</span>
        </h1>

        <section
          id="about"
          className="w-full max-w-6xl pt-16 text-left sm:pt-20"
        >
          <div className="items-center">
           
              <h2 className="font-mono text-3xl font-medium tracking-[0.08em] text-white/90 sm:text-4xl">
                PERMETTEZ-MOI DE <span className="text-slate-300">ME PRÉSENTER</span>
              </h2>

              <div className="mt-6 space-y-5 font-mono text-base leading-8 tracking-[0.01em] text-white/80 sm:text-lg sm:leading-9">
                <p className="text-zinc-300/90">
                  Je suis un étudiant en informatique passionné par la transformation d&apos;idées en produits
                  fiables et évolutifs. J&apos;aime concevoir des applications performantes et des expériences
                  utilisateur intuitives.
                </p>
                <p className="text-zinc-300/90">
                  Je travaille avec <span className="font-semibold text-zinc-100">JavaScript</span>,{' '}
                  <span className="font-semibold text-zinc-100">Node.js</span>,{' '}
                  <span className="font-semibold text-zinc-100">React</span> et{' '}
                  <span className="font-semibold text-zinc-100">Next.js</span> sur des stacks frontend
                  et backend.
                </p>
                <p className="text-zinc-300/90">
                  Mon objectif est de livrer des interfaces soignées, performantes, avec une identité
                  visuelle moderne et épurée.
                </p>
              </div>
          </div>
        </section>
      </section>

    </main>
  )
}
