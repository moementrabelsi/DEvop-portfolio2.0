import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { trackContactAction, trackLinkClick } from '../utils/analytics'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    // Clear status message when user starts typing
    if (submitStatus) {
      setSubmitStatus(null)
      setStatusMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Get EmailJS configuration from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    // Validate environment variables
    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('error')
      setStatusMessage('Email service is not configured. Please contact the site administrator.')
      trackContactAction('form_submit_error', 'emailjs_config_missing')
      return
    }

    setIsLoading(true)
    setSubmitStatus(null)
    setStatusMessage('')

    try {
      // Initialize EmailJS with public key
      emailjs.init(publicKey)

      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'abdelmoementrabelsi@gmail.com'
        }
      )

      // Success
      if (result.status === 200) {
        setSubmitStatus('success')
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.')
        trackContactAction('form_submit', 'emailjs')
        setFormData({ name: '', email: '', message: '' })
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null)
          setStatusMessage('')
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      setStatusMessage(
        error.text || 
        'Failed to send message. Please try again or contact me directly via email.'
      )
      trackContactAction('form_submit_error', 'emailjs')
    } finally {
      setIsLoading(false)
    }
  }

  const contactInfo = [
    {
      label: 'Email',
      displayValue: 'abdelmoementrabelsi@gmail.com',
      link: 'mailto:abdelmoementrabelsi@gmail.com',
      icon: '📧',
      showValue: true
    },
    {
      label: 'Phone',
      displayValue: '+216 55 238 213',
      link: 'tel:+21655238213',
      icon: '📱',
      showValue: true
    },
    {
      label: 'GitHub',
      displayValue: 'View my repositories',
      link: 'https://github.com/moementrabelsi',
      icon: '💻',
      showValue: false
    },
    {
      label: 'LinkedIn',
      displayValue: 'Connect with me',
      link: 'https://www.linkedin.com/in/abdelmoemen-trabelsi-devops/',
      icon: '🔗',
      showValue: false
    }
  ]

  return (
    <section id="contact" className="contact-section">
      <h2>END GAME – CONTACT</h2>
      
      <div className="end-game-message">
        <div className="congratulations-box">
          <div className="congratulations-icon">🎉</div>
          <div className="congratulations-text">
            <div className="congratulations-title">Congratulations!</div>
            <div className="congratulations-subtitle">You've reached production.</div>
          </div>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-header">
            <h3>GET IN TOUCH</h3>
            <p className="contact-subtitle">
              Ready to collaborate on your next project? Let's connect!
            </p>
          </div>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <button
                key={index}
                className="contact-item"
                onClick={() => {
                  trackContactAction('click', info.label.toLowerCase())
                  trackLinkClick(info.link, info.label)
                  if (info.link.startsWith('http')) {
                    window.open(info.link, '_blank', 'noopener,noreferrer')
                  } else {
                    window.location.href = info.link
                  }
                }}
              >
                <span className="contact-icon">{info.icon}</span>
                <div className="contact-item-content">
                  <div className="contact-label">{info.label}</div>
                  <div className="contact-value">{info.displayValue}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pixel-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pixel-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="pixel-input"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="pixel-button submit-button"
              disabled={isLoading}
            >
              {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
            </button>

            {submitStatus && (
              <div className={`form-status ${submitStatus}`}>
                <span className="status-icon">
                  {submitStatus === 'success' ? '✓' : '✗'}
                </span>
                <span className="status-message">{statusMessage}</span>
              </div>
            )}
          </form>
        </div>
      </div>

      <div className="contact-footer">
        <p>© 2025 Abdelmoemen Trabelsi | DevOps Engineer | CKA Certified</p>
        <p className="footer-subtitle">Built with ❤️ and retro vibes</p>
      </div>
    </section>
  )
}

export default Contact
