export function ProjectCard({ image, title, description, githubUrl, demoUrl, status, competences = [], tools = [] }) {
  const hasGithubUrl = Boolean(githubUrl && githubUrl.trim())
  const hasDemoUrl = Boolean(demoUrl && demoUrl.trim())
  const hasStatus = Boolean(status && status.trim())

  const normalizedStatus = hasStatus
    ? status
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
    : ''

  const statusClassByType = {
    active: 'border-emerald-300/50 bg-emerald-500/20 text-emerald-100',
    'en cours': 'border-white/30 bg-white/10 text-zinc-100',
    'non active': 'border-rose-300/50 bg-rose-400/20 text-rose-100',
    termine: 'border-sky-300/50 bg-sky-400/20 text-sky-100',
  }

  const statusBadgeClass = statusClassByType[normalizedStatus] ?? 'border-white/30 bg-white/10 text-zinc-100'

  return (
    <article
      className="group flex h-full flex-col rounded-3xl border border-white/15 bg-[#0c1018]/90 px-4 pb-5 pt-4 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-[#101522]/90"
    >
      <div className="rounded-2xl border border-white/12 bg-[#0d111a] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#151b2a]">
          {hasStatus ? (
            <span
              className={`absolute right-3 top-3 z-10 inline-flex rounded-full border px-3 py-1 font-mono text-[11px] font-medium tracking-wide backdrop-blur-sm ${statusBadgeClass}`}
            >
              {status}
            </span>
          ) : null}

          {image ? (
            <img
              src={image}
              alt={title}
              className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="flex h-56 items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(255,255,255,0.03)_32%,rgba(0,0,0,0.85)_100%)]">
              <div className="h-24 w-32 rounded-2xl border border-white/15 bg-white/5 shadow-[0_0_40px_rgba(255,255,255,0.05)]" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <h3 className="text-center font-mono text-2xl text-white">{title}</h3>
        <p className="mt-4 text-justify font-mono text-sm leading-7 text-zinc-200/90">{description}</p>

        {hasGithubUrl || hasDemoUrl ? (
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {hasGithubUrl ? (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-2.5 font-mono text-sm text-zinc-100 transition hover:border-white/35 hover:bg-white/18"
              >
                <span className="text-base">⌁</span>
                GitHub
              </a>
            ) : null}

            {hasDemoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-5 py-2.5 font-mono text-sm text-zinc-100 transition hover:border-white/35 hover:bg-white/18"
              >
                <span className="text-base">▣</span>
                Demo
              </a>
            ) : null}
          </div>
        ) : null}

        <div className="mt-6 space-y-3">
          <div>
            <ul className="flex flex-wrap justify-center gap-2">
              {competences.map((item) => (
                <li
                  key={`${title}-competence-${item}`}
                  className="rounded-full border border-white/15 bg-blue-500/10 px-3 py-1 text-[11px] text-blue-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
  
            <ul className="flex flex-wrap justify-center gap-2">
              {tools.map((item) => (
                <li
                  key={`${title}-tool-${item}`}
                  className="rounded-full border border-white/15 bg-blue-500/10 px-3 py-1 text-[11px] text-blue-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
