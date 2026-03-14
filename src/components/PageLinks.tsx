/**
 * Renders the list of page links (home, about, services, tours) from data.
 * Used in Navbar and Footer with different parentClass/itemClass for styling.
 */
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
