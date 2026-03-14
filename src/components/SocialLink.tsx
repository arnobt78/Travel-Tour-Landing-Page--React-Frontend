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
