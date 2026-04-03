import { createContext, useState } from "react"

export const RefreshContext = createContext()

export function RefreshProvider({ children }) {
  const [refresh, setRefresh] = useState(false)

  const toggleRefresh = () => {
    setRefresh((prev) => !prev)
  }

  return (
    <RefreshContext.Provider value={{ refresh, toggleRefresh }}>
      {children}
    </RefreshContext.Provider>
  )
}