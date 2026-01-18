import React, { useState, useEffect } from 'react'
import './KeyboardShortcuts.css'

function KeyboardShortcuts({ onClose }) {
  const shortcuts = [
    { key: '1', action: 'Go to Hero section' },
    { key: '2', action: 'Go to About section' },
    { key: '3', action: 'Go to Experience section' },
    { key: '4', action: 'Go to Education section' },
    { key: '5', action: 'Go to Certifications section' },
    { key: '6', action: 'Go to Skills section' },
    { key: '7', action: 'Go to Projects section' },
    { key: '8', action: 'Go to Boss Fight section' },
    { key: '9', action: 'Go to Contact section' },
    { key: 'Home', action: 'Scroll to top' },
    { key: 'End', action: 'Scroll to bottom' },
    { key: '?', action: 'Show/hide shortcuts' },
    { key: 'ESC', action: 'Close modals' },
    { key: '↑ ↓', action: 'Navigate sections' },
  ]

  return (
    <div className="shortcuts-overlay" onClick={onClose}>
      <div className="shortcuts-modal" onClick={(e) => e.stopPropagation()}>
        <div className="shortcuts-header">
          <h2>KEYBOARD SHORTCUTS</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="shortcuts-list">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="shortcut-item">
              <div className="shortcut-key">
                {shortcut.key.split(' ').map((k, i) => (
                  <kbd key={i}>{k}</kbd>
                ))}
              </div>
              <div className="shortcut-action">{shortcut.action}</div>
            </div>
          ))}
        </div>
        <div className="shortcuts-footer">
          <p>Press <kbd>?</kbd> anytime to toggle this help</p>
        </div>
      </div>
    </div>
  )
}

export default KeyboardShortcuts

