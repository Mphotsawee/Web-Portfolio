import React from 'react'

export default function Header({ isDarkMode, setIsDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-text">MIN</span>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
            
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
