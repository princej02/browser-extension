import { useTheme } from "../hooks/useTheme"

const ThemeToggle = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

export default ThemeToggle