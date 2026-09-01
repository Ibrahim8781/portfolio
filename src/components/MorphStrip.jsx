"use client"
import { useEffect, useRef } from "react"
import "./MorphStrip.css"

// Domain palette per section
const SECTION_THEMES = {
  experience:     { h: 196, s: 79, l: 40, label: "Experience",     shapes: "lines"    },  // teal
  projects:       { h: 38,  s: 72, l: 37, label: "Projects",       shapes: "hexagons" },  // amber
  skills:         { h: 196, s: 79, l: 40, label: "Skills",         shapes: "circles"  },  // teal
  certifications: { h: 38,  s: 72, l: 37, label: "Certifications", shapes: "dots"     },  // amber
  education:      { h: 262, s: 60, l: 45, label: "Education",      shapes: "squares"  },  // plum
  contact:        { h: 196, s: 79, l: 40, label: "Contact",        shapes: "lines"    },  // teal
}

const rand = (min, max) => Math.random() * (max - min) + min

export default function MorphStrip({ activeSection }) {
  const canvasRef = useRef(null)
  const animRef   = useRef(null)
  const stateRef  = useRef({
    currentH: 196, currentS: 79, currentL: 40,
    targetH:  196, targetS:  79, targetL:  40,
    particles: [],
    tick: 0,
  })

  // Spawn particles when section changes
  useEffect(() => {
    const theme = SECTION_THEMES[activeSection] || SECTION_THEMES.projects
    stateRef.current.targetH = theme.h
    stateRef.current.targetS = theme.s
    stateRef.current.targetL = theme.l

    // Spawn new batch of particles
    const canvas = canvasRef.current
    if (!canvas) return
    const w = canvas.width
    const h = canvas.height

    const count = 18
    const newParticles = Array.from({ length: count }, () => ({
      x:      rand(0, w),
      y:      rand(-50, h + 50),
      size:   rand(4, 22),
      speed:  rand(0.15, 0.55),
      opacity: rand(0.06, 0.22),
      drift:  rand(-0.3, 0.3),
      rot:    rand(0, Math.PI * 2),
      rotSpeed: rand(-0.005, 0.005),
      shape: theme.shapes,
      life: 0,
      maxLife: rand(180, 360),
    }))
    stateRef.current.particles = newParticles
  }, [activeSection])

  // Canvas animation loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const draw = () => {
      const s = stateRef.current
      const w = canvas.width
      const h = canvas.height

      // Lerp colors
      s.currentH += (s.targetH - s.currentH) * 0.025
      s.currentS += (s.targetS - s.currentS) * 0.025
      s.currentL += (s.targetL - s.currentL) * 0.025
      s.tick++

      // Background gradient
      ctx.clearRect(0, 0, w, h)
      const grad = ctx.createLinearGradient(0, 0, 0, h)
      grad.addColorStop(0, `hsla(${s.currentH}, ${s.currentS}%, ${s.currentL}%, 0)`)
      grad.addColorStop(0.3, `hsla(${s.currentH}, ${s.currentS}%, ${s.currentL}%, 0.04)`)
      grad.addColorStop(0.7, `hsla(${s.currentH}, ${s.currentS}%, ${s.currentL}%, 0.06)`)
      grad.addColorStop(1, `hsla(${s.currentH}, ${s.currentS}%, ${s.currentL}%, 0.02)`)
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, w, h)

      // Left edge accent line
      ctx.strokeStyle = `hsla(${s.currentH}, ${s.currentS}%, ${s.currentL}%, 0.18)`
      ctx.lineWidth = 1
      ctx.setLineDash([])
      ctx.beginPath()
      ctx.moveTo(0, 0)
      ctx.lineTo(0, h)
      ctx.stroke()

      // Animate particles
      s.particles = s.particles.filter(p => p.life < p.maxLife)
      s.particles.forEach(p => {
        p.y    -= p.speed
        p.x    += p.drift
        p.rot  += p.rotSpeed
        p.life++

        const progress = p.life / p.maxLife
        const fade = progress < 0.15
          ? progress / 0.15
          : progress > 0.8
            ? (1 - progress) / 0.2
            : 1

        ctx.save()
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rot)
        ctx.globalAlpha = p.opacity * fade
        ctx.strokeStyle = `hsl(${s.currentH}, ${s.currentS}%, ${s.currentL}%)`
        ctx.lineWidth = 1
        ctx.fillStyle = `hsla(${s.currentH}, ${s.currentS}%, ${s.currentL}%, 0.12)`

        const sz = p.size
        switch (p.shape) {
          case "hexagons": {
            ctx.beginPath()
            for (let i = 0; i < 6; i++) {
              const a = (Math.PI / 3) * i
              i === 0
                ? ctx.moveTo(Math.cos(a) * sz, Math.sin(a) * sz)
                : ctx.lineTo(Math.cos(a) * sz, Math.sin(a) * sz)
            }
            ctx.closePath()
            ctx.stroke()
            ctx.fill()
            break
          }
          case "circles": {
            ctx.beginPath()
            ctx.arc(0, 0, sz, 0, Math.PI * 2)
            ctx.stroke()
            ctx.fill()
            break
          }
          case "squares": {
            ctx.strokeRect(-sz, -sz, sz * 2, sz * 2)
            ctx.fillRect(-sz, -sz, sz * 2, sz * 2)
            break
          }
          case "dots": {
            ctx.beginPath()
            ctx.arc(0, 0, sz * 0.4, 0, Math.PI * 2)
            ctx.fill()
            break
          }
          default: { // lines
            ctx.beginPath()
            ctx.moveTo(-sz, 0)
            ctx.lineTo(sz, 0)
            ctx.stroke()
            ctx.beginPath()
            ctx.moveTo(0, -sz)
            ctx.lineTo(0, sz)
            ctx.stroke()
          }
        }
        ctx.restore()
      })

      // Subtle horizontal "pulse" line at mid-height
      const pulse = 0.5 + 0.5 * Math.sin(s.tick * 0.012)
      const midY = h * 0.5 + Math.sin(s.tick * 0.008) * 30
      const lineGrad = ctx.createLinearGradient(0, midY, w, midY)
      lineGrad.addColorStop(0, `hsla(${s.currentH}, ${s.currentS}%, ${s.currentL}%, 0)`)
      lineGrad.addColorStop(0.5, `hsla(${s.currentH}, ${s.currentS}%, ${s.currentL}%, ${0.12 * pulse})`)
      lineGrad.addColorStop(1, `hsla(${s.currentH}, ${s.currentS}%, ${s.currentL}%, 0)`)
      ctx.strokeStyle = lineGrad
      ctx.lineWidth = 1
      ctx.setLineDash([4, 8])
      ctx.beginPath()
      ctx.moveTo(0, midY)
      ctx.lineTo(w, midY)
      ctx.stroke()
      ctx.setLineDash([])

      animRef.current = requestAnimationFrame(draw)
    }

    // Initial particle spawn
    const initTheme = SECTION_THEMES["experience"]
    stateRef.current.particles = Array.from({ length: 18 }, () => ({
      x:      rand(0, 100),
      y:      rand(0, 800),
      size:   rand(4, 22),
      speed:  rand(0.15, 0.55),
      opacity: rand(0.06, 0.22),
      drift:  rand(-0.3, 0.3),
      rot:    rand(0, Math.PI * 2),
      rotSpeed: rand(-0.005, 0.005),
      shape: initTheme.shapes,
      life: 0,
      maxLife: rand(180, 360),
    }))

    animRef.current = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener("resize", resize)
    }
  }, [])

  const theme = SECTION_THEMES[activeSection] || SECTION_THEMES.projects
  const color = `hsl(${theme.h}, ${theme.s}%, ${theme.l}%)`

  return (
    <div className="morph-strip">
      <canvas ref={canvasRef} className="morph-canvas" />
      <div className="morph-label" style={{ color }}>
        {theme.label}
      </div>
    </div>
  )
}
