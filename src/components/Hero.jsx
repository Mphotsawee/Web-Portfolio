import React from 'react'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="mystical-symbols">
          ✧ ⟡ ✦ ☆ ⚡ ☆ ✦ ⟡ ✧
        </div>
      </div>

      <div className="hero-content">
        <div className="hero-card">
          <div className="card-header">
            <span className="card-icon">📖</span>
          </div>

          <h1 className="hero-title">PERSONAL PORTFOLIO</h1>

          <p className="hero-subtitle">
            Crafting Digital Experiences with Purpose
          </p>

          <p className="hero-description">
            A showcase of creative projects, technical skills, and collaborative work in web development and design.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              <a href="#works">VIEW MY WORK</a>
            </button>
            <button className="btn btn-secondary">
              <a href="#contact">GET IN TOUCH</a>
            </button>
          </div>

          <div className="hero-scroll">
            ↓ SCROLL TO EXPLORE ↓
          </div>
        </div>
      </div>
    </section>
  )
}
