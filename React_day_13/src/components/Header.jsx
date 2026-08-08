import { useContext, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import PopupModal from "./PopupModal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="shadow-md sticky">
      <nav className="flex justify-between items-center w-full max-w-7xl mx-auto p-4">
        <NavLink to={"/"} className='text-lg md:text-2xl size-8 font-bold'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/3840px-React-icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="logo" />
        </NavLink>
        <ul className="flex items-center gap-6">
          <li className="md:text-lg font-semibold transition-colors duration-300 hover:text-blue-400">
            <NavLink to={"/"} className={({ isActive }) => isActive ? 'md:text-lg text-green-400 underline font-semibold transition-colors duration-300 hover:text-blue-400' : 'md:text-lg font-semibold transition-colors duration-300 hover:text-blue-400'}>
              Home
            </NavLink>
          </li>
          <li className="md:text-lg font-semibold transition-colors duration-300 hover:text-blue-400">
            <NavLink to={"/about"} className={({ isActive }) => isActive ? 'md:text-lg text-green-400 underline font-semibold transition-colors duration-300 hover:text-green-400' : 'md:text-lg font-semibold transition-colors duration-300 hover:text-blue-400'}>
              About
            </NavLink>
          </li>
          <li className="md:text-lg font-semibold transition-colors duration-300 hover:text-blue-400">
            <NavLink to={"/contact"} className={({ isActive }) => isActive ? 'md:text-lg text-green-400 underline font-semibold transition-colors duration-300 hover:text-green-400' : 'md:text-lg font-semibold transition-colors duration-300 hover:text-blue-400'}>
              Contact
            </NavLink>
          </li>
          <li className="md:text-lg font-semibold transition-colors duration-300 hover:text-gray-400">
            <NavLink
              to={"/contact"}
              className='md:text-lg text-green-400 underline font-semibold transition-colors duration-300 hover:text-green-400'
              onClick={() => { setIsOpen(true) }}
            >
              Sign in
            </NavLink>
            <PopupModal
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              headerText={'Sign In'}
              footerBtnText={'sign in'}
            >
              <div>
                <input type="text" id="username" name="username" placeholder="Enter your username" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" />
              </div>
              <div>
                <input type="password" id="password" name="password" placeholder="Enter your password" className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500" />
              </div>
            </PopupModal>
          </li>
        </ul>
      </nav>
    </header>
  )
}

