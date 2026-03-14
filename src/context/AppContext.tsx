/* eslint-disable react-refresh/only-export-components -- context and hook live together */
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

interface AppContextValue {
  currentTipIndex: number
  setCurrentTipIndex: (index: number) => void
  nextTip: () => void
  tips: LearningTip[]
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentTipIndex, setCurrentTipIndex] = useState(0)

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

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
