import { useState } from 'react'

export function Skills({ items }) {
  // Indice de la carte sélectionnée (null = aucune carte ouverte)
  const [activeCard, setActiveCard] = useState(null)
  
  // Onglet sélectionné pour afficher le niveau : 'BUT1' ou 'BUT2'
  const [activeBut, setActiveBut] = useState('BUT1')

  return (
    <section className="text-center">
      <div className="flex items-center justify-center gap-4">
        <div className="h-px w-24 bg-linear-to-r from-transparent via-zinc-300/70 to-transparent sm:w-32" />
      </div>

      <h2 className="mt-5 font-mono text-3xl font-semibold tracking-tight text-white sm:text-5xl">
        <span className="text-slate-300">Technologies</span>
      </h2>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, idx) => {
          const isSelected = activeCard === idx

          return (
            <div
              key={idx}
              onClick={() => {
                // On n'ouvre la carte que si elle n'est pas déjà sélectionnée
                if (!isSelected) setActiveCard(idx)
              }} 
              className={`group relative rounded-3xl border p-8 backdrop-blur-md transition-all duration-300 cursor-pointer select-none min-h-[420px] flex flex-col justify-start items-center
                ${isSelected 
                  ? 'border-blue-500/50 bg-linear-to-br from-blue-950/30 to-zinc-900/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
                  : 'border-white/10 bg-linear-to-br from-white/8 to-white/3 hover:border-white/20 hover:from-white/12 hover:to-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                }`}
            >
              {isSelected && (
                <button 
                  onClick={(e) => {
                    e.stopPropagation() // Évite de ré-ouvrir la carte immédiatement
                    setActiveCard(null)
                  }}
                  className="absolute top-3 right-4 text-[10px] uppercase tracking-widest text-blue-400 font-semibold opacity-70 hover:opacity-100 transition z-20"
                >
                  Retour ✕
                </button>
              )}

              {/* Vue 1 : Informations standards de la carte */}
              {!isSelected ? (
                <div className="flex flex-col w-full items-center justify-start">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="inline-flex h-24 w-24 items-center justify-center rounded-2xl bg-linear-to-br from-white/15 to-white/5 p-4 shadow-lg">
                      <img src={item.icon} alt={`${item.language} logo`} className="h-full w-full object-contain" loading="lazy" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold uppercase tracking-wider text-white sm:text-xl text-center">
                    {item.language}
                  </h3>

                  {/* Description */}
                  {item.description && (
                    <p className="mt-4 text-sm leading-relaxed text-zinc-300 text-center">
                      {item.description}
                    </p>
                  )}

                  {/* Framework Tags Summary */}
                  {item.frameworks && (
                    <div className="mt-6 flex flex-wrap gap-2 justify-center w-full">
                      {item.frameworks.map((framework, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-block rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30 transition duration-200 hover:bg-blue-400/20"
                        >
                          {framework.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* Vue 2 : Matrice des niveaux (avec les onglets BUT1 / BUT2) */
                <div 
                  className="flex flex-col h-full w-full justify-start text-left pt-2"
                  onClick={(e) => e.stopPropagation()} // Évite de fermer au clic sur le fond intérieur
                >
                  <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4 text-center border-b border-white/5 pb-2">
                    Niveau : {item.language}
                  </h3>

                  {/* Boutons d'onglets de changement de niveau */}
                  <div className="flex justify-center gap-2 mb-6 bg-white/5 p-1 rounded-xl border border-white/10 w-full">
                    <button
                      onClick={() => setActiveBut('BUT1')}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                        activeBut === 'BUT1'
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      BUT 1
                    </button>
                    <button
                      onClick={() => setActiveBut('BUT2')}
                      className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                        activeBut === 'BUT2'
                          ? 'bg-blue-500 text-white shadow-md'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      BUT 2
                    </button>
                  </div>
                  
                  {/* Liste des jauges de progression */}
                  <div className="space-y-4 overflow-y-auto max-h-[220px] pr-1 custom-scrollbar w-full">
                    {item.frameworks?.map((framework, fIdx) => {
                      // Sélection de la bonne propriété de niveau en fonction de l'onglet actif
                      const level = activeBut === 'BUT1' 
                        ? (framework.levelBUT1 ?? 0) 
                        : (framework.levelBUT2 ?? 0)
                      
                      return (
                        <div key={fIdx} className="space-y-1.5 w-full">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-medium text-white">{framework.name}</span>
                            <span className="text-blue-300 font-mono font-bold">{level}%</span>
                          </div>
                          
                          {/* Visual Progress Bar */}
                          <div className="h-2 w-full bg-zinc-800/80 rounded-full overflow-hidden ring-1 ring-white/5">
                            <div 
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 rounded-full transition-all duration-500 ease-out"
                              style={{ width: `${level}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}