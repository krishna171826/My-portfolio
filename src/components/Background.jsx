import { useMemo } from 'react'


function seededRandom(seed) {
  const x = Math.sin(seed * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

export function StarfieldBackground({ starCount = 180 }) {
  const stars = useMemo(() => {
    return Array.from({ length: starCount }, (_, i) => {
      const size = seededRandom(i + 1) * 2.2 + 0.6
      const duration = seededRandom(i + 11) * 6 + 4
      const delay = seededRandom(i + 21) * 6

      return {
        id: i,
        left: `${seededRandom(i + 31) * 100}%`,
        top: `${seededRandom(i + 41) * 100}%`,
        size,
        duration,
        delay,
        opacity: seededRandom(i + 51) * 0.65 + 0.3,
      }
    })
  }, [starCount])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-x-[-20%] top-[-35%] h-[85vh] blur-3xl " />
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white  [animation-name:starPulse] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite]"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}