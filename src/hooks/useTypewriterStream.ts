import { useEffect, useRef, useState } from 'react'

const TYPING_MS = 42
const HOLD_MS = 2200
const REVERSE_MS = 22

type Phase = 'typing' | 'hold' | 'reversing'

/** Returns displayed text length and phase for streaming in, then reversing out, then cycle. */
export function useTypewriterStream(
  fullText: string,
  tipIndex: number,
  onCycleNext: () => void
): { displayedLength: number; phase: Phase } {
  const [displayedLength, setDisplayedLength] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')
  const onCycleNextRef = useRef(onCycleNext)
  onCycleNextRef.current = onCycleNext

  useEffect(() => {
    setDisplayedLength(0)
    setPhase('typing')
  }, [tipIndex])

  useEffect(() => {
    if (phase === 'typing') {
      if (displayedLength >= fullText.length) {
        setPhase('hold')
        return
      }
      const t = setTimeout(() => setDisplayedLength((n) => n + 1), TYPING_MS)
      return () => clearTimeout(t)
    }

    if (phase === 'hold') {
      const t = setTimeout(() => setPhase('reversing'), HOLD_MS)
      return () => clearTimeout(t)
    }

    if (phase === 'reversing') {
      if (displayedLength <= 0) {
        onCycleNextRef.current()
        return
      }
      const t = setTimeout(() => setDisplayedLength((n) => n - 1), REVERSE_MS)
      return () => clearTimeout(t)
    }

    return undefined
  }, [fullText.length, displayedLength, phase, tipIndex])

  return { displayedLength, phase }
}
