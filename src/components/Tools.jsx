export function Tools({ items, index = '02' }) {
  return (
    <section className="mt-20 text-center sm:mt-24">
      <div className="flex items-center justify-center gap-4">
        <span className="font-mono text-xs tracking-[0.28em] text-zinc-400">{index}</span>
        <div className="h-px w-24 bg-linear-to-r from-transparent via-zinc-300/70 to-transparent sm:w-32" />
      </div>

      <h2 className="mt-5 font-mono text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        <span className="text-white">Tools </span>
        <span className="text-slate-300">I Use</span>
      </h2>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {items.map((item) => (
          <article
            key={item.name}
            className="group relative rounded-2xl border border-white/10 bg-linear-to-br from-white/8 to-white/3 p-6 text-center backdrop-blur-md transition duration-300 hover:border-white/20 hover:from-white/12 hover:to-white/5 hover:shadow-[0_0_24px_rgba(255,255,255,0.14)]"
          >
            <div className="mb-4 flex justify-center">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-white/15 to-white/5 p-3 shadow-lg">
                <img src={item.icon} alt={`${item.name} logo`} className="h-full w-full object-contain" loading="lazy" />
              </div>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">{item.name}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
