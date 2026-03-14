/**
 * Services section: grid of service cards (saving money, endless hiking, amazing comfort).
 * Each Service gets a direction (left/bottom/right) for staggered slide-in animation.
 */
import { motion } from 'framer-motion'
import { services } from '../data'
import Title from './Title'
import Service from './Service'

const directions = ['left', 'bottom', 'right'] as const

const Services = () => {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className="py-20 scroll-mt-16 bg-grey-10"
    >
      <Title title="our" subTitle="services" />
      {/* Stagger children: each Service uses direction (left/bottom/right) for slide-in */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: {
            transition: { staggerChildren: 0.12, delayChildren: 0.08 },
          },
        }}
        className="w-[90vw] max-w-[1170px] mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <Service key={service.id} {...service} direction={directions[index % 3]} />
        ))}
      </motion.div>
    </motion.section>
  )
}

export default Services
