import { useState } from 'react'
import { Calendar, MapPin, Building, ChevronDown } from 'lucide-react'

export function ProfessionalExperience({ items, title = 'Expériences professionnelles' }) {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="mb-20 w-full max-w-6xl text-left">
      <div className="mb-8 flex items-center gap-3">
        <span className="h-px w-10 bg-linear-to-r from-zinc-400 to-transparent" />
        <h3 className="font-mono text-2xl font-medium tracking-[0.08em] text-white/90 sm:text-3xl">
          {title}
        </h3>
      </div>

      <div className="relative mt-6">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-white/20 lg:block" />

        <div className="space-y-8 lg:space-y-10">
          {items.map((item, index) => {
            const isExpanded = expandedIndex === index

            return (
              <article key={`${item.title}-${index}`} className="relative pl-12 lg:pl-16">
                <span className="absolute left-4 top-6 h-4 w-4 rounded-full bg-zinc-800 ring-4 ring-white/10 lg:left-2.75" />

                <div
                  onClick={() => toggleExpand(index)}
                  className={`group cursor-pointer rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md transition-all duration-300 ease-in-out hover:bg-white/10 sm:p-6 ${
                    isExpanded ? 'bg-white/10 shadow-[0_0_20px_rgba(125,211,252,0.05)]' : ''
                  }`}
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white/95 sm:text-xl">{item.title}</h4>
                      {/* Badge Date avec Icône */}
                      <div className="mt-2 flex items-center gap-1.5 text-sm font-medium text-sky-400/90">
                        <Calendar className="h-4 w-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 text-sm text-zinc-300/85 sm:text-right sm:text-base">
                      {/* Entreprise avec Icône */}
                      <div className="flex items-center gap-1.5 sm:justify-end">
                        <Building className="h-4 w-4 text-zinc-400" />
                        <span className="font-semibold text-zinc-100">{item.company}</span>
                      </div>
                      {/* Localisation avec Icône */}
                      <div className="flex items-center gap-1.5 sm:justify-end text-zinc-400">
                        <MapPin className="h-4 w-4" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm leading-7 text-zinc-300/90 sm:text-base">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400/80 shadow-[0_0_5px_rgba(56,189,248,0.5)]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded ? 'mt-5 grid-rows-[1fr] opacity-100' : 'mt-0 grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="rounded-xl bg-white/5 p-4 text-sm leading-relaxed text-zinc-300/90 sm:text-base border border-white/5">
                        {item.details || "Plus de détails sur cette expérience seront bientôt ajoutés."}
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-center border-t border-white/10 pt-3">
                    <span className="flex items-center gap-1 text-xs font-mono uppercase tracking-widest text-zinc-400/60 transition-colors group-hover:text-sky-300/80">
                      {isExpanded ? 'Réduire' : 'Voir les détails'}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}