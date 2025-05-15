"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
}

interface ParticleBackgroundProps {
  particleCount?: number
  particleColors?: string[]
  maxSpeed?: number
  connectDistance?: number
  interactive?: boolean
}

export function ParticleBackground({
  particleCount = 80,
  particleColors = ["rgba(255, 255, 255, 0.3)", "rgba(200, 200, 255, 0.3)", "rgba(150, 150, 255, 0.3)"],
  maxSpeed = 0.5,
  connectDistance = 150,
  interactive = true,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const dimensionsRef = useRef({ width: 0, height: 0 })
  const [isMounted, setIsMounted] = useState(false)
  const animationRef = useRef<number>()
  const isInitializedRef = useRef(false)

  // Initialize particles only once
  const initParticles = () => {
    if (!canvasRef.current || isInitializedRef.current) return

    const canvas = canvasRef.current
    const width = window.innerWidth
    const height = window.innerHeight

    canvas.width = width
    canvas.height = height
    dimensionsRef.current = { width, height }

    // Create particles
    const newParticles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * maxSpeed,
        speedY: (Math.random() - 0.5) * maxSpeed,
        opacity: Math.random() * 0.5 + 0.2,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      })
    }
    particlesRef.current = newParticles
    isInitializedRef.current = true
  }

  // Setup canvas and event listeners
  useEffect(() => {
    setIsMounted(true)

    const handleResize = () => {
      if (!canvasRef.current) return

      const canvas = canvasRef.current
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width
      canvas.height = height
      dimensionsRef.current = { width, height }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePositionRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("resize", handleResize)
    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove)
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [interactive])

  // Initialize particles after component mounts
  useEffect(() => {
    if (isMounted) {
      initParticles()
    }
  }, [isMounted, particleCount, particleColors, maxSpeed])

  // Animation loop
  useEffect(() => {
    if (!isMounted || !isInitializedRef.current || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, dimensionsRef.current.width, dimensionsRef.current.height)

      // Update and draw particles
      const particles = particlesRef.current

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i]

        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x < 0 || particle.x > dimensionsRef.current.width) {
          particle.speedX *= -1
        }

        if (particle.y < 0 || particle.y > dimensionsRef.current.height) {
          particle.speedY *= -1
        }

        // Interactive effect - move towards mouse
        if (interactive) {
          const dx = mousePositionRef.current.x - particle.x
          const dy = mousePositionRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const forceDirectionX = dx / distance
            const forceDirectionY = dy / distance
            const force = (200 - distance) / 2000

            particle.speedX += forceDirectionX * force
            particle.speedY += forceDirectionY * force
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      }

      // Draw connections
      ctx.beginPath()
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectDistance) {
            const opacity = 1 - distance / connectDistance
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`
            ctx.lineWidth = 1
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
          }
        }
      }
      ctx.stroke()

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isMounted, connectDistance, interactive])

  // Server-side rendering fallback
  if (!isMounted) {
    return <div className="absolute inset-0 bg-black/50" />
  }

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ background: "transparent" }} />
}
