import React, { useState, useEffect } from 'react'
import './Experience.css'

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Inoui Agency',
      location: 'France',
      period: 'January 2025 – Present',
      description: [
        'Design, implementation, and maintenance of scalable and highly available Kubernetes clusters to support cloud-native applications',
        'Automation of CI/CD pipelines using Jenkins, GitLab CI, and Terraform, enabling reliable and repeatable deployments on AWS EKS',
        'Implementation of monitoring and alerting solutions with Prometheus and Grafana to improve system observability and incident response',
        'Close collaboration with development teams to containerize applications using Docker and optimize deployment workflows',
        'Deployment and management of AWS infrastructure including EC2, S3, RDS, and IAM with a strong focus on security, scalability, and reliability'
      ],
      tech: ['Kubernetes', 'AWS EKS', 'Jenkins', 'GitLab CI', 'Terraform', 'Prometheus', 'Grafana', 'Docker', 'AWS']
    },
    {
      title: 'Full-Stack Developer',
      company: 'Inoui Agency',
      location: 'France',
      period: 'August 2024 – Present',
      description: [
        'Development of modern web applications using the MERN stack and Vue.js, with secure authentication and RESTful APIs',
        'Implementation of a facial recognition module using TensorFlow and OpenCV',
        'Containerization of applications using Docker and deployment to Kubernetes environments (Minikube) with CI/CD pipelines running on AWS',
        'Active contribution to application performance, security, and deployment automation'
      ],
      tech: ['MERN Stack', 'Vue.js', 'TensorFlow', 'OpenCV', 'Docker', 'Kubernetes', 'AWS', 'CI/CD']
    },
    {
      title: 'Full-Stack Developer Intern',
      company: 'Inoui Agency',
      location: 'France',
      period: 'February 2024 – August 2024',
      description: [
        'Development of responsive user interfaces with Vue.js and secure MERN applications',
        'Integration of machine learning components for facial recognition using TensorFlow and OpenCV',
        'Docker-based containerization, Kubernetes deployments, and CI/CD automation on AWS to ensure consistent application delivery'
      ],
      tech: ['Vue.js', 'MERN', 'TensorFlow', 'OpenCV', 'Docker', 'Kubernetes', 'AWS']
    },
    {
      title: 'Front-End Developer Intern',
      company: 'BlueOcean Gaming',
      location: 'Slovenia',
      period: 'April 2023 – October 2023',
      description: [
        'Frontend refactoring and optimization using React.js to enhance performance and user experience',
        'Integration of REST APIs and state management with Redux',
        'Implementation of client-side routing using React Router and HTTP communication via Axios',
        'Collaboration with backend teams to deliver scalable and maintainable frontend solutions'
      ],
      tech: ['React.js', 'Redux', 'React Router', 'Axios', 'REST APIs']
    }
  ]

  // Keyboard navigation for experience items
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return
      
      if (e.key === 'ArrowLeft' && e.ctrlKey) {
        e.preventDefault()
        setActiveIndex(prev => (prev > 0 ? prev - 1 : prev))
      }
      if (e.key === 'ArrowRight' && e.ctrlKey) {
        e.preventDefault()
        setActiveIndex(prev => (prev < experiences.length - 1 ? prev + 1 : prev))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [experiences.length])

  return (
    <section id="experience" className="experience-section">
      <h2>EXPERIENCE</h2>
      <div className="experience-container">
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${activeIndex === index ? 'active' : ''} ${hoveredIndex === index ? 'hovered' : ''}`}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-title">{exp.title}</div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-period">{exp.period}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-details">
          {experiences[activeIndex] && (
            <div className="experience-card">
              <div className="card-header">
                <h3 className="card-title">{experiences[activeIndex].title}</h3>
                <div className="card-meta">
                  <span className="card-company">{experiences[activeIndex].company}</span>
                  <span className="card-location">📍 {experiences[activeIndex].location}</span>
                  <span className="card-period">{experiences[activeIndex].period}</span>
                </div>
              </div>
              <div className="card-body">
                <ul className="card-description">
                  {experiences[activeIndex].description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="card-tech">
                  <div className="tech-label">Technologies:</div>
                  <div className="tech-tags">
                    {experiences[activeIndex].tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Experience

