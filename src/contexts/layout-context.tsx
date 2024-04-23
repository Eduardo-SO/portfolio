'use client'

import { ReactNode, createContext, useState } from 'react'

type LayoutContextType = {
  contactProgression: number
  handleSetContactProgression(isProgression: number): void
}

export const LayoutContext = createContext<LayoutContextType>(
  {} as LayoutContextType,
)

const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [contactProgression, setContactProgression] = useState(0)

  function handleSetContactProgression(progression: number) {
    setContactProgression(progression)
  }

  return (
    <LayoutContext.Provider
      value={{ contactProgression, handleSetContactProgression }}
    >
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider
