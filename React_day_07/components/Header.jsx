import { useContext } from "react";
import { darkModeContext } from "../contexts/contextProvider";

export default function Header() {
  const [darkMode, setDarkMode] = useContext(darkModeContext);

  // (updating dom or its styles) this practice is never recommended react 
  // i am sill doing this because if i decide to do it by React's way, then i need to make so many changes in components and its styles
  // and i do not wanted to do it, because i am tired 💀 
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }

  return (
    <header>
      <nav>
        <a href="#">Products Manager</a>

        <div className="dark_mode_div" onClick={() => {
          localStorage.setItem("darkMode", !darkMode);
          setDarkMode(!darkMode);
        }}>
          <p>{darkMode ? 'Light mode' : 'Dark Mode'}</p>
          <i className={`ri-${darkMode ? 'sun' : 'moon'}-fill`}></i>
        </div>
      </nav>
    </header>
  )
}
