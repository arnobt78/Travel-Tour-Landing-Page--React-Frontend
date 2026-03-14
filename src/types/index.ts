/**
 * Shared TypeScript interfaces for props and data shapes.
 * Used across components and data.ts for type safety and editor hints.
 */

/** Single nav/footer link item */
export interface PageLinkItem {
  id: number
  href: string
  text: string
}

/** Social link with icon class (e.g. Font Awesome) */
export interface SocialLinkItem {
  id: number
  href: string
  icon: string
}

/** Service card data */
export interface ServiceItem {
  id: number
  icon: string
  title: string
  text: string
}

/** Learning tip for the educational banner */
export interface LearningTip {
  id: number
  title: string
  description: string
}

/** Tour card data - image is public URL path in Vite */
export interface TourItem {
  id: number
  image: string
  date: string
  title: string
  info: string
  location: string
  duration: number
  cost: number
  slogan?: string
}
