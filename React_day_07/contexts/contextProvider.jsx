import { createContext, useState } from "react"

export const darkModeContext = createContext();

export default function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode'))
  );

  return (
    <darkModeContext.Provider value={[darkMode, setDarkMode]}>
      {children}
    </darkModeContext.Provider>
  )
}
