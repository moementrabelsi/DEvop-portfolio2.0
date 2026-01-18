import React, { useState } from 'react'
import './About.css'

function About() {
  const [selectedTab, setSelectedTab] = useState('profile')

  const playerStats = {
    level: 25,
    xp: 1850,
    xpToNext: 2000,
    title: 'DevOps Engineer',
    location: 'Tunis, Tunisia',
    guild: 'Inoui Agency'
  }

  const attributes = [
    { name: 'Cloud Architecture', value: 90, color: 'blue' },
    { name: 'Kubernetes', value: 85, color: 'blue' },
    { name: 'CI/CD Automation', value: 88, color: 'green' },
    { name: 'Containerization', value: 92, color: 'green' },
    { name: 'Monitoring', value: 87, color: 'yellow' },
    { name: 'Full-Stack Dev', value: 82, color: 'yellow' }
  ]

  const quests = [
    {
      id: 1,
      title: 'Master AWS Solutions Architect',
      description: 'Complete AWS Solutions Architect Associate certification',
      progress: 65,
      status: 'in-progress',
      reward: '🏆 AWS Badge'
    },
    {
      id: 2,
      title: 'Terraform Mastery',
      description: 'Achieve HashiCorp Terraform Associate certification',
      progress: 40,
      status: 'in-progress',
      reward: '🏗️ Terraform Badge'
    },
    {
      id: 3,
      title: 'Advanced Kubernetes',
      description: 'Master advanced Kubernetes patterns and architectures',
      progress: 70,
      status: 'in-progress',
      reward: '☸️ K8s Expert Badge'
    },
    {
      id: 4,
      title: 'Cloud Native Expert',
      description: 'Build 10 production-ready cloud-native applications',
      progress: 80,
      status: 'in-progress',
      reward: '☁️ Cloud Master Badge'
    }
  ]

  const achievements = [
    { id: 1, name: 'CKA Certified', icon: '☸️', unlocked: true, date: '2024' },
    { id: 2, name: 'Kubernetes Master', icon: '🚀', unlocked: true, date: '2024' },
    { id: 3, name: 'CI/CD Wizard', icon: '⚙️', unlocked: true, date: '2024' },
    { id: 4, name: 'Cloud Architect', icon: '☁️', unlocked: true, date: '2024' },
    { id: 5, name: 'Full-Stack Hero', icon: '💻', unlocked: true, date: '2023' },
    { id: 6, name: 'Docker Expert', icon: '🐳', unlocked: true, date: '2023' }
  ]

  const xpPercentage = (playerStats.xp / playerStats.xpToNext) * 100

  return (
    <section id="about" className="about-section">
      <h2>PLAYER PROFILE</h2>
      <div className="player-profile">
        <div className="profile-header">
          <div className="player-avatar">
            <div className="avatar-frame">👨‍💻</div>
            <div className="level-badge">Lv.{playerStats.level}</div>
          </div>
          <div className="player-info">
            <div className="player-name">Abdelmoemen Trabelsi</div>
            <div className="player-title">{playerStats.title}</div>
            <div className="player-meta">
              <span className="meta-item">📍 {playerStats.location}</span>
              <span className="meta-item">🏢 {playerStats.guild}</span>
            </div>
            <div className="xp-bar-container">
              <div className="xp-label">XP: {playerStats.xp} / {playerStats.xpToNext}</div>
              <div className="xp-bar">
                <div 
                  className="xp-fill" 
                  style={{ width: `${xpPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-tabs">
          <button 
            className={`tab-button ${selectedTab === 'profile' ? 'active' : ''}`}
            onClick={() => setSelectedTab('profile')}
          >
            STATS
          </button>
          <button 
            className={`tab-button ${selectedTab === 'quests' ? 'active' : ''}`}
            onClick={() => setSelectedTab('quests')}
          >
            QUESTS
          </button>
          <button 
            className={`tab-button ${selectedTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setSelectedTab('achievements')}
          >
            ACHIEVEMENTS
          </button>
        </div>

        <div className="profile-content">
          {selectedTab === 'profile' && (
            <div className="stats-panel">
              <div className="panel-title">ATTRIBUTES</div>
              <div className="attributes-list">
                {attributes.map((attr, index) => (
                  <div key={index} className="attribute-item">
                    <div className="attribute-header">
                      <span className="attribute-name">{attr.name}</span>
                      <span className="attribute-value">{attr.value}%</span>
                    </div>
                    <div className="attribute-bar">
                      <div 
                        className={`attribute-fill attr-${attr.color}`}
                        style={{ width: `${attr.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bio-section">
                <div className="bio-title">PLAYER BIO</div>
                <div className="bio-text">
                  Passionate DevOps Engineer and Full-Stack Developer with expertise in 
                  cloud-native technologies, containerization, and automation. Specializing 
                  in designing scalable Kubernetes clusters, automating CI/CD pipelines, and 
                  implementing robust monitoring solutions. Continuously leveling up skills 
                  in cloud and DevOps technologies.
                </div>
              </div>
            </div>
          )}

          {selectedTab === 'quests' && (
            <div className="quests-panel">
              <div className="panel-title">ACTIVE QUESTS</div>
              <div className="quests-list">
                {quests.map(quest => (
                  <div key={quest.id} className="quest-item">
                    <div className="quest-header">
                      <span className="quest-icon">📜</span>
                      <span className="quest-title">{quest.title}</span>
                      <span className={`quest-status ${quest.status}`}>
                        {quest.status === 'in-progress' ? 'IN PROGRESS' : 'COMPLETED'}
                      </span>
                    </div>
                    <div className="quest-description">{quest.description}</div>
                    <div className="quest-progress">
                      <div className="quest-progress-bar">
                        <div 
                          className="quest-progress-fill"
                          style={{ width: `${quest.progress}%` }}
                        ></div>
                      </div>
                      <span className="quest-progress-text">{quest.progress}%</span>
                    </div>
                    <div className="quest-reward">Reward: {quest.reward}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === 'achievements' && (
            <div className="achievements-panel">
              <div className="panel-title">ACHIEVEMENTS UNLOCKED</div>
              <div className="achievements-grid">
                {achievements.map(achievement => (
                  <div key={achievement.id} className="achievement-item unlocked">
                    <div className="achievement-icon">{achievement.icon}</div>
                    <div className="achievement-name">{achievement.name}</div>
                    <div className="achievement-date">{achievement.date}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
