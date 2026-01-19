// Google Analytics 4 (GA4) utility functions

// Initialize Google Analytics
export const initGA = (measurementId) => {
  try {
    if (typeof window !== 'undefined' && measurementId) {
      // Load gtag script
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      script1.onerror = () => {
        console.debug('Failed to load Google Analytics script')
      }
      document.head.appendChild(script1)

      // Initialize gtag
      window.dataLayer = window.dataLayer || []
      function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag = gtag
      gtag('js', new Date())
      gtag('config', measurementId, {
        page_path: window.location.pathname,
        send_page_view: true
      })
    }
  } catch (error) {
    console.debug('Google Analytics initialization error:', error)
  }
}

// Track page view
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
    if (measurementId) {
      window.gtag('config', measurementId, {
        page_path: path,
        page_title: document.title
      })
    }
  }
}

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, eventParams)
    }
  } catch (error) {
    // Silently fail if analytics is not available
    console.debug('Analytics tracking error:', error)
  }
}

// Track section views
export const trackSectionView = (sectionName) => {
  try {
    trackEvent('section_view', {
      section_name: sectionName,
      page_path: typeof window !== 'undefined' ? window.location.pathname : ''
    })
  } catch (error) {
    console.debug('Section view tracking error:', error)
  }
}

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location
  })
}

// Track link clicks
export const trackLinkClick = (linkUrl, linkText) => {
  trackEvent('link_click', {
    link_url: linkUrl,
    link_text: linkText
  })
}

// Track project views
export const trackProjectView = (projectName) => {
  trackEvent('project_view', {
    project_name: projectName
  })
}

// Track skill interactions
export const trackSkillInteraction = (skillName, action) => {
  trackEvent('skill_interaction', {
    skill_name: skillName,
    action: action
  })
}

// Track boss fight interactions
export const trackBossFightAction = (action, details = {}) => {
  trackEvent('boss_fight_action', {
    action: action,
    ...details
  })
}

// Track contact form interactions
export const trackContactAction = (action, method) => {
  trackEvent('contact_action', {
    action: action,
    contact_method: method
  })
}

// Track keyboard shortcuts usage
export const trackShortcutUsage = (shortcut) => {
  trackEvent('keyboard_shortcut', {
    shortcut: shortcut
  })
}

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  trackEvent('time_on_page', {
    time_seconds: timeInSeconds
  })
}

