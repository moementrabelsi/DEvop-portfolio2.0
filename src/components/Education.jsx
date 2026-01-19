import React, { useState } from 'react'
import './Education.css'

function Education() {
  const [selectedSave, setSelectedSave] = useState(null)

  const saveFiles = [
    {
      id: 4,
      year: '2025',
      title: 'DevOps Engineer (Production Systems)',
      company: 'Inoui Agency',
      location: 'France',
      period: 'January 2025 – Present',
      description: 'Design and maintenance of scalable Kubernetes clusters. Automation of CI/CD pipelines using Jenkins, GitLab CI, and Terraform. Implementation of monitoring solutions with Prometheus and Grafana.',
      skills: ['Kubernetes', 'AWS EKS', 'Jenkins', 'GitLab CI', 'Terraform', 'Prometheus', 'Grafana', 'Docker'],
      icon: '☸️',
      color: 'red',
      status: 'active'
    },
    {
      id: 3,
      year: '2024',
      title: 'Full-Stack Developer',
      company: 'Inoui Agency',
      location: 'France',
      period: 'August 2024 – Present',
      description: 'Development of modern web applications using MERN stack and Vue.js. Implementation of facial recognition module using TensorFlow and OpenCV. Containerization and Kubernetes deployments.',
      skills: ['MERN Stack', 'Vue.js', 'TensorFlow', 'OpenCV', 'Docker', 'Kubernetes', 'AWS'],
      icon: '🚀',
      color: 'green',
      status: 'active'
    },
    {
      id: 1,
      year: '2023',
      title: 'Frontend Internship',
      company: 'Inoui Agency',
      location: 'France',
      period: 'April 2023 – October 2023',
      description: 'Frontend refactoring and optimization using React.js. Integration of REST APIs and state management with Redux. Implementation of client-side routing and HTTP communication.',
      skills: ['React.js', 'Redux', 'React Router', 'Axios', 'REST APIs'],
      icon: '💻',
      color: 'blue',
      status: 'completed'
    },
    {
      id: 2,
      year: '2024',
      title: 'Engineering Degree – ESPRIT',
      company: 'ESPRIT – Higher School of Engineering and Technology',
      location: 'Tunis, Tunisia',
      period: 'February 2024',
      description: 'National Engineering Degree in Computer Science. Specialization in software engineering, cloud computing, DevOps practices, and scalable application architecture.',
      skills: ['Software Engineering', 'Cloud Computing', 'DevOps Practices', 'Scalable Architecture'],
      icon: '🎓',
      color: 'yellow',
      status: 'completed'
    }
  ]

  const handleSaveClick = (saveId, e) => {
    e.stopPropagation()
    if (selectedSave === saveId) {
      setSelectedSave(null)
    } else {
      setSelectedSave(saveId)
    }
  }

  return (
    <section id="education" className="education-section">
      <h2>SAVE FILES - MILESTONES</h2>
      <div className="save-files-container">
        <div className="save-files-header">
          <div className="save-header-title">SELECT SAVE FILE</div>
          <div className="save-header-subtitle">Press to load details</div>
        </div>

        <div className="save-files-grid">
          {saveFiles.map((save) => (
            <div
              key={save.id}
              className={`save-file-slot save-${save.color} ${selectedSave === save.id ? 'selected' : ''} ${save.status === 'active' ? 'active' : ''}`}
              onClick={(e) => handleSaveClick(save.id, e)}
            >
              <div className="save-file-header">
                <div className="save-icon">{save.icon}</div>
                <div className="save-status-indicator">
                  {save.status === 'active' ? (
                    <span className="status-active">● ACTIVE</span>
                  ) : (
                    <span className="status-completed">✓ COMPLETED</span>
                  )}
                </div>
              </div>

              <div className="save-file-content">
                <div className="save-year">SAVE {save.year}</div>
                <div className="save-title">{save.title}</div>
                <div className="save-company">{save.company}</div>
                <div className="save-period">{save.period}</div>
              </div>

              {selectedSave === save.id && (
                <div className="save-file-details">
                  <div className="details-header">SAVE FILE DETAILS</div>
                  <div className="details-content">
                    <div className="detail-section">
                      <div className="detail-label">📍 Location:</div>
                      <div className="detail-value">{save.location}</div>
                    </div>
                    <div className="detail-section">
                      <div className="detail-label">📝 Description:</div>
                      <div className="detail-value">{save.description}</div>
                    </div>
                    <div className="detail-section">
                      <div className="detail-label">🛠️ Skills Acquired:</div>
                      <div className="skills-list">
                        {save.skills.map((skill, index) => (
                          <span key={index} className="skill-badge">{skill}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="save-file-footer">
                <div className="save-timestamp">
                  Last Saved: {save.period}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="save-files-note">
          <p>💾 Each save file represents a milestone in my professional journey</p>
        </div>
      </div>
    </section>
  )
}

export default Education
