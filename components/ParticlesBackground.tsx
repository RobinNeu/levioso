'use client'

import { useCallback } from 'react'
import Particles from '@tsparticles/react'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particleOptions: ISourceOptions = {
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: 'transparent' },
    particles: {
      number: {
        value: 100,
        density: { enable: true, width: 1000, height: 1000 },
      },
      color: { value: '#ffcc70' },
      opacity: { value: { min: 0.1, max: 0.4 } },
      size: { value: { min: 1, max: 2 } },
      move: {
        enable: true,
        speed: 0.3,
        outModes: { default: 'out' },
      },
    },
  }

  return <Particles id="tsparticles" options={particleOptions} />
}

