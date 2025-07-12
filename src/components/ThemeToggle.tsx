import { useTheme } from "../hooks/useTheme"
import Sun from '../icons/icon-sun.svg'
import Moon from '../icons/icon-moon.svg'

const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="toggle theme-btn">
      {theme === 'light' ? <img src={Moon} alt="dark"/> : <img src={Sun} alt="light"/>}
    </button>
  )
}

export default ThemeToggle