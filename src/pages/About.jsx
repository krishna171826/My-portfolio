import { StarfieldBackground } from '../components/Background.jsx'
import { IslandNavbar } from '../components/Navbar.jsx';
import { Footer } from '../components/Footer'
import GK_logo from '../assets/GK_logo.svg'
import { ProfessionalExperience } from '../components/ProfessionalExperience.jsx'

const educationItems = [
  {
    title: 'BUT Informatique',
    subtitle: 'Sorbonne Paris Nord',
    period: 'Depuis septembre 2024',
    location: 'Villetaneuse',
    points: [
      "Développement d'une application PHP de suivi de colis.",
      'Création et gestion de bases de données avec PostgreSQL.',
      'Installation et configuration de postes sous Linux avec utilisation de Bash.',
    ],
    side: 'left',
  },
  {
    title: "Baccalauréat : STI2D",
    subtitle: 'Lycée Voillaume',
    period: 'De 2021 à 2024',
    location: 'Aulnay-sous-Bois, France',
    points: [
      "Modélisation d'une maquette de maison connectée sur SolidWorks.",
      "Conception d'une voiture électrique avec Arduino.",
    ],
    side: 'right',
  },

]

const experienceItems = [
  {
    title: 'Developer web full stack - stage',
    date: '2 mois',
    company: 'GOVO',
    location: 'Asnières-sur-Seine, France',
    points: [
      'Développement et optimisation de la plateforme métier.',
      'Sécurisation des données et respect des bonnes pratiques.',
    ],
  },
  {
    title: 'Responsable IT - Bénévole',
    date: 'Depuis octobre 2025',
    company: 'Amour de dieu',
    location: 'Sevran, France',
    points: ['Responsable IT de l’association Amour de Dieu.'],
  },
  {
    title: 'Préparation des dalles d’exposition - travail des vacances',
    date: 'De 2022 à 2024',
    company: 'King-events',
    location: 'Aulnay-sous-Bois, France',
    points: [
      'Utilisation de l’anglais avec les clients étrangers.',
      'Organisation des boutiques selon le planning.',
    ],
  },
]

export default function About() {
	return (
        <main className="relative min-h-screen overflow-hidden bg-transparent pt-40 text-white">
      <StarfieldBackground />
      <IslandNavbar />

<section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-6 px-3 sm:px-6 lg:px-10 text-center">


        <section
          id="about"
          className="w-full max-w-6xl pt-4 text-left md:pt-10"
        >
          <h1 className="text-center font-mono text-3xl pb-10 font-medium tracking-[0.08em] text-white/90 sm:text-5xl">
            About Me
          </h1>

          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.8fr)] lg:gap-12">
            <div>
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

            <div className="mx-auto flex w-full max-w-none items-center justify-center">
              <img
                src={GK_logo}
                alt="Suresh Gopi"
                className="h-96 w-[min(68vw,44rem)] max-w-none object-contain sm:h-112 lg:h-128"
              />
            </div>
          </div>
        </section>

        <div className="flex items-center justify-center gap-4 pt-20">
          <div className="h-px w-80 bg-linear-to-r from-transparent via-zinc-300/70 to-transparent   md:w-250" />
        </div>

        <section
          id="education"
          className="mt-16 w-full max-w-6xl text-left mb-20"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-linear-to-r from-zinc-400 to-transparent" />
            <h3 className="font-mono text-2xl font-medium tracking-[0.08em] text-white/90 sm:text-3xl">
              Diplômes et Formations
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
                          <p className="mt-2 text-sm text-zinc-300/75 sm:text-base">{item.location}</p>
                          <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-300/90 sm:text-base">
                            {item.points.map((point) => (
                              <li key={point} className="flex gap-3">
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-200/80" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
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
                          <p className="mt-2 text-sm text-zinc-300/75 sm:text-base">{item.location}</p>
                          <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-300/90 sm:text-base">
                            {item.points.map((point) => (
                              <li key={point} className="flex gap-3">
                                <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-200/80" />
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

              <div className="flex items-center justify-center gap-4 pt-5 pb-15">
          <div className="h-px w-80 bg-linear-to-r from-transparent via-zinc-300/70 to-transparent   md:w-250" />
        </div>

        <ProfessionalExperience items={experienceItems} />
      </section>

      <Footer />
    </main>
	)
}


