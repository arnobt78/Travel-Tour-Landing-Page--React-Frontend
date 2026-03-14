/* eslint-disable react-refresh/only-export-components -- context and hook live together */
/**
 * App-level Context: holds the current learning-tip index for the EducationalBanner.
 * Avoids prop drilling — any child can call useApp() to read/update tip state.
 */
import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { learningTips } from '../data'
import type { LearningTip } from '../types'

/** Shape of the value provided by AppContext */
interface AppContextValue {
  currentTipIndex: number
  setCurrentTipIndex: (index: number) => void
  nextTip: () => void
  tips: LearningTip[]
}

const AppContext = createContext<AppContextValue | null>(null)

/** Wraps the app so EducationalBanner (and others) can consume tip state via useApp() */
export function AppProvider({ children }: { children: ReactNode }) {
  const [currentTipIndex, setCurrentTipIndex] = useState(0)

  // Cycles 0 → 1 → 2 → 3 → 0; used when typewriter finishes reversing the current tip
  const nextTip = useCallback(() => {
    setCurrentTipIndex((i) => (i + 1) % learningTips.length)
  }, [])

  const value = useMemo<AppContextValue>(
    () => ({
      currentTipIndex,
      setCurrentTipIndex,
      nextTip,
      tips: learningTips,
    }),
    [currentTipIndex, nextTip]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

/** Consume App context; must be used inside AppProvider (e.g. in EducationalBanner). */
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
