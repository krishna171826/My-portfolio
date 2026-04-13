export function Tools({ items, index = '02' }) {
  return (
    <section className="mt-20 text-center sm:mt-24">
      <div className="flex items-center justify-center gap-4">
        <span className="font-mono text-xs tracking-[0.28em] text-zinc-400">{index}</span>
        <div className="h-px w-24 bg-linear-to-r from-transparent via-zinc-300/70 to-transparent sm:w-32" />
      </div>

      <h2 className="mt-5 font-mono text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        <span className="text-slate-300">Tools</span> <span className="text-white">I use</span>
      </h2>

      <ul className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-4 sm:gap-6">
        {items.map((item) => (
          <li
            key={typeof item === 'string' ? item : item.name}
            className="flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-base text-zinc-100 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 sm:px-5"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full bg-white/90 p-1">
              {typeof item === 'string' ? (
                <span className="text-xs font-semibold text-zinc-900">{item.slice(0, 2).toUpperCase()}</span>
              ) : (
                <img src={item.icon} alt={`${item.name} logo`} className="h-4 w-4 object-contain" loading="lazy" />
              )}
            </span>
            {typeof item === 'string' ? item : item.name}
          </li>
        ))}
      </ul>
    </section>
  )
}
