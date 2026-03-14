/**
 * Reusable section heading: "title" + highlighted "subTitle" (e.g. "featured" + "tours").
 * Used in About, Services, Tours, KeyConceptsSection. Fades in on scroll via whileInView.
 */
import { motion } from 'framer-motion'

interface TitleProps {
  title: string
  subTitle: string
}

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-widest">
        {title} <span className="text-primary-5">{subTitle}</span>
      </h2>
    </motion.div>
  )
}

export default Title
