import React, { useState, useEffect } from 'react'
import './Hero.css'

function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'DevOps Engineer | Certified Kubernetes Administrator'
  const [showCursor, setShowCursor] = useState(true)
  const [avatarClicked, setAvatarClicked] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleAvatarClick = () => {
    setAvatarClicked(true)
    setTimeout(() => setAvatarClicked(false), 1000)
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-avatar">
          <div 
            className={`avatar-container ${avatarClicked ? 'clicked' : ''}`}
            onClick={handleAvatarClick}
            style={{ cursor: 'pointer' }}
            title="Click me! 👆"
          >
            <div className="avatar-pixel">👨‍💻</div>
          </div>
        </div>
        
        <h1 className="hero-title">
          <span className="title-line">ABDELMOEMEN</span>
          <span className="title-line">TRABELSI</span>
        </h1>
        
        <div className="hero-subtitle">
          <span className="typing-text">
            {displayedText}
            {showCursor && <span className="typing-cursor">|</span>}
          </span>
        </div>

        <div className="hero-location">
          <span className="pixel-icon">📍</span>
          <span>Tunis, Tunisia</span>
        </div>

        <div className="hero-buttons">
          <button className="pixel-button primary" onClick={scrollToContact}>
            GET IN TOUCH
          </button>
          <a 
            href="https://github.com/moementrabelsi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="pixel-button secondary"
          >
            VIEW GITHUB
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">CKA</div>
            <div className="stat-label">Certified</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">∞</div>
            <div className="stat-label">Passion</div>
          </div>
        </div>
      </div>

      <div className="floating-pixels">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="pixel" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}></div>
        ))}
      </div>
    </section>
  )
}

export default Hero

