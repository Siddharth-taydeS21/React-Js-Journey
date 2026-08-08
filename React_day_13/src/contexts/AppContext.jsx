import { createContext } from "react";
export const AppContext = createContext();

export default function ContextProvider({ children }) {
  return (
    <AppContext.Provider value={'we can pass data here'}>
      {children}
    </AppContext.Provider>
  )
}