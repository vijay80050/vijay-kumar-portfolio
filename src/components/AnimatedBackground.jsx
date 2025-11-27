import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const AnimatedBackground = () => {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let particles = []

    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * (theme === 'dark' ? 1.5 : 1.5) + 0.8
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.8 + 0.2
        this.twinkle = Math.random() * Math.PI * 2
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.twinkle += 0.02

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (theme === 'dark') {
          // Starry night effect - twinkling stars
          const twinkleOpacity = (Math.sin(this.twinkle) + 1) / 2 * 0.5 + 0.5
          ctx.fillStyle = `rgba(255, 255, 255, ${twinkleOpacity * this.opacity})`
          ctx.shadowBlur = 3
          ctx.shadowColor = 'rgba(255, 255, 255, 0.8)'
        } else {
          // Light mode - more visible particles with darker color
          ctx.fillStyle = `rgba(14, 165, 233, ${this.opacity * 0.8})`
          ctx.shadowBlur = 4
          ctx.shadowColor = 'rgba(14, 165, 233, 0.8)'
        }
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Create particles - more stars in dark mode, but visible in light mode too
    const particleCount = theme === 'dark' ? 200 : 150
    particles = Array.from({ length: particleCount }, () => new Particle())

    let isVisible = true

    // Pause animation when tab is not visible (performance optimization)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden
      if (isVisible && !animationFrameId) {
        animate()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    const animate = () => {
      if (!isVisible) {
        animationFrameId = null
        return
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections - only in light mode, minimal in dark mode
      particles.forEach((particle, i) => {
        particle.update()
        particle.draw()

        if (theme === 'light') {
          particles.slice(i + 1).forEach(otherParticle => {
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 120) {
              ctx.strokeStyle = `rgba(14, 165, 233, ${0.25 * (1 - distance / 120)})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          })
        }
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
      if (animationFrameId) {
      cancelAnimationFrame(animationFrameId)
      }
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
      style={{ 
        background: theme === 'dark'
          ? 'radial-gradient(ellipse at center, #0a0e1a 0%, #000000 100%)'
          : 'radial-gradient(ellipse at top, #bfdbfe 0%, #dbeafe 30%, #e0f2fe 70%, #f0f9ff 100%)'
      }}
    />
  )
}

export default AnimatedBackground

