/**
 * Featured tours section: grid of Tour cards from data. Each card gets a slide-in direction for animation.
 */
import { motion } from 'framer-motion'
import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'

const directions: Array<'left' | 'right' | 'bottom'> = ['left', 'right', 'bottom', 'left', 'right', 'bottom']

const Tours = () => {
  return (
    <motion.section
      id="tours"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      className="py-20 scroll-mt-16"
    >
      <Title title="featured" subTitle="tours" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.15, delayChildren: 0.1 },
          },
        }}
        className="w-[90vw] max-w-[1170px] mx-auto grid gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {tours.map((tour, index) => (
          <Tour key={tour.id} {...tour} direction={directions[index % directions.length]} />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Tours
