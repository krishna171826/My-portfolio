import { StarfieldBackground } from '../components/Background'




export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-white">
      <StarfieldBackground />

      <section className="relative z-10 mx-auto flex min-h-screen  flex-col items-center justify-center gap-6 px-5 text-center ">
        <h1 className="text-balance text-3xl font-semibold text-white/90 sm:text-4xl pt-35  md:text-5xl md:pt-10">
          Salut, Je suis{' '}
          <span className="inline-block bg-linear-to-r from-zinc-200 via-slate-300 to-zinc-500 bg-size-[220%_100%] bg-clip-text font-extrabold tracking-wide text-transparent drop-shadow-[0_0_20px_rgba(226,232,240,0.35)] animate-[silverFlow_7s_linear_infinite]">
            SURESH Gopi
          </span>
        </h1>

        <section
          id="about"
          className="w-full max-w-5xl pt-20 text-left "
        >
          <div className=" items-center ">
           
              <h2 className="font-mono text-3xl font-medium tracking-[0.08em] text-white/90 sm:text-4xl">
                LET ME <span className="text-slate-300">INTRODUCE</span> MYSELF
              </h2>

              <div className="mt-6 space-y-5 font-mono text-base leading-8 tracking-[0.01em] text-white/80 sm:text-lg sm:leading-9">
                <p className="text-zinc-300/90">
                  I am a Software Engineer who loves transforming ideas into reliable, scalable products.
                  I enjoy building high-performance systems and intuitive user experiences.
                </p>
                <p className="text-zinc-300/90">
                  I work with <span className="font-semibold text-zinc-100">JavaScript</span>,{' '}
                  <span className="font-semibold text-zinc-100">Node.js</span>,{' '}
                  <span className="font-semibold text-zinc-100">React</span>, and{' '}
                  <span className="font-semibold text-zinc-100">Next.js</span> across both frontend
                  and backend stacks.
                </p>
                <p className="text-zinc-300/90">
                  My focus is to ship polished interfaces with strong performance and a clean, modern visual
                  language.
                </p>
              </div>
          </div>
        </section>
      </section>

    </main>
  )
}
