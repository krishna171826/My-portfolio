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

  const movingStars = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => {
      const startX = seededRandom(i + 101) * 100
      const startY = seededRandom(i + 111) * 100
      const travelX = (seededRandom(i + 121) - 0.5) * 220
      const travelY = (seededRandom(i + 131) - 0.5) * 140

      return {
        id: i,
        left: `${startX}%`,
        top: `${startY}%`,
        travelX: `${travelX}px`,
        travelY: `${travelY}px`,
        duration: seededRandom(i + 141) * 8 + 10,
        delay: seededRandom(i + 151) * 10,
        size: seededRandom(i + 161) * 5 + 4,
        opacity: seededRandom(i + 171) * 0.35 + 0.35,
        scale: seededRandom(i + 181) * 0.7 + 0.9,
      }
    })
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,0.5),0_0_14px_rgba(255,255,255,0.2)] [animation-name:starPulse] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite]"
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

      {movingStars.map((star) => (
        <span
          key={star.id}
          className="absolute block rounded-full [animation-name:driftStar] [animation-timing-function:ease-in-out] [animation-iteration-count:infinite]"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
            ['--dx']: star.travelX,
            ['--dy']: star.travelY,
            ['--scale']: star.scale,
          }}
        >
          <span className="absolute -inset-2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.45),rgba(255,255,255,0.12)_45%,rgba(0,0,0,0)_72%)] blur-[1px]" />
          <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.65),0_0_22px_rgba(255,255,255,0.32),0_0_34px_rgba(255,255,255,0.16)]" />
        </span>
      ))}
    </div>
  )
}