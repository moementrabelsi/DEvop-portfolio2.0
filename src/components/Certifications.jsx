import React, { useState } from 'react'
import './Certifications.css'

function Certifications() {
  const [hoveredCert, setHoveredCert] = useState(null)

  const certifications = [
    {
      name: 'Certified Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation (CNCF)',
      date: 'Earned',
      status: 'completed',
      link: 'https://www.credly.com/badges/39218f61-3f24-4042-8141-f0733109e9bd/public_url',
      icon: '☸️',
      color: 'blue'
    },
    {
      name: 'AWS Solutions Architect - Associate',
      issuer: 'Amazon Web Services (AWS)',
      date: 'In Progress',
      status: 'in-progress',
      link: null,
      icon: '☁️',
      color: 'yellow'
    },
    {
      name: 'HashiCorp Certified: Terraform Associate',
      issuer: 'HashiCorp',
      date: 'In Progress',
      status: 'in-progress',
      link: null,
      icon: '🏗️',
      color: 'green'
    }
  ]

  return (
    <section id="certifications" className="certifications-section">
      <h2>CERTIFICATIONS</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`cert-card cert-${cert.color} ${cert.status} ${hoveredCert === index ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCert(index)}
            onMouseLeave={() => setHoveredCert(null)}
          >
            <div className="cert-header">
              <div className="cert-icon-wrapper">
                <div className="cert-icon-large">{cert.icon}</div>
              </div>
              <div className="cert-status-badge">
                {cert.status === 'completed' ? (
                  <span className="status-completed">✓ EARNED</span>
                ) : (
                  <span className="status-progress">⏳ IN PROGRESS</span>
                )}
              </div>
            </div>
            
            <div className="cert-body">
              <h3 className="cert-name">{cert.name}</h3>
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-date">{cert.date}</div>
            </div>

            <div className="cert-footer">
              {cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  View Credential on Credly →
                </a>
              ) : cert.status === 'in-progress' ? (
                <div className="progress-indicator">
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                  </div>
                  <span className="progress-text">Studying...</span>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>

      <div className="certifications-note">
        <p>💡 Continuously learning and expanding my cloud and DevOps expertise</p>
      </div>
    </section>
  )
}

export default Certifications

