export function Skills({ items}) {
  return (
    <section className="text-center">
      <div className="flex items-center justify-center gap-4">
        
        <div className="h-px w-24 bg-linear-to-r from-transparent via-zinc-300/70 to-transparent sm:w-32" />
      </div>

      <h2 className="mt-5 font-mono text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        <span className="text-white">Professional </span>
        <span className="text-slate-300">Skillset</span>
      </h2>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="group relative rounded-3xl border border-white/10 bg-linear-to-br from-white/8 to-white/3 p-8 backdrop-blur-md transition duration-300 hover:border-white/20 hover:from-white/12 hover:to-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            {/* Icon - Centered at top */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-white/15 to-white/5 p-4 shadow-lg">
                <img src={item.icon} alt={`${item.language} logo`} className="h-full w-full object-contain" loading="lazy" />
              </div>
            </div>

            {/* Title - Centered */}
            <h3 className="text-lg font-bold uppercase tracking-wider text-white sm:text-xl">
              {item.language}
            </h3>

            {/* Description - Centered */}
            {item.description && (
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            )}

            {/* Framework Tags - Centered at bottom */}
            {item.frameworks && (
              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {item.frameworks.map((framework, fIdx) => (
                  <span
                    key={fIdx}
                    className="inline-block rounded-full bg-blue-400/30 px-3.5 py-1.5 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/40 transition duration-200 hover:bg-blue-400/40"
                  >
                    {framework.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
