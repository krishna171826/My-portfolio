export function ProfessionalExperience({ items, title = 'Expériences professionnelles' }) {
  return (
    <section className="w-full max-w-6xl text-left mb-20">
      <div className="mb-6 flex items-center gap-3">
        <span className="h-px w-10 bg-linear-to-r from-zinc-400 to-transparent" />
        <h3 className="font-mono text-2xl font-medium tracking-[0.08em] text-white/90 sm:text-3xl">
          {title}
        </h3>
      </div>

      <div className="relative mt-6">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-white/20 lg:block" />

        <div className="space-y-8 lg:space-y-10">
          {items.map((item, index) => (
            <article key={`${item.title}-${index}`} className="relative pl-12 lg:pl-16">
              <span className="absolute left-4 top-2 h-4 w-4 rounded-full bg-zinc-800 ring-4 ring-white/10 lg:left-2.75" />

              <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md sm:p-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white/95 sm:text-xl">{item.title}</h4>
                    <p className="mt-1 text-sm text-zinc-300/80 sm:text-base">{item.date}</p>
                  </div>

                  <div className="text-sm text-zinc-300/85 sm:text-right sm:text-base">
                    <p className="font-semibold text-zinc-100">{item.company}</p>
                    <p>{item.location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-300/90 sm:text-base">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-200/80" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}