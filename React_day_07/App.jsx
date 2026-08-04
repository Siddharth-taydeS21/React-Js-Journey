import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ContextProvider from "./contexts/contextProvider";

export default function App() {

  return (
    <ContextProvider>
      <Header />
      <Outlet />
    </ContextProvider>
  )
}
