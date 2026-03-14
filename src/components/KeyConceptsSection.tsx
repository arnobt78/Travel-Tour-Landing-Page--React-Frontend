import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import Title from './Title'

const CONCEPTS = [
  { title: 'Reusable components', text: 'Navbar, Hero, Title, Tour, Service — each is a small component.' },
  { title: 'Context API', text: 'AppContext holds the current learning tip. EducationalBanner reads it via useApp().' },
  { title: 'Custom hooks', text: 'useInView() uses Intersection Observer so this section fades in when you scroll here.' },
  { title: 'Framer Motion', text: 'Animations use motion components and variants for fade-in and stagger effects.' },
]

const directions: Array<'left' | 'right' | 'bottom'> = ['left', 'right', 'left', 'right']

const KeyConceptsSection = () => {
  const [ref, inView] = useInView()

  return (
    <section id="concepts" className="py-20 scroll-mt-16 bg-grey-10">
      <Title title="how this" subTitle="app is built" />
      <div ref={ref} className="w-[90vw] max-w-[1170px] mx-auto">
        <div className="grid gap-6 sm:grid-cols-2">
          {CONCEPTS.map((item, index) => {
            const dir = directions[index]
            const fromLeft = dir === 'left'
            const fromRight = dir === 'right'
            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: fromLeft ? -80 : fromRight ? 80 : 0,
                  y: dir === 'bottom' ? 50 : 0,
                }}
                animate={
                  inView
                    ? { opacity: 1, x: 0, y: 0 }
                    : {}
                }
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 rounded-lg bg-white shadow-light border border-grey-9"
              >
                <h4 className="text-lg font-semibold text-grey-1 mb-2">{item.title}</h4>
                <p className="text-grey-5 text-sm">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default KeyConceptsSection
