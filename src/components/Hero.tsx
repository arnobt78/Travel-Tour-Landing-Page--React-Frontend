import { motion } from 'framer-motion'
import { useCyclingStreamingWords } from '../hooks/useCyclingStreamingWords'

const HERO_KEYWORDS = [
  'Explore',
  'Get Lost',
  'Wander',
  'Adventure',
  'Unwind',
  'Roam',
  'Discover',
]

const Hero = () => {
  const { text: streamingWord, phase } = useCyclingStreamingWords(HERO_KEYWORDS)
  const showCursor = phase === 'in' || phase === 'out'

  return (
    <section id="home" className="min-h-screen relative flex justify-center items-center">
      <div className="absolute inset-0 bg-primary-5" />
      <div
        className="absolute inset-0 hidden md:block bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(44,174,186,0.7), rgba(0,0,0,0.7)), url('/images/main.jpeg')",
        }}
        aria-hidden
      />
      <div className="relative z-10 text-center text-white px-6 md:px-0 w-full max-w-[45rem]">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl font-semibold uppercase tracking-widest mb-4"
        >
          backroads app
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-white/95 tracking-widest mb-8 min-h-[3.5rem] md:min-h-[3.75rem] leading-relaxed"
        >
          Discover handcrafted tours and hidden gems. Adventure, culture, and memories that last a lifetime. Let’s{' '}
          <span className="inline-block min-w-[10ch] text-left align-baseline text-primary-9 font-semibold">
            <span className="inline align-baseline">{streamingWord}</span>
            {showCursor && (
              <span
                className="inline-block w-0.5 h-[1em] ml-0.5 align-baseline animate-pulse"
                style={{ animationDuration: '0.7s' }}
                aria-hidden
              />
            )}
          </span>
        </motion.p>
        <motion.a
          href="#tours"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block uppercase bg-white text-primary-5 py-3 px-6 text-xl border-2 border-transparent rounded shadow-md cursor-pointer transition-colors duration-300 hover:bg-transparent hover:text-white hover:border-white"
        >
          explore tours
        </motion.a>
      </div>
    </section>
  )
}

export default Hero
