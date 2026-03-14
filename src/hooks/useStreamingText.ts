import { useEffect, useState } from 'react'

const TYPING_MS = 80
const HOLD_MS = 2000
const REVERSE_MS = 50

/** Returns a substring of text that streams in, holds, then streams out (backward), then loops. */
export function useStreamingText(text: string, enabled: boolean): string {
  const [length, setLength] = useState(0)
  const [phase, setPhase] = useState<'in' | 'hold' | 'out'>('in')

  useEffect(() => {
    if (!enabled || !text) {
      setLength(0)
      setPhase('in')
      return
    }

    if (phase === 'in') {
      if (length >= text.length) {
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
        setPhase('in')
        return
      }
      const t = setTimeout(() => setLength((n) => n - 1), REVERSE_MS)
      return () => clearTimeout(t)
    }

    return undefined
  }, [text, enabled, length, phase])

  return text.slice(0, length)
}
