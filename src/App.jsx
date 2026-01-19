import React, { useState, useEffect, useCallback, Suspense, lazy } from 'react'
import Navigation from './components/Navigation'
import KeyboardShortcuts from './components/KeyboardShortcuts'
import ScrollHelper from './components/ScrollHelper'
import { initGA, trackPageView, trackSectionView, trackShortcutUsage, trackTimeOnPage, trackEvent, trackButtonClick } from './utils/analytics'
import './App.css'

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Education = lazy(() => import('./components/Education'))
const Certifications = lazy(() => import('./components/Certifications'))
const Skills = lazy(() => import('./components/Skills'))
const Projects = lazy(() => import('./components/Projects'))
const BossFight = lazy(() => import('./components/BossFight'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  const [currentSection, setCurrentSection] = useState('hero')
  const [showCursor, setShowCursor] = useState(true)
  const [showShortcuts, setShowShortcuts] = useState(false)
  const [konamiCode, setKonamiCode] = useState([])
  const [easterEgg, setEasterEgg] = useState(false)

  const sections = ['hero', 'about', 'experience', 'education', 'certifications', 'skills', 'projects', 'boss-fight', 'contact']
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

  // Initialize Google Analytics on mount
  useEffect(() => {
    try {
      const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
      if (measurementId) {
        initGA(measurementId)
        trackPageView(window.location.pathname)
      }
    } catch (error) {
      console.debug('Analytics initialization error:', error)
    }
  }, [])

  // Track section views
  useEffect(() => {
    try {
      if (currentSection) {
        trackSectionView(currentSection)
      }
    } catch (error) {
      console.debug('Section tracking error:', error)
    }
  }, [currentSection])

  // Track time on page
  useEffect(() => {
    const startTime = Date.now()
    return () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000)
      if (timeSpent > 5) { // Only track if user spent more than 5 seconds
        trackTimeOnPage(timeSpent)
      }
    }
  }, [])

  // Throttle scroll handler for better performance
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 200

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
  }, [sections])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [handleScroll])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 530)
    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger shortcuts when typing in inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        if (e.key === 'Escape') {
          setShowShortcuts(false)
        }
        return
      }

      // Number keys for navigation (1-9)
      const num = parseInt(e.key)
      if (num >= 1 && num <= 9) {
        e.preventDefault()
        const sectionId = sections[num - 1]
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          trackShortcutUsage(`number_${num}`)
        }
      }

      // Home key - scroll to top
      if (e.key === 'Home') {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
        trackShortcutUsage('home')
      }

      // End key - scroll to bottom
      if (e.key === 'End') {
        e.preventDefault()
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        trackShortcutUsage('end')
      }

      // Arrow keys for section navigation
      if (e.key === 'ArrowDown' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault()
        const currentIndex = sections.indexOf(currentSection)
        if (currentIndex < sections.length - 1) {
          const nextSection = sections[currentIndex + 1]
          document.getElementById(nextSection)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          trackShortcutUsage('arrow_down')
        }
      }

      if (e.key === 'ArrowUp' && !e.shiftKey && !e.ctrlKey && !e.altKey) {
        e.preventDefault()
        const currentIndex = sections.indexOf(currentSection)
        if (currentIndex > 0) {
          const prevSection = sections[currentIndex - 1]
          document.getElementById(prevSection)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          trackShortcutUsage('arrow_up')
        }
      }

      // ? key to toggle shortcuts (works with or without Shift)
      if (e.key === '?' || (e.key === '/' && e.shiftKey)) {
        e.preventDefault()
        setShowShortcuts(prev => !prev)
        trackShortcutUsage('question_mark')
      }

      // ESC key to close shortcuts
      if (e.key === 'Escape') {
        setShowShortcuts(false)
        setEasterEgg(false)
      }

      // Konami Code detection
      const newKonami = [...konamiCode, e.key].slice(-10)
      setKonamiCode(newKonami)
      
      if (newKonami.length === konamiSequence.length && 
          newKonami.every((key, i) => key.toLowerCase() === konamiSequence[i].toLowerCase())) {
        setEasterEgg(true)
        setKonamiCode([])
        // Add celebration effect
        document.body.classList.add('konami-active')
        setTimeout(() => {
          document.body.classList.remove('konami-active')
        }, 3000)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [currentSection, konamiCode])

  return (
    <div className="app">
      <div className="scanlines"></div>
      <div className="noise"></div>
      <Navigation currentSection={currentSection} />
      
      {showShortcuts && <KeyboardShortcuts onClose={() => setShowShortcuts(false)} />}
      
      {easterEgg && (
        <div className="easter-egg">
          <div className="easter-egg-content">
            <h2>🎮 KONAMI CODE ACTIVATED! 🎮</h2>
            <p>You found the secret!</p>
            <button 
              onClick={() => {
                setEasterEgg(false)
                trackEvent('easter_egg', { action: 'konami_code_activated' })
              }} 
              className="pixel-button"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}

      <button 
        className="shortcuts-hint"
        onClick={() => {
          setShowShortcuts(true)
          trackButtonClick('shortcuts_hint', 'header')
        }}
        title="Click to view keyboard shortcuts"
      >
        Press <kbd>?</kbd> for shortcuts
      </button>

      <ScrollHelper sections={sections} />
      
      <main className="main-content">
        <Suspense fallback={<div className="loading-section">Loading...</div>}>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Certifications />
          <Skills />
          <Projects />
          <BossFight />
          <Contact />
        </Suspense>
      </main>

      <div className="retro-border"></div>
    </div>
  )
}

export default App

