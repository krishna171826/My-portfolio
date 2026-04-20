import { StarfieldBackground } from '../components/Background.jsx'
import { IslandNavbar } from '../components/Navbar.jsx';

const educationItems = [
  {
    title: 'Bachelor of Computer Science',
    subtitle: 'University / College Name',
    period: '2020 - 2024',
    description:
      'Studied core programming concepts, data structures, software engineering, and modern web development.',
    side: 'left',
  },
  {
    title: 'Frontend Development Focus',
    subtitle: 'React, UI, and responsive design',
    period: '2024',
    description:
      'Built practical skills in component-based UI development, styling systems, and polished user experiences.',
    side: 'right',
  },
  {
    title: 'Backend and APIs',
    subtitle: 'Node.js and application logic',
    period: '2024',
    description:
      'Expanded into server-side development, REST APIs, and application architecture for full-stack work.',
    side: 'left',
  },

]

export default function About() {
	return (
        <main className="relative min-h-screen overflow-hidden bg-transparent px-3 pt-40 text-white sm:px-6 lg:px-10">
      <StarfieldBackground />
      <IslandNavbar />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-6 px-0 text-center">


        <section
          id="about"
          className="w-full max-w-6xl pt-4 text-left md:pt-25"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:gap-12">
            <div>
              <h2 className="font-mono text-3xl font-medium tracking-[0.08em] text-white/90 sm:text-4xl">About Me
              </h2>

              <div className="mt-6 space-y-5 font-mono text-base leading-8 tracking-[0.01em] text-white/80 sm:text-lg sm:leading-9">
                <p className="text-zinc-300/90">
                  Actuellement en deuxième année de B.U.T. Informatique à l&apos;Université Sorbonne Paris Nord,
                  je prépare mon passage en troisième année (Bac+3)  une
                  organisation qui me permet d&apos;être pleinement investi dans vos projets.
                </p>

                <p className='text-zinc-300/90'>je suis à la recherche d&apos;un contrat
                  d&apos;alternance d&apos;un an débutant en septembre 2026. Passionné par le développement web,
                  je propose un rythme de 2 semaines en entreprise et 2 semaines à l&apos;université</p>

                <p className="text-zinc-300/90">
                 Je travaille principalement avec JavaScript, et je développe des applications full stack en utilisant
                  React et Node.js, en cherchant à renforcer mes compétences au sein de projets concrets et collaboratifs.
                </p>
              </div>
            </div>

            <div className="mx-auto w-full max-w-68 sm:max-w-76 lg:max-w-84">
              <div className="relative grid aspect-square place-items-center rounded-full border border-white/20 bg-radial-[at_35%_30%] from-zinc-200/30 via-slate-500/25 to-zinc-900/40 shadow-[0_18px_60px_rgba(148,163,184,0.2)] backdrop-blur-md animate-[avatarFloat_6s_ease-in-out_infinite]">
                <div className="absolute inset-3 rounded-full border border-white/25" />
                <div className="absolute inset-0 rounded-full [background:conic-gradient(from_220deg,rgba(255,255,255,0.02),rgba(203,213,225,0.2),rgba(255,255,255,0.02))]" />
                <span className="relative text-4xl font-bold tracking-widest text-slate-200 sm:text-[2.65rem]">SG</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="education"
          className="mt-16 w-full max-w-6xl text-left mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-linear-to-r from-zinc-400 to-transparent" />
            <h3 className="font-mono text-2xl font-medium tracking-[0.08em] text-white/90 sm:text-3xl">
              Education
            </h3>
          </div>

          <div className="relative mt-6">
            <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full -translate-x-1/2 lg:block">
              <div className="relative h-full w-1 overflow-hidden rounded-full bg-white/5 shadow-[0_0_10px_rgba(56,189,248,0.12)]">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02)_0%,rgba(125,211,252,0.18)_20%,rgba(186,230,253,0.9)_45%,rgba(56,189,248,0.95)_55%,rgba(125,211,252,0.22)_75%,rgba(255,255,255,0.02)_100%)] bg-size-[100%_240%] animate-[timelineFlow_5.5s_linear_infinite]" />
              </div>
            </div>

            <div className="space-y-6 lg:space-y-0">
              {educationItems.map((item, index) => {
                const isLeft = item.side === 'left'

                return (
                  <div
                    key={`${item.title}-${index}`}
                    className="grid gap-4 lg:grid-cols-[1fr_80px_1fr] lg:items-center"
                  >
                    <div className={isLeft ? 'lg:pr-8' : 'lg:col-start-1'}>
                      {isLeft ? (
                        <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md sm:p-6">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-white/90 sm:text-xl">{item.title}</h4>
                              <p className="mt-1 text-sm text-zinc-300/80">{item.subtitle}</p>
                            </div>
                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.15em] text-zinc-200 uppercase">
                              {item.period}
                            </span>
                          </div>
                          <p className="mt-4 text-sm leading-7 text-zinc-300/85 sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div className="hidden lg:block" />

                    <div className={isLeft ? 'lg:col-start-3' : 'lg:pl-8'}>
                      {!isLeft ? (
                        <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md sm:p-6">
                          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <h4 className="text-lg font-semibold text-white/90 sm:text-xl">{item.title}</h4>
                              <p className="mt-1 text-sm text-zinc-300/80">{item.subtitle}</p>
                            </div>
                            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-[0.15em] text-zinc-200 uppercase">
                              {item.period}
                            </span>
                          </div>
                          <p className="mt-4 text-sm leading-7 text-zinc-300/85 sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </section>

    </main>
	)
}


