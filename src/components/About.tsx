import { motion } from 'framer-motion'
import Title from './Title'

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4 }}
      className="py-20 scroll-mt-16"
    >
      <Title title="about" subTitle="us" />
      <div className="w-[90vw] max-w-[1170px] mx-auto md:grid md:grid-cols-2 md:gap-8">
        <motion.div
          initial={{ x: -120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-0 relative"
        >
          <div className="xl:before:content-[''] xl:before:absolute xl:before:w-full xl:before:h-full xl:before:border-4 xl:before:border-primary-5 xl:before:top-[-1.5rem] xl:before:left-[-1.5rem] xl:before:box-border" />
          <img
            src="/images/about.jpeg"
            className="w-full block relative object-cover"
            alt="awesome beach"
          />
        </motion.div>
        <motion.article
          initial={{ x: 120, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-0"
        >
          <h3 className="text-xl md:text-2xl font-semibold capitalize tracking-widest mb-4">
            explore the difference
          </h3>
          <p className="mb-5 text-grey-5">
            We craft small-group journeys that go beyond the guidebook. Real places, real people, and stories you won&apos;t find anywhere else.
          </p>
          <p className="mb-5 text-grey-5">
            Whether you&apos;re into mountains, wildlife, or city lights, our expert guides and local partners make every trip safe, smooth, and unforgettable.
          </p>
          <a
            href="#"
            className="inline-block uppercase bg-primary-5 text-white py-2 px-4 rounded border-2 border-transparent cursor-pointer transition-all duration-300 text-sm shadow hover:text-primary-1 hover:bg-primary-8"
          >
            read more
          </a>
        </motion.article>
      </div>
    </motion.section>
  )
}

export default About
