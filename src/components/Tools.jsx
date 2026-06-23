import { useState } from 'react'

export function Tools({ items }) {
  // État stockant l'outil cliqué pour afficher ses projets dans la modale
  const [activeTool, setActiveTool] = useState(null)

  return (
    <section className="mt-20 text-center sm:mt-24">
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-80 bg-linear-to-r from-transparent via-zinc-300/70 to-transparent md:w-300" />
      </div>

      <h2 className="mt-5 font-mono text-3xl font-semibold tracking-tight text-white sm:text-5xl pt-10 md:pt-20">
        <span className="text-slate-300">Outils</span>
      </h2>

      {/* Grille d'outils convertis en boutons interactifs */}
      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {items.map((item) => {
          const hasProjects = item.projects && item.projects.length > 0

          return (
            <button
              key={item.name}
              onClick={() => hasProjects && setActiveTool(item)}
              disabled={!hasProjects}
              className={`group relative flex flex-col items-center rounded-2xl border p-6 text-center backdrop-blur-md transition duration-300 ${
                hasProjects
                  ? 'cursor-pointer border-white/10 bg-linear-to-br from-white/8 to-white/3 hover:border-white/20 hover:from-white/12 hover:to-white/5 hover:shadow-[0_0_24px_rgba(255,255,255,0.14)]'
                  : 'border-white/5 bg-white/2 opacity-40 cursor-not-allowed'
              }`}
            >
              <div className="mb-4 flex justify-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-white/15 to-white/5 p-3 shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <img src={item.icon} alt={`${item.name} logo`} className="h-full w-full object-contain" loading="lazy" />
                </div>
              </div>

              <h3 className="text-xs font-bold uppercase tracking-wider text-white sm:text-sm">{item.name}</h3>

              {hasProjects && (
                <span className="absolute bottom-2 right-3 text-[10px] font-mono text-zinc-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Projets →
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Fenêtre Modale d'affichage des projets correspondants */}
      {activeTool && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md transition-all animate-fade-in"
          onClick={() => setActiveTool(null)}
        >
          <div 
            className="relative w-full max-w-lg rounded-2xl border border-white/15 bg-zinc-950 p-6 text-left shadow-2xl md:p-8"
            onClick={(e) => e.stopPropagation()} // Empêche la fermeture lors du clic à l'intérieur de la modale
          >
            {/* Bouton de fermeture de la modale */}
            <button
              onClick={() => setActiveTool(null)}
              className="absolute right-4 top-4 font-mono text-zinc-400 hover:text-white transition-colors p-2 text-sm"
            >
              ✕
            </button>

            {/* En-tête de la modale */}
            <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/5 p-2 border border-white/10">
                <img src={activeTool.icon} alt="" className="h-full w-full object-contain" />
              </div>
              <div>
                <h4 className="font-mono text-xl font-bold tracking-wide text-white uppercase">{activeTool.name}</h4>
                <p className="text-xs text-zinc-400">Utilisé dans les projets suivants :</p>
              </div>
            </div>

            {/* Liste scrollable des projets */}
            <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-1">
              {activeTool.projects.map((project, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl border border-white/5 bg-white/5 p-4 hover:border-white/10 transition-colors"
                >
                  <h5 className="text-base font-semibold text-zinc-200">{project.name}</h5>
                  <p className="mt-1 text-sm text-zinc-400 font-sans leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}