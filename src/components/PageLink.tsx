import type { PageLinkItem } from '../types'

interface PageLinkProps {
  link: PageLinkItem
  itemClass: string
}

const PageLink = ({ link, itemClass }: PageLinkProps) => {
  const isFooter = itemClass === 'footer-link'
  const base = 'block uppercase tracking-widest transition-all duration-300 cursor-pointer text-base'
  const navStyles = 'py-4 px-8 md:py-0 md:px-0 text-grey-1 hover:text-primary-1 hover:bg-primary-8 md:hover:bg-transparent md:hover:text-primary-5'
  const footerStyles = 'py-2 px-4 text-white hover:text-primary-5'
  const cn = isFooter ? `${base} ${footerStyles}` : `${base} ${navStyles}`
  return (
    <li>
      <a href={link.href} className={cn}>
        {link.text}
      </a>
    </li>
  )
}

export default PageLink
