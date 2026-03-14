import { pageLinks } from '../data'
import PageLink from './PageLink'

interface PageLinksProps {
  parentClass: string
  itemClass: string
}

const PageLinks = ({ parentClass, itemClass }: PageLinksProps) => {
  return (
    <ul className={`${parentClass} pt-4 md:pt-0`} id="nav-links">
      {pageLinks.map((link) => (
        <PageLink key={link.id} link={link} itemClass={itemClass} />
      ))}
    </ul>
  )
}

export default PageLinks
