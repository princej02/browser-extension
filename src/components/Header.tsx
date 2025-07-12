import { Logo } from './Logo'
import ThemeToggle from './ThemeToggle'

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Logo />
      </div>
      <ThemeToggle />
    </header>
  )
}

export default Header