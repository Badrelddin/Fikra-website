'use client'
import { useEffect, useCallback } from 'react'

export default function ParticlesBackground() {
  const initParticles = useCallback(() => {
    const oldCanvas = document.querySelector('#particles-js canvas')
    if (oldCanvas) oldCanvas.remove()

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p: any) => p.pJS.fn.vendors.destroypJS())
      // @ts-ignore
      window.pJSDom = []
    }

    // @ts-ignore
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 70, density: { enable: true, value_area: 800 } },
        color: { value: '#1E6FBF' },
        shape: {
          type: 'circle',
          stroke: { width: 0.5, color: '#1565A8' },
        },
        opacity: {
          value: 0.45,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.15 },
        },
        size: {
          value: 2.5,
          random: true,
          anim: { enable: true, speed: 2, size_min: 0.6 },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#1E6FBF',
          opacity: 0.22,
          width: 0.8,
        },
        move: {
          enable: true,
          speed: 1.5,
          random: true,
          out_mode: 'bounce',
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 220, line_linked: { opacity: 0.8 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    })
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
    script.async = true
    document.body.appendChild(script)
    script.onload = () => initParticles()
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [initParticles])

  return (
    <div
      id="particles-js"
      style={{ background: 'transparent', zIndex: 0, pointerEvents: 'none' }}
      className="fixed inset-0 w-full h-full"
    />
  )
}
