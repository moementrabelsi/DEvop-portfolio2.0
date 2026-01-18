import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this to a backend
    const mailtoLink = `mailto:abdelmoementrabelsi@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage: ${formData.message}`
    window.location.href = mailtoLink
    setFormData({ name: '', email: '', message: '' })
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

            <button type="submit" className="pixel-button submit-button">
              SEND MESSAGE
            </button>
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
