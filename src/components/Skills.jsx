import { useState } from 'react'

export function Skills({ items }) {
  // Track which card index is selected. null means no card is clicked.
  const [activeCard, setActiveCard] = useState(null)

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
              onClick={() => setActiveCard(isSelected ? null : idx)} // Toggle view on click
              className={`group relative rounded-3xl border p-8 backdrop-blur-md transition-all duration-300 cursor-pointer select-none min-h-[340px] flex flex-col justify-between
                ${isSelected 
                  ? 'border-blue-500/50 bg-linear-to-br from-blue-950/30 to-zinc-900/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]' 
                  : 'border-white/10 bg-linear-to-br from-white/8 to-white/3 hover:border-white/20 hover:from-white/12 hover:to-white/5 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]'
                }`}
            >
              {isSelected && (
                <span className="absolute top-3 right-4 text-[10px] uppercase tracking-widest text-blue-400 font-semibold opacity-70">
                  Retour ✕
                </span>
              )}

              {/* View 1: Standard Card Info */}
              {!isSelected ? (
                <div className="flex flex-col h-full justify-between w-full">
                  <div>
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
                  </div>

                  {/* Framework Tags Summary */}
                  {item.frameworks && (
                    <div className="mt-6 flex flex-wrap gap-2 justify-center">
                      {item.frameworks.map((framework, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-block rounded-full bg-blue-400/10 px-3 py-1 text-xs font-semibold text-blue-300 ring-1 ring-blue-400/30"
                        >
                          {framework.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                /* View 2: Skill Level Matrix Bars (100% Scale) */
                <div className="flex flex-col h-full w-full justify-start text-left pt-2">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-6 text-center border-b border-white/5 pb-2">
                    Niveau : {item.language}
                  </h3>
                  
                  <div className="space-y-4 overflow-y-auto max-h-[240px] pr-1 custom-scrollbar">
                    {item.frameworks?.map((framework, fIdx) => {
                      const level = framework.level || 70 // Fallback to 70% if missing
                      
                      return (
                        <div key={fIdx} className="space-y-1.5">
                          <div className="flex justify-between items-center text-xs">
                            <span className="font-medium text-white">{framework.name}</span>
                            <span className="text-blue-300 font-mono font-bold">{level}%</span>
                          </div>
                          
                          {/* Visual Progress Bar directly matches the level value now */}
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