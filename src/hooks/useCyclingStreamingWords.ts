import { useEffect, useState } from 'react'

const TYPING_MS = 70
const HOLD_MS = 1800
const REVERSE_MS = 45

type Phase = 'in' | 'hold' | 'out'

/** Returns the currently displayed substring of a word that cycles through the given list with type-in then type-out. */
export function useCyclingStreamingWords(words: string[]): { text: string; phase: Phase } {
  const [wordIndex, setWordIndex] = useState(0)
  const [length, setLength] = useState(0)
  const [phase, setPhase] = useState<Phase>('in')

  const currentWord = words[wordIndex % words.length] ?? ''

  useEffect(() => {
    if (phase === 'in') {
      if (length >= currentWord.length) {
        setPhase('hold')
        return
      }
      const t = setTimeout(() => setLength((n) => n + 1), TYPING_MS)
      return () => clearTimeout(t)
    }

    if (phase === 'hold') {
      const t = setTimeout(() => setPhase('out'), HOLD_MS)
      return () => clearTimeout(t)
    }

    if (phase === 'out') {
      if (length <= 0) {
        setWordIndex((i) => (i + 1) % words.length)
        setPhase('in')
        return
      }
      const t = setTimeout(() => setLength((n) => n - 1), REVERSE_MS)
      return () => clearTimeout(t)
    }

    return undefined
  }, [currentWord.length, length, phase, words.length])

  useEffect(() => {
    setLength(0)
    setPhase('in')
  }, [wordIndex])

  return { text: currentWord.slice(0, length), phase }
}
