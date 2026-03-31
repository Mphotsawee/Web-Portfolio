import React from 'react'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-background"></div>

      <div className="hero-content">
        <div className="hero-card">
          <div className="card-header">
            <span className="card-icon"></span>
          </div>

          <h1 className="hero-title">Welcome to My Portfolio</h1>

          <p className="hero-subtitle">
            Developer
          </p>

          <p className="hero-description">
            Building beautiful, functional web experiences with modern technologies. Let's create something amazing together.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary">
              <a href="#works">View My Work</a>
            </button>
            <button className="btn btn-secondary">
              <a href="#contact">Get In Touch</a>
            </button>
          </div>

          <div className="hero-scroll">
            ↓ Scroll to Explore ↓
          </div>
        </div>
      </div>
    </section>
  )
}
