import React, { useState, useRef, useEffect } from 'react'
import { trackProjectView } from '../utils/analytics'
import './Projects.css'

function Projects() {
  const [selectedLevel, setSelectedLevel] = useState(null)
  const overviewRef = useRef(null)
  const detailsRef = useRef(null)

  const levels = [
    {
      id: 1,
      title: 'Full-Stack Foundations',
      icon: '🌱',
      projectName: 'Secure Web Platform',
      type: 'Full-Stack Application',
      difficulty: 2,
      mission: 'Build a secure, scalable web application using modern full-stack technologies.',
      techStack: ['React / Vue.js', 'Node.js & Express', 'MongoDB', 'REST APIs', 'Docker'],
      features: [
        'Secure authentication & authorization',
        'Modular REST API architecture',
        'Responsive UI',
        'Dockerized services for consistency'
      ],
      victoryResult: [
        'Clean separation of frontend & backend',
        'Production-ready architecture',
        'Improved development & deployment workflow'
      ],
      color: 'green'
    },
    {
      id: 2,
      title: 'CI/CD Automation',
      icon: '⚙️',
      projectName: 'Automated Delivery Pipeline',
      type: 'DevOps Project',
      difficulty: 3,
      mission: 'Eliminate manual deployments and improve release reliability.',
      techStack: ['Jenkins', 'GitLab CI / GitHub Actions', 'Docker', 'Terraform'],
      features: [
        'Automated build, test & deploy pipelines',
        'Infrastructure as Code using Terraform',
        'Multi-environment deployments (dev / prod)',
        'Rollback support'
      ],
      victoryResult: [
        'Faster releases',
        'Reduced human error',
        'High deployment reliability'
      ],
      color: 'blue'
    },
    {
      id: 3,
      title: 'Cloud & Kubernetes',
      icon: '☁️',
      projectName: 'Cloud-Native Kubernetes Infrastructure',
      type: 'DevOps / Cloud',
      difficulty: 4,
      mission: 'Design and deploy a scalable Kubernetes infrastructure on AWS.',
      techStack: ['Kubernetes (EKS / Minikube)', 'Docker', 'AWS (EC2, S3, RDS, IAM)', 'Terraform', 'NGINX'],
      features: [
        'Kubernetes cluster design & management',
        'Auto-scaling & high availability',
        'Secure networking & IAM policies',
        'Cloud-native deployment strategies'
      ],
      victoryResult: [
        'Scalable and resilient infrastructure',
        'Production-grade Kubernetes environment',
        'Zero-downtime deployments'
      ],
      color: 'yellow',
      isBoss: true
    },
    {
      id: 4,
      title: 'AI & Advanced Systems',
      icon: '👾',
      projectName: 'Production Monitoring System',
      type: 'DevOps',
      difficulty: 4,
      mission: 'Gain full visibility over production systems.',
      techStack: ['Prometheus', 'Grafana', 'AWS CloudWatch'],
      features: [
        'Real-time metrics collection',
        'Custom dashboards',
        'Alerting for incidents',
        'Performance monitoring'
      ],
      victoryResult: [
        'Faster incident response',
        'Improved system stability',
        'Data-driven decisions'
      ],
      color: 'red'
    },
    {
      id: 5,
      title: 'AI Module',
      icon: '🧠',
      projectName: 'AI Face Recognition System',
      type: 'Full-Stack / AI',
      difficulty: 5,
      mission: 'Integrate AI into a real-world application.',
      techStack: ['TensorFlow', 'OpenCV', 'MERN Stack', 'Docker', 'Kubernetes'],
      features: [
        'Facial recognition module',
        'Secure API integration',
        'Containerized AI services',
        'Kubernetes deployment'
      ],
      victoryResult: [
        'Successful AI integration',
        'Scalable AI deployment',
        'Real production use case'
      ],
      color: 'purple',
      isBonus: true
    }
  ]

  const renderStars = (count) => {
    return '⭐'.repeat(count)
  }

  const handleCloseLevel = () => {
    setSelectedLevel(null)
    // Scroll back to overview after a short delay to allow state update
    setTimeout(() => {
      if (overviewRef.current) {
        overviewRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 100)
  }

  const handleLevelClick = (levelId) => {
    if (selectedLevel === levelId) {
      // If clicking the same level, close it and scroll back
      handleCloseLevel()
    } else {
      // Open the selected level
      setSelectedLevel(levelId)
      const level = levels.find(l => l.id === levelId)
      if (level) {
        trackProjectView(level.title)
      }
    }
  }

  // Scroll to details when a level is opened
  useEffect(() => {
    if (selectedLevel && detailsRef.current) {
      // Small delay to ensure the DOM has updated
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    }
  }, [selectedLevel])

  return (
    <section id="projects" className="projects-section">
      <h2>PROJECTS — BOSS BATTLES & GAME LEVELS</h2>
      
      <div className="world-map-overview" ref={overviewRef}>
        <div className="map-title">🗺️ PROJECTS OVERVIEW (World Map)</div>
        <div className="map-subtitle">Select a Level</div>
        <div className="map-note">Levels unlock from left to right</div>
        
        <div className="levels-map">
          {levels.map((level, index) => (
            <div
              key={level.id}
              className={`level-node level-${level.color} ${selectedLevel === level.id ? 'selected' : ''} ${level.isBoss ? 'boss-level' : ''} ${level.isBonus ? 'bonus-level' : ''}`}
              onClick={() => handleLevelClick(level.id)}
            >
              <div className="level-number">LEVEL {level.id}</div>
              <div className="level-icon">{level.icon}</div>
              <div className="level-title">{level.title}</div>
              {level.isBoss && <div className="boss-badge">BOSS</div>}
              {level.isBonus && <div className="bonus-badge">BONUS</div>}
              {index < levels.length - 1 && <div className="level-connector">→</div>}
            </div>
          ))}
        </div>
      </div>

      {selectedLevel && (
        <div className="level-details-container" ref={detailsRef}>
          {levels
            .filter(level => level.id === selectedLevel)
            .map(level => (
              <div key={level.id} className={`level-details level-${level.color}`}>
                <div className="level-header">
                  <div className="level-header-left">
                    <div className="level-icon-large">{level.icon}</div>
                    <div>
                      <div className="level-details-title">{level.title}</div>
                      <div className="level-project-name">{level.projectName}</div>
                      <div className="level-type">{level.type}</div>
                    </div>
                  </div>
                  <div className="level-header-right">
                    <div className="difficulty-rating">
                      <div className="difficulty-label">Difficulty:</div>
                      <div className="difficulty-stars">{renderStars(level.difficulty)}</div>
                    </div>
                    <button 
                      className="close-level-button"
                      onClick={handleCloseLevel}
                      aria-label="Close level details and return to overview"
                    >
                      ✕
                    </button>
                  </div>
                </div>

                <div className="level-content">
                  <div className="mission-section">
                    <div className="section-title">🎯 Mission</div>
                    <div className="mission-text">{level.mission}</div>
                  </div>

                  <div className="tech-stack-section">
                    <div className="section-title">🛠️ Tech Stack (Power-Ups Used)</div>
                    <div className="tech-stack-grid">
                      {level.techStack.map((tech, index) => (
                        <div key={index} className="tech-item">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="features-section">
                    <div className="section-title">🧩 Key Features</div>
                    <ul className="features-list">
                      {level.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="victory-section">
                    <div className="section-title">🏆 Victory Result</div>
                    <ul className="victory-list">
                      {level.victoryResult.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </section>
  )
}

export default Projects

