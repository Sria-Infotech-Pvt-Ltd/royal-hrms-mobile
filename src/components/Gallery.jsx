import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal'

const SCREENS = [
  { src: '/1.png', alt: 'Royal HRMS splash screen', caption: 'Splash Screen' },
  { src: '/2.png', alt: 'Royal HRMS sign-in screen', caption: 'Sign-In' },
  { src: '/3.png', alt: 'Royal HRMS dashboard screen', caption: 'Dashboard Overview' },
  { src: '/4.png', alt: 'Royal HRMS profile screen', caption: 'My Profile' },
  { src: '/5.png', alt: 'Royal HRMS attendance and time screen', caption: 'Attendance & Time' },
  { src: '/6.png', alt: 'Royal HRMS settings and administration screen', caption: 'Administration & Settings' },
  { src: '/7.png', alt: 'Royal HRMS personal attendance screen', caption: 'My Attendance' },
]

export default function Gallery() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const scrollBy = (dir) => {
    const node = trackRef.current
    if (!node) return
    node.scrollBy({ left: dir * 240, behavior: 'smooth' })
  }

  const updateEdges = () => {
    const node = trackRef.current
    if (!node) return
    setAtStart(node.scrollLeft <= 4)
    setAtEnd(node.scrollLeft + node.clientWidth >= node.scrollWidth - 4)
  }

  return (
    <section id="screens" className="relative z-10 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <p className="mb-3 text-center text-base font-semibold uppercase tracking-[0.14em] text-cyan">
            Product Gallery
          </p>
          <h2 className="mx-auto mb-4 max-w-2xl text-center font-head text-3xl font-bold text-text-hi sm:text-4xl">
            A look inside Royal HRMS.
          </h2>
          <p className="mx-auto mb-14 max-w-xl text-center text-lg text-text-mid">
            A selection of real screens from the application.
          </p>
        </Reveal>

        <Reveal className="relative">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={atStart}
            aria-label="Previous screen"
            className="absolute left-1 top-[40%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-panel-border bg-bg-0/80 backdrop-blur transition-all hover:border-cyan hover:text-cyan disabled:pointer-events-none disabled:opacity-30 sm:-left-5 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={atEnd}
            aria-label="Next screen"
            className="absolute right-1 top-[40%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-panel-border bg-bg-0/80 backdrop-blur transition-all hover:border-cyan hover:text-cyan disabled:pointer-events-none disabled:opacity-30 sm:-right-5 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            onScroll={updateEdges}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth py-4"
          >
            {SCREENS.map((s) => (
              <figure
                key={s.caption}
                className="m-0 flex w-56 flex-shrink-0 snap-start flex-col items-center text-center"
              >
                <div className="w-56 overflow-hidden rounded-[24px] border-4 border-[#131a2a] bg-bg-1 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                  <img src={s.src} alt={s.alt} className="w-full" loading="lazy" />
                </div>
                <figcaption className="mt-4 text-sm font-medium text-text-hi">
                  {s.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
