import React, { useState, useEffect, useRef } from 'react'
import './Navigation.css'
import profileImage from '../assets/portfolio-img.jpg'

function Navigation({ currentSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false)
  const portfolioRef = useRef(null)

  const mainMenuItems = [
    { id: 'hero', label: 'HOME', icon: '🏠' },
    { id: 'about', label: 'ABOUT', icon: '👤' }
  ]

  const portfolioItems = [
    { id: 'experience', label: 'EXPERIENCE', icon: '💼' },
    { id: 'education', label: 'EDUCATION', icon: '🎓' },
    { id: 'certifications', label: 'CERTIFICATIONS', icon: '🏆' },
    { id: 'skills', label: 'SKILLS', icon: '⚙️' },
    { id: 'projects', label: 'PROJECTS', icon: '🗺️' },
    { id: 'boss-fight', label: 'BOSS FIGHT', icon: '⚔️' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
    setIsPortfolioOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (portfolioRef.current && !portfolioRef.current.contains(event.target)) {
        setIsPortfolioOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Check if current section is in portfolio items
  const isPortfolioActive = portfolioItems.some(item => item.id === currentSection)

  return (
    <nav className="retro-nav">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('hero')}>
          <img 
            src={profileImage} 
            alt="Abdelmoemen Trabelsi"
            className="nav-logo-image"
            onError={(e) => {
              e.target.style.display = 'none'
              if (e.target.nextSibling) {
                e.target.nextSibling.style.display = 'inline-block'
              }
            }}
          />
          <span className="nav-emoji" style={{ display: 'none' }}>👨‍💻</span>
          <div className="nav-logo-text">
            <div className="nav-name">Abdelmoemen Trabelsi</div>
            <div className="nav-subtitle">DevOps Engineer - Certified CKA</div>
          </div>
        </div>
        
        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {mainMenuItems.map(item => (
            <li key={item.id}>
              <button
                className={`nav-link ${currentSection === item.id ? 'active' : ''}`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
          
          <li className="nav-dropdown" ref={portfolioRef}>
            <button
              className={`nav-link nav-dropdown-toggle ${isPortfolioActive ? 'active' : ''}`}
              onClick={() => setIsPortfolioOpen(!isPortfolioOpen)}
            >
              <span className="nav-icon">📁</span>
              <span>PORTFOLIO</span>
              <span className="dropdown-arrow">{isPortfolioOpen ? '▼' : '▶'}</span>
            </button>
            {isPortfolioOpen && (
              <ul className="dropdown-menu">
                {portfolioItems.map(item => (
                  <li key={item.id}>
                    <button
                      className={`dropdown-link ${currentSection === item.id ? 'active' : ''}`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      <span className="dropdown-icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <button
              className={`nav-link ${currentSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              <span className="nav-icon">📧</span>
              <span>CONTACT</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
