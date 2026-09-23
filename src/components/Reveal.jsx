import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, className = '', delay = false }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'in-view' : ''} ${className}`}
      style={delay ? { animationDelay: '0.15s' } : undefined}
    >
      {children}
    </div>
  )
}
