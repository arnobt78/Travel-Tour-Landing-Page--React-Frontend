import { motion } from 'framer-motion'
import { useState } from 'react'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)

  const toggleLinks = () => {
    setShowLinks((prev) => !prev)
  }

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full bg-white shadow-dark z-20 h-16 flex items-center"
    >
      <div className="w-[90vw] max-w-[1170px] mx-auto flex flex-wrap justify-between items-center gap-4">
        <a href="#home" className="flex items-center gap-1 shrink-0 order-1" aria-label="Backroads home">
          <span className="text-xl font-bold text-grey-1 tracking-tight">Back</span>
          <span className="text-xl font-bold text-primary-5 tracking-tight">Roads</span>
        </a>

        <div
          className={`overflow-hidden transition-all duration-300 ease-linear w-full order-3 md:order-2 md:!h-auto md:flex md:flex-row md:flex-1 md:justify-center md:w-auto ${
            showLinks ? 'h-[280px]' : 'h-0'
          }`}
          id="nav-links-wrap"
        >
          <PageLinks
            parentClass="md:flex md:flex-row md:gap-6"
            itemClass="nav-link"
          />
        </div>

        <div className="flex items-center gap-3 order-2 md:order-3 shrink-0 list-none">
          <ul className="flex gap-3 md:gap-2 list-none m-0 p-0">
            {socialLinks.map((link, i) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <SocialLink {...link} itemClass="nav-icon" />
              </motion.li>
            ))}
          </ul>
          <button
            type="button"
            onClick={toggleLinks}
            aria-expanded={showLinks}
            aria-label="Toggle menu"
            className="md:hidden bg-transparent border-none text-primary-5 text-2xl cursor-pointer transition-transform duration-300 hover:scale-110 p-2"
          >
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
