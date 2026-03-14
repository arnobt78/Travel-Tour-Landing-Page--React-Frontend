/**
 * Single social icon link. Renders only <a> (no <li>) so parent Navbar/Footer can wrap in <li> and avoid nesting <li> inside <li>.
 * Opens in new tab with rel="noreferrer" for security. Icon class is Font Awesome (e.g. fab fa-facebook).
 */
import type { SocialLinkItem } from '../types'

interface SocialLinkProps extends SocialLinkItem {
  itemClass: string
}

const SocialLink = ({ itemClass, href, icon }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`text-primary-5 text-xl transition-colors duration-300 hover:text-primary-8 ${itemClass}`}
    >
      <i className={icon} />
    </a>
  )
}

export default SocialLink
