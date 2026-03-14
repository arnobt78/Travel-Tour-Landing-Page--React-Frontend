import { motion } from 'framer-motion'
import type { ServiceItem } from '../types'

const slideIn = {
  left: { initial: { x: -80, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  right: { initial: { x: 80, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  bottom: { initial: { y: 60, opacity: 0 }, animate: { y: 0, opacity: 1 } },
}

interface ServiceProps extends ServiceItem {
  direction?: 'left' | 'right' | 'bottom'
}

const Service = ({ icon, title, text, direction = 'bottom' }: ServiceProps) => {
  const variant = slideIn[direction]
  return (
    <motion.article
      variants={{
        hidden: variant.initial,
        show: {
          ...variant.animate,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="text-center mb-12 sm:mb-0 sm:flex sm:text-left"
    >
      <span className="inline-block bg-primary-5 text-primary-1 p-2 text-3xl mb-6 sm:flex-shrink-0 sm:self-start">
        <i className={icon} />
      </span>
      <div className="sm:pl-4">
        <h4 className="text-lg font-semibold capitalize tracking-widest mb-2 sm:mb-1">{title}</h4>
        <p className="text-grey-5 max-w-[20rem] mx-auto sm:mx-0">{text}</p>
      </div>
    </motion.article>
  )
}

export default Service
