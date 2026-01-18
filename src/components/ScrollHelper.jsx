import React, { useState, useEffect } from 'react'
import './ScrollHelper.css'

function ScrollHelper({ sections }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentSection, setCurrentSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollableHeight = documentHeight - windowHeight
      const progress = (scrollTop / scrollableHeight) * 100
      setScrollProgress(progress)

      // Show back to top button after scrolling down
      setShowBackToTop(scrollTop > 300)

      // Update current section
      const scrollPosition = scrollTop + 200
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sections])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const sectionLabels = {
    'hero': '🏠',
    'about': '👤',
    'experience': '💼',
    'education': '🎓',
    'certifications': '🏆',
    'skills': '⚙️',
    'projects': '🗺️',
    'boss-fight': '⚔️',
    'contact': '📧'
  }

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-container">
        <div 
          className="scroll-progress-bar"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Quick Navigation Dots */}
      <div className="quick-nav">
        {sections.map((section, index) => (
          <button
            key={section}
            className={`quick-nav-dot ${currentSection === section ? 'active' : ''}`}
            onClick={() => scrollToSection(section)}
            title={`Go to ${sectionLabels[section] || section}`}
            aria-label={`Navigate to ${section}`}
          >
            <span className="dot-icon">{sectionLabels[section] || '•'}</span>
          </button>
        ))}
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          title="Back to top"
          aria-label="Scroll to top"
        >
          <span className="back-to-top-icon">↑</span>
          <span className="back-to-top-text">TOP</span>
        </button>
      )}
    </>
  )
}

export default ScrollHelper

