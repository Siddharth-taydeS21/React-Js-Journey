import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import ContextProvider from './contexts/AppContext'

export default function App() {
  return (
    <ContextProvider>
      <Header />
      <Outlet />
    </ContextProvider>
  )
}