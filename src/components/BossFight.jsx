import React, { useState, useEffect } from 'react'
import './BossFight.css'

function BossFight() {
  const [pipelineStage, setPipelineStage] = useState(0)
  const [bossHealth, setBossHealth] = useState(100)
  const [isFighting, setIsFighting] = useState(false)

  const pipelineStages = [
    { name: 'Code', icon: '💻', color: 'blue' },
    { name: 'Git', icon: '📦', color: 'green' },
    { name: 'CI', icon: '⚙️', color: 'yellow' },
    { name: 'Docker', icon: '🐳', color: 'blue' },
    { name: 'Kubernetes', icon: '☸️', color: 'blue' },
    { name: 'AWS', icon: '☁️', color: 'yellow' },
    { name: 'Monitoring', icon: '📊', color: 'green' }
  ]

  const bossAbilities = [
    {
      name: 'High Traffic',
      icon: '🌊',
      description: 'Incoming traffic spike',
      damage: 25,
      color: 'red'
    },
    {
      name: 'Downtime',
      icon: '💥',
      description: 'Service interruption',
      damage: 30,
      color: 'red'
    },
    {
      name: 'Scaling Issues',
      icon: '📈',
      description: 'Resource constraints',
      damage: 20,
      color: 'yellow'
    }
  ]

  const weapons = [
    {
      name: 'Auto-scaling',
      icon: '⚡',
      description: 'Automatic resource scaling',
      power: 35,
      color: 'green'
    },
    {
      name: 'CI/CD Automation',
      icon: '🚀',
      description: 'Automated deployment pipeline',
      power: 40,
      color: 'blue'
    },
    {
      name: 'Monitoring & Alerting',
      icon: '👁️',
      description: 'Real-time observability',
      power: 30,
      color: 'yellow'
    }
  ]

  useEffect(() => {
    if (isFighting && bossHealth > 0) {
      const interval = setInterval(() => {
        setBossHealth(prev => {
          if (prev <= 0) {
            setIsFighting(false)
            return 0
          }
          return Math.max(0, prev - 2)
        })
      }, 200)
      return () => clearInterval(interval)
    }
  }, [isFighting, bossHealth])

  const handleWeaponAttack = (weapon) => {
    if (!isFighting) setIsFighting(true)
    setBossHealth(prev => Math.max(0, prev - weapon.power))
    if (bossHealth - weapon.power <= 0) {
      setTimeout(() => setIsFighting(false), 1000)
    }
  }

  const handleBossAttack = (ability) => {
    // Boss attacks back - could add player health system here
  }

  const resetFight = () => {
    setBossHealth(100)
    setIsFighting(false)
    setPipelineStage(0)
  }

  return (
    <section id="boss-fight" className="boss-fight-section">
      <h2>BOSS FIGHT – DEVOPS PIPELINE</h2>
      
      <div className="boss-fight-container">
        {/* Pipeline Map */}
        <div className="pipeline-map">
          <div className="map-title">PRODUCTION PIPELINE</div>
          <div className="pipeline-stages">
            {pipelineStages.map((stage, index) => (
              <div
                key={index}
                className={`pipeline-stage stage-${stage.color} ${pipelineStage >= index ? 'active' : ''} ${pipelineStage === index ? 'current' : ''}`}
                onClick={() => setPipelineStage(index)}
              >
                <div className="stage-icon">{stage.icon}</div>
                <div className="stage-name">{stage.name}</div>
                {index < pipelineStages.length - 1 && (
                  <div className="stage-arrow">→</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Boss Section */}
        <div className="boss-arena">
          <div className="boss-header">
            <div className="boss-title">PRODUCTION BOSS</div>
            <div className="boss-health-bar">
              <div className="health-label">BOSS HP: {bossHealth}%</div>
              <div className="health-bar">
                <div 
                  className="health-fill"
                  style={{ width: `${bossHealth}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="boss-abilities">
            <div className="abilities-title">BOSS ABILITIES</div>
            <div className="abilities-grid">
              {bossAbilities.map((ability, index) => (
                <div
                  key={index}
                  className={`boss-ability ability-${ability.color}`}
                  onClick={() => handleBossAttack(ability)}
                >
                  <div className="ability-icon">{ability.icon}</div>
                  <div className="ability-name">{ability.name}</div>
                  <div className="ability-damage">-{ability.damage} HP</div>
                  <div className="ability-description">{ability.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Your Weapons */}
          <div className="weapons-section">
            <div className="weapons-title">YOUR WEAPONS</div>
            <div className="weapons-grid">
              {weapons.map((weapon, index) => (
                <button
                  key={index}
                  className={`weapon-item weapon-${weapon.color} ${bossHealth <= 0 ? 'disabled' : ''}`}
                  onClick={() => handleWeaponAttack(weapon)}
                  disabled={bossHealth <= 0}
                >
                  <div className="weapon-icon">{weapon.icon}</div>
                  <div className="weapon-name">{weapon.name}</div>
                  <div className="weapon-power">+{weapon.power} DMG</div>
                  <div className="weapon-description">{weapon.description}</div>
                </button>
              ))}
            </div>
          </div>

          {bossHealth <= 0 && (
            <div className="victory-screen">
              <div className="victory-message">
                <div className="victory-title">🎉 VICTORY! 🎉</div>
                <div className="victory-text">Production Pipeline Secured!</div>
                <button className="reset-button" onClick={resetFight}>
                  FIGHT AGAIN
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default BossFight

