/**
 * Custom hook: typewriter for one string — types in, holds, then reverses (deletes) and calls onCycleNext.
 * Used in EducationalBanner to show each learning tip with a streaming effect, then advance to next tip.
 */
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
  // Ref keeps onCycleNext stable so effect deps don't trigger unnecessary runs
  const onCycleNextRef = useRef(onCycleNext)
  onCycleNextRef.current = onCycleNext

  // When tip index changes (e.g. after cycle), reset to typing from start
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
