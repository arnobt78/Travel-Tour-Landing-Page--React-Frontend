/**
 * Single tour card: image, date badge (Calendar), optional slogan badge (streaming text + Sparkles),
 * title, info, and pills for location (MapPin), cost (Banknote), duration (Clock). Lucide icons for badges.
 */
import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Banknote, Sparkles } from 'lucide-react'
import { useStreamingText } from '../hooks/useStreamingText'
import type { TourItem } from '../types'

const slideIn = {
  left: { initial: { x: -100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  right: { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  bottom: { initial: { y: 80, opacity: 0 }, animate: { y: 0, opacity: 1 } },
}

interface TourProps extends TourItem {
  direction?: 'left' | 'right' | 'bottom'
}

const Tour = ({
  image,
  date,
  title,
  info,
  location,
  duration,
  cost,
  slogan,
  direction = 'bottom',
}: TourProps) => {
  const variant = slideIn[direction]
  const streamingSlogan = useStreamingText(slogan ?? '', Boolean(slogan))
  // Slogan badge types in, holds, then reverses for a chat-like effect

  return (
    <motion.article
      variants={{
        hidden: variant.initial,
        show: {
          ...variant.animate,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="bg-grey-10 shadow-light rounded-lg mb-8 overflow-hidden hover:shadow-dark transition-shadow duration-300"
    >
      <div className="relative">
        <img src={image} className="h-60 w-full object-cover" alt={title} />
        <span className="absolute right-0 bottom-0 inline-flex items-center gap-1.5 bg-primary-8 text-primary-1 capitalize py-1.5 px-2.5 text-sm font-medium rounded-tl-md">
          <Calendar className="w-3.5 h-3.5" aria-hidden />
          {date}
        </span>
        {slogan && (
          <span className="absolute left-0 top-2 inline-flex items-center gap-1 bg-grey-1/90 text-white text-xs font-medium px-2 py-1 rounded-r-md">
            <Sparkles className="w-3 h-3" aria-hidden />
            {streamingSlogan}
            {streamingSlogan.length < (slogan?.length ?? 0) && (
              <span className="inline-block w-0.5 h-3 bg-white animate-pulse" aria-hidden />
            )}
          </span>
        )}
      </div>
      <div className="p-5">
        <h4 className="text-lg font-semibold capitalize tracking-widest mb-3">{title}</h4>
        <p className="mt-2 mb-4 text-grey-5 text-sm leading-relaxed">{info}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-1.5 text-primary-5 capitalize font-medium bg-primary-10 px-2 py-1 rounded">
            <MapPin className="w-3.5 h-3.5" aria-hidden />
            {location}
          </span>
          <span className="inline-flex items-center gap-1.5 text-primary-5 font-medium bg-primary-10 px-2 py-1 rounded">
            <Banknote className="w-3.5 h-3.5" aria-hidden />
            from ${cost}
          </span>
          <span className="inline-flex items-center gap-1.5 text-primary-5 font-medium bg-primary-10 px-2 py-1 rounded">
            <Clock className="w-3.5 h-3.5" aria-hidden />
            {duration} days
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default Tour
