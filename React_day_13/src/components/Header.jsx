import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="shadow-md sticky">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto p-4">
        <Link to={"/home"} className="text-lg md:text-2xl font-bold">
          My Logo
        </Link>
        <ul className="flex items-center gap-6">
          <li className="md:text-lg font-semibold transition-colors duration-300 hover:text-blue-400">
            <Link to={"/home"}>
              Home
            </Link>
          </li>
          <li className="md:text-lg font-semibold transition-colors duration-300 hover:text-blue-400">
            <Link to={"/about"}>
              About
            </Link>
          </li>
          <li className="md:text-lg font-semibold transition-colors duration-300 hover:text-blue-400">
            <Link to={"/contact"}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

