import React, { useState } from 'react'
import './Skills.css'

function Skills() {
  const [selectedItem, setSelectedItem] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  const inventoryCategories = [
    {
      title: '⚙️ DevOps Items',
      color: 'red',
      items: [
        {
          id: 1,
          icon: '🗡️',
          name: 'Docker Blade',
          description: 'Containerization & deployment',
          rarity: 'epic'
        },
        {
          id: 2,
          icon: '🛡️',
          name: 'Kubernetes Shield',
          description: 'Cluster design & management (CKA)',
          rarity: 'legendary'
        },
        {
          id: 3,
          icon: '⚡',
          name: 'CI/CD Star',
          description: 'Jenkins, GitLab CI, GitHub Actions',
          rarity: 'epic'
        },
        {
          id: 4,
          icon: '🧱',
          name: 'Terraform Blocks',
          description: 'Infrastructure as Code',
          rarity: 'epic'
        },
        {
          id: 5,
          icon: '📡',
          name: 'Monitoring Radar',
          description: 'Prometheus & Grafana',
          rarity: 'rare'
        }
      ]
    },
    {
      title: '☁️ Cloud Items',
      color: 'blue',
      items: [
        {
          id: 6,
          icon: '🔥',
          name: 'AWS Fire Flower',
          description: 'EC2, S3, RDS, EKS, IAM',
          rarity: 'legendary'
        },
        {
          id: 7,
          icon: '☁️',
          name: 'CloudWatch Eye',
          description: 'Logs & monitoring',
          rarity: 'rare'
        },
        {
          id: 8,
          icon: '⚙️',
          name: 'Lambda Core',
          description: 'Serverless basics',
          rarity: 'epic'
        }
      ]
    },
    {
      title: '💻 Full-Stack Items',
      color: 'yellow',
      items: [
        {
          id: 9,
          icon: '🧠',
          name: 'MERN Crystal',
          description: 'MongoDB, Express, React, Node',
          rarity: 'epic'
        },
        {
          id: 10,
          icon: '🎨',
          name: 'Vue Potion',
          description: 'Vue.js UI development',
          rarity: 'rare'
        },
        {
          id: 11,
          icon: '🔐',
          name: 'Auth Key',
          description: 'Secure authentication & APIs',
          rarity: 'epic'
        }
      ]
    }
  ]

  const languages = [
    { name: 'Arabic', level: 'Native', icon: '🌍' },
    { name: 'French', level: 'Advanced', icon: '🇫🇷' },
    { name: 'English', level: 'Advanced', icon: '🇬🇧' },
    { name: 'German', level: 'Elementary', icon: '🇩🇪' }
  ]

  const hobbies = [
    { name: 'Camping and outdoor exploration', icon: '⛺' },
    { name: 'Strategy and social video games', icon: '🎮' },
    { name: 'Cinema and film analysis', icon: '🎬' },
    { name: 'Continuous learning in cloud and DevOps technologies', icon: '📚' }
  ]

  const getRarityColor = (rarity) => {
    switch (rarity) {
      case 'legendary':
        return 'var(--nintendo-yellow)'
      case 'epic':
        return 'var(--nintendo-red)'
      case 'rare':
        return 'var(--nintendo-blue)'
      default:
        return 'var(--nintendo-green)'
    }
  }

  return (
    <section id="skills" className="skills-section">
      <h2>INVENTORY</h2>
      <div className="inventory-container">
        {inventoryCategories.map((category, catIndex) => (
          <div key={catIndex} className={`inventory-category category-${category.color}`}>
            <div className="category-header">
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="items-grid">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className={`inventory-item rarity-${item.rarity} ${hoveredItem === item.id ? 'hovered' : ''} ${selectedItem === item.id ? 'selected' : ''}`}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                  style={{
                    '--rarity-color': getRarityColor(item.rarity)
                  }}
                >
                  <div className="item-icon">{item.icon}</div>
                  <div className="item-name">{item.name}</div>
                  <div className="item-description">{item.description}</div>
                  <div className="item-rarity">{item.rarity.toUpperCase()}</div>
                  {selectedItem === item.id && (
                    <div className="item-details">
                      <div className="item-stats">
                        <div className="stat-line">
                          <span>Power:</span>
                          <span className="stat-value">★★★★★</span>
                        </div>
                        <div className="stat-line">
                          <span>Mastery:</span>
                          <span className="stat-value">Expert</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="additional-info">
        <div className="languages-section">
          <h3 className="section-subtitle">🌍 LANGUAGES</h3>
          <div className="languages-list">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <span className="language-icon">{lang.icon}</span>
                <span className="language-name">{lang.name}</span>
                <span className="language-level">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hobbies-section">
          <h3 className="section-subtitle">🎯 HOBBIES & INTERESTS</h3>
          <div className="hobbies-list">
            {hobbies.map((hobby, index) => (
              <div key={index} className="hobby-item">
                <span className="hobby-icon">{hobby.icon}</span>
                <span>{hobby.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
