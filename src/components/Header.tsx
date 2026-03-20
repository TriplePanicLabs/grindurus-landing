import { ThemeToggle } from './ThemeToggle'
import { APP_URL } from '../config'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="header-logo" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="GrindURUS" className="header-logo-img" />
            <span className="header-logo-text">GrindURUS</span>
          </a>
        </div>

        <div className="header-actions">
          <a href={`${APP_URL}/grinders`} className="header-open-app-btn">
            Open App
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
