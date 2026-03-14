import { motion } from 'framer-motion'
import { useCallback } from 'react'
import { useApp } from '../context/AppContext'
import { useTypewriterStream } from '../hooks/useTypewriterStream'

const SEP = '\n'

const EducationalBanner = () => {
  const { tips, currentTipIndex, nextTip } = useApp()
  const tip = tips[currentTipIndex]
  const fullText = tip ? `${tip.title}${SEP}${tip.description}` : ''

  const { displayedLength, phase } = useTypewriterStream(
    fullText,
    currentTipIndex,
    useCallback(() => nextTip(), [nextTip])
  )

  const visible = fullText.slice(0, displayedLength)
  const [titlePart, ...descParts] = visible.split(SEP)
  const descriptionPart = descParts.join(SEP)
  const showCursor = phase === 'typing' || phase === 'reversing'
  const cursorOnTitle = showCursor && !visible.includes(SEP)
  const cursorOnDesc = showCursor && visible.includes(SEP)

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="py-12 bg-primary-10 border-b-2 border-primary-8"
    >
      <div className="w-[90vw] max-w-[1170px] mx-auto text-center">
        <p className="text-primary-1 text-sm font-semibold uppercase tracking-widest mb-2">
          Learn React — Key concept
        </p>
        <div className="min-h-[4.5rem] flex flex-col items-center justify-center">
          <h3 className="text-xl md:text-2xl font-semibold text-grey-1 mb-2">
            {titlePart}
            {cursorOnTitle && (
              <span
                className="inline-block w-0.5 h-6 md:h-7 bg-primary-5 ml-0.5 align-middle animate-pulse"
                style={{ animationDuration: '0.8s' }}
                aria-hidden
              />
            )}
          </h3>
          <p className="text-grey-5 max-w-2xl mx-auto mb-2 min-h-[3rem]">
            {descriptionPart}
            {cursorOnDesc && (
              <span
                className="inline-block w-0.5 h-5 bg-primary-5 ml-0.5 align-bottom animate-pulse"
                style={{ animationDuration: '0.8s' }}
                aria-hidden
              />
            )}
          </p>
        </div>
      </div>
    </motion.section>
  )
}

export default EducationalBanner
